package org.sheikh.itech.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.sheikh.itech.model.PersonalInfo;

@Path("/demo")
public class Demo {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public PersonalInfo getInfo(){
		
		PersonalInfo info = new PersonalInfo();
		
		info.setName("sheikh");
		info.setContact(9753809107l);
		
		return info;
	}
}
