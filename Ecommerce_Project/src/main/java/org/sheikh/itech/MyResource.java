package org.sheikh.itech;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.sheikh.itech.model.PersonalInfo;

/**
 * Root resource (exposed at "myresource" path)
 */
@Path("myresource")
public class MyResource {

	PersonalInfo info;
    /**
     * Method handling HTTP GET requests. The returned object will be sent
     * to the client as "text/plain" media type.
     *
     * @return String that will be returned as a text/plain response.
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public PersonalInfo getIt() {
        
    	 info = new PersonalInfo();
    	
    	info.setContact(9753809107l);
    	info.setName("sheikh");
    	
    	return info;
    }
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public PersonalInfo getPersonalInfo(PersonalInfo info) {
        
    	
    	PersonalInfo info1 = new PersonalInfo();
    	
    	info1.setContact(info.getContact()+1l);
    	info1.setName(info.getName()+"1");
    	this.info = info1;
    	
    	return info1;
    }
}
