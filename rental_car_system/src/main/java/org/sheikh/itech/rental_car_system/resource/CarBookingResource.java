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
import org.sheikh.itech.rental_car_system.model.BokingDetails;
import org.sheikh.itech.rental_car_system.service.BookingService;


@Path("book_cars")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CarBookingResource {

	Persist service = PersistImpl.getConnection();
	BookingService bookingService = new BookingService();
	
	@GET
	public List<BokingDetails> getBookedCars(){
		
		return service.getBookedCars();
	}
	@POST
	@Produces(MediaType.TEXT_PLAIN)
	public String bookCars(BokingDetails details){
		
		return bookingService.bookCars(details);
	}
}
