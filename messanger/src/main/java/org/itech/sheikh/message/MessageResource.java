package org.itech.sheikh.message;


import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.itech.sheikh.model.Message;
import org.itech.sheikh.service.MessageService;
@Path("/message")
public class MessageResource {

	MessageService service = new MessageService();
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Message> getString(){
		
		return service.getAllMessage();
	}
}
