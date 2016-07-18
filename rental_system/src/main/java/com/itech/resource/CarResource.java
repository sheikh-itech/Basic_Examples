package com.itech.resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import com.itech.model.Car;


@Path("car_details")
//@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.TEXT_PLAIN)
public class CarResource {
	
	Persist service = PersistImpl.getConnection();
	@GET
	public String getString(){
		
		return "sheikh";
	}
}
