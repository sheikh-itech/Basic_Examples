package org.sheikh.itech.rental_car_system.dal;

import java.sql.SQLException;
import java.util.List;

import org.sheikh.itech.rental_car_system.model.BokingDetails;
import org.sheikh.itech.rental_car_system.model.Car;
import org.sheikh.itech.rental_car_system.model.Customer;

public interface Persist {

	public List<Car> getCarDetails();
	public List<Car> getBoockedCarDetails();
	public Car saveCarDetails(Car car);
	public int getCarStatus(int id);
	
	public List<Customer> getCustomerDetails();
	public List<Customer> getBlockedCustomerDetails();
	public Customer saveCustomerDetails(Customer customer)throws SQLException;
	public String removeCustomer(String name);
	public  String blockCustomer(String name);
	
	public BokingDetails bookCar(BokingDetails bokingDetails);
	public List<BokingDetails> getBookedCars();
}
