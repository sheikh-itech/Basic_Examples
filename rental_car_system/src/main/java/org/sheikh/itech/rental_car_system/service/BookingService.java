package org.sheikh.itech.rental_car_system.service;

import org.sheikh.itech.rental_car_system.dal.Persist;
import org.sheikh.itech.rental_car_system.dal.PersistImpl;
import org.sheikh.itech.rental_car_system.model.BokingDetails;

public class BookingService {

	private Persist service = PersistImpl.getConnection();
	
	public String bookCars(BokingDetails details){
		int status = service.getCarStatus(details.getCarId());
		String res ="";
		if(status == 0){
			service.bookCar(details);
			res = "car booked succesfully";
		}
		else if(status == 1){
			return "car already booked";
		}else if(status == -1){
			return "Car is not for use sataus";
		}
		return res;
		
	}
	
}
