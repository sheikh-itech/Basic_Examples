package org.sheikh.itech.rental_car_system.resource;


import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.sheikh.itech.rental_car_system.dal.Persist;
import org.sheikh.itech.rental_car_system.dal.PersistImpl;
import org.sheikh.itech.rental_car_system.model.Car;




@Path("car_details")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CarResource {
	
	Persist service = PersistImpl.getConnection();
	
	@GET
	public List<Car> getCars(){
		
		return service.getCarDetails();
	}
	@GET
	@Path("booked")
	public List<Car> getBookedCars(){
		
		return service.getBoockedCarDetails();
	}
	@POST
	public Car saveCarDetails(Car car){		
		
		return service.saveCarDetails(car);
	}
}
