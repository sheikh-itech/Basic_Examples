package com.itech;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.itech.model.Register;



@Path("register")
public class RegisterResource {

	@POST
	@Produces(MediaType.TEXT_PLAIN)
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean saveUser(Register register){
		boolean flag = false;
		//System.out.println(register.getRname());
		System.out.println(register.getUsername());
		System.out.println(register.getType());
		System.out.println(register.getPass());
		System.out.print(register.getContact());
		
		return flag;
	}
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String get(){
		return "hi sheikh";
	}
	
}
