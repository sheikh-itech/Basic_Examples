package org.itech.sheikh.message;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriInfo;

import org.itech.sheikh.model.Message;
import org.itech.sheikh.service.MessageService1;

@Path("/status_message")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class StatusCodeHeaderResource {

	MessageService1 service = new MessageService1();
	
	@GET
	public List<Message> getString(){
		
		return service.getAllMessage();
	}
	
	@POST	
	public Response addMessage(Message message,@Context UriInfo uriInfo){
		
		Message msg = service.addMessage(message);
		
		//return Response.status(Status.CREATED).entity(msg).build();   --> to get status code
		
		/*return Response.created(new URI("/messanger/webapi/status_message/"+msg.getId()))
				.entity(msg).build(); // --> to get header of code/page*/
	  
	/* String id = String.valueOf(msg.getId());
	   URI uri = uriInfo.getAbsolutePathBuilder().path(id).build();	
	   return Response.created(uri).entity(msg).build();
	*/   
     //   ----OR  below code ----
	return Response.created(uriInfo.getAbsolutePathBuilder().path(String.valueOf(msg.getId())).build()).entity(msg).build();
	}
}
