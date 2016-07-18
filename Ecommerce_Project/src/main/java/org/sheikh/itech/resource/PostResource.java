package org.sheikh.itech.resource;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.sheikh.itech.model.PersonalInfo;

@Path("postresource")
public class PostResource {

	PersonalInfo info;
	
	@POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public PersonalInfo getPersonalInfo(PersonalInfo info) {
        
    	
    	PersonalInfo info1 = new PersonalInfo();
    	
    	info1.setContact(info.getContact()+2l);
    	info1.setName(info.getName()+"7");
    	this.info = info1;
    	
    	return info1;
    }
}
