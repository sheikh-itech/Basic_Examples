package org.sheikh.itech.rental_car_system.dal;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.sheikh.itech.rental_car_system.model.BokingDetails;
import org.sheikh.itech.rental_car_system.model.Car;
import org.sheikh.itech.rental_car_system.model.Customer;


public final class PersistImpl implements Persist {

	private  static Connection con = Factory.getConnection();
	private static Persist service = null;
	private static PreparedStatement carDetails1,carDetails2,customer1,customer2,
	cusDelete,block,blockedCus,bookCar,carStatus,changeStatus,bookedCar,bookedCarDetails = null;

	private PersistImpl() {
		
	}
    static {
    	
    	service = new PersistImpl();
    	try {
			carDetails1 = con.prepareStatement("select * from car");
			carDetails2 =con.prepareStatement("insert into car(cid,name,type,charges) values(?,?,?,?)");
			customer1 = con.prepareStatement("select * from customer where status = 1");
			customer2 = con.prepareStatement("insert into customer(cus_id,name,contact,address) values(?,?,?,?)");
			cusDelete = con.prepareStatement("delete from customer where name = ?");
			block = con.prepareStatement("update customer set status=0 where name=?");
			blockedCus = con.prepareStatement("select * from customer where status = 0");
			bookCar = con.prepareStatement("insert into rental_record(cid,customer_id,hire_scheme,hire_time) values(?,?,?,?)");
			carStatus = con.prepareStatement("select status from car where cid=?");
			changeStatus = con.prepareStatement("update car set status=1 where cid=?");
			bookedCar = con.prepareStatement("select * from rental_record");
			bookedCarDetails = con.prepareStatement("select * from car where status = 1");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	
    }
	@Override
	public List<Car> getCarDetails() {
		// TODO Auto-generated method stub
	List<Car> cars = new ArrayList<Car>();
		try {
			
			ResultSet rs = carDetails1.executeQuery();			
			
			while(rs.next()){
				Car car = new Car();
				
				car.setCarId(rs.getInt(1));
				car.setCarName(rs.getString(2));
				car.setCarType(rs.getString(3));
				car.setCarRent(rs.getInt(4));
				
				cars.add(car);
			}
			rs.close();

		} catch (Exception e) {
             return null;
		}
		return cars;
	}
	
	public static Persist getConnection(){
		return service;
	}

	@Override
	public Car saveCarDetails(Car car) {
		// TODO Auto-generated method stub
	
		try{
			carDetails2.setInt(1, car.getCarId());
			carDetails2.setString(2, car.getCarName());
			carDetails2.setString(3, car.getCarType());
			carDetails2.setInt(4, car.getCarRent());
			carDetails2.execute();
		}
		catch(Exception e){
			return null;
		}
		
		return car;
	}

	@Override
	public List<Customer> getCustomerDetails() {
		List<Customer> cutomers = new ArrayList<Customer>();
		try {
			
			ResultSet rs = customer1.executeQuery();			
			
			while(rs.next()){
				Customer cus = new Customer();
				
				cus.setId(rs.getInt(1));
				cus.setName(rs.getString(2));
				cus.setContact(rs.getLong(3));
				cus.setAddress(rs.getString(4));
				
				cutomers.add(cus);
			}
			rs.close();

		} catch (Exception e) {
			return null;
		}
		return cutomers;
	}

	@Override
	public Customer saveCustomerDetails(Customer customer) throws SQLException {
		
			customer2.setInt(1, customer.getId());
			customer2.setString(2, customer.getName());
			customer2.setLong(3, customer.getContact());	
			customer2.setString(4, customer.getAddress());
		customer2.execute();
		
		return customer;
	}

	@Override
	public String removeCustomer(String name) {
		// TODO Auto-generated method stub
		try {
			cusDelete.setString(1, name);
			cusDelete.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			return null;
		}
		
		return name;
	}

	@Override
	public String blockCustomer(String name) {
		// TODO Auto-generated method stub
		try {
			block.setString(1, name);
			block.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			return null;
		}
		return name;	
	}

	@Override
	public List<Customer> getBlockedCustomerDetails() {
		// TODO Auto-generated method stub
		List<Customer> cutomers = new ArrayList<Customer>();
		try {
			
			ResultSet rs = blockedCus.executeQuery();			
			
			while(rs.next()){
				Customer cus = new Customer();
				
				cus.setId(rs.getInt(1));
				cus.setName(rs.getString(2));
				cus.setContact(rs.getLong(3));
				cus.setAddress(rs.getString(4));
				
				cutomers.add(cus);
			}
			rs.close();

		} catch (Exception e) {
			return null;
		}
		return cutomers;
	}

	@Override
	public BokingDetails bookCar(BokingDetails bokingDetails) {
		// TODO Auto-generated method stub
		try {
			bookCar.setInt(1, bokingDetails.getCarId());
			bookCar.setInt(2, bokingDetails.getCustId());
			bookCar.setString(3, bokingDetails.getHireScheme());
			bookCar.setInt(4, bokingDetails.getHireTime());
			bookCar.execute();
			changeStatus.setInt(1, bokingDetails.getCarId());
			changeStatus.execute();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			return null;
		}
		return bokingDetails;
	}
	@Override
	public int getCarStatus(int id) {
		// TODO Auto-generated method stub
		int status = -1;
		try {
			carStatus.setInt(1, id);
			ResultSet rs = carStatus.executeQuery();
			while(rs.next()){
				status = rs.getInt(1);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			return -1;
		}
		return status;
	}

	@Override
	public List<BokingDetails> getBookedCars() {
		// TODO Auto-generated method stub
		List<BokingDetails> bookedCars = new ArrayList<BokingDetails>();
		try {
			ResultSet rs = bookedCar.executeQuery();
			while(rs.next()){
				BokingDetails details = new BokingDetails();
				details.setCarId(rs.getInt(1));
				details.setCustId(rs.getInt(2));
				details.setHireScheme(rs.getString(3));
				details.setHireTime(rs.getInt(4));
				
				bookedCars.add(details);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			return null;
		}
		return bookedCars;
	}

	@Override
	public List<Car> getBoockedCarDetails() {
		// TODO Auto-generated method stub
		List<Car> cars = new ArrayList<Car>();
		try {
			
			ResultSet rs = bookedCarDetails.executeQuery();			
			
			while(rs.next()){
				Car car = new Car();
				
				car.setCarId(rs.getInt(1));
				car.setCarName(rs.getString(2));
				car.setCarType(rs.getString(3));
				car.setCarRent(rs.getInt(4));
				
				cars.add(car);
			}
			rs.close();

		} catch (Exception e) {
             return null;
		}
		return cars;		

	}
}
