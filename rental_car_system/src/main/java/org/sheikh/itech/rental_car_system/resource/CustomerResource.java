package org.sheikh.itech.rental_car_system.resource;

import java.sql.SQLException;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.sheikh.itech.rental_car_system.dal.Persist;
import org.sheikh.itech.rental_car_system.dal.PersistImpl;
import org.sheikh.itech.rental_car_system.model.Customer;


@Path("customer_list")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CustomerResource {

	private Persist service = PersistImpl.getConnection();
	
	@GET
	public List<Customer> getCarDetails(){
		
		return service.getCustomerDetails();
	}
	@GET
	@Path("blocked")
	public List<Customer> getBlockedCustomer(){
		
		return service.getBlockedCustomerDetails();
	}	
	@POST
	public Customer saveCustomerDetails(Customer customer) throws SQLException{
		
		
		return service.saveCustomerDetails(customer);
	}
	@DELETE
	@Path("/{name}")
	@Produces(MediaType.TEXT_PLAIN)
	public String deleteCustomer(@PathParam("name")String name){
		
		service.removeCustomer(name);
		return "customer recors removed -- "+name;
	}
	@GET
	@Path("/{name}")
	@Produces(MediaType.TEXT_PLAIN)
	public String blockCustomer(@PathParam("name")String name){
		
		return service.blockCustomer(name)+"blocked successfully.";
	}

}
