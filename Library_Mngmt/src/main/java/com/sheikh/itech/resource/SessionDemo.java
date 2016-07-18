
package com.sheikh.itech.resource;



import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;



@Path("demo")
public class SessionDemo {
	@Context private HttpServletRequest request;
	
	@GET
	@Path("/set")	
	public void setDetails() {
		
		HttpSession s = request.getSession();
		//s.setAttribute("username", "sheikh hafeez mansoori---- ha");
	}
	@GET
	@Path("/get")	
	@Produces(MediaType.APPLICATION_JSON)
	public String getDetails() {
		
		String username = (String)request.getSession().getAttribute("username");
		
		return username;
	}
}
