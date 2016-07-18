package org.itech.sheikh.message;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

import org.itech.sheikh.model.Message;
import org.itech.sheikh.service.MessageService1;

@Path("/stub_message")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class MessageResource1 {

	MessageService1 service = new MessageService1();
	
	@GET
	public List<Message> getString(){
		
		return service.getAllMessage();
	}
	@POST	
	public Message addMessage(Message message){
		return service.addMessage(message);
	}
	@PUT
	@Path("/{messageId}")
	public Message updateMessage(@PathParam("messageId")long  id, Message message){
		message.setId(id);
		
		return service.updateMessage(message);
	}
	@DELETE
	@Path("/{messageId}")
	public void deleteMessage(@PathParam("messageId")long  id){
		service.removeMessage(id);
	}
	@GET
	@Path("/{messageId}")
	public Message getMessage(@PathParam("messageId")long messageId, @Context UriInfo uriInfo){
		
		Message message = service.getMessage(messageId);
			
		message.addLink(getUrl(uriInfo, message), "self");
		message.addLink(getProfile(uriInfo, message), "profile");
		message.addLink(getComment(uriInfo, message), "comments");
		
		return message;
	}
	private String getComment(UriInfo uriInfo, Message message) {
		
		return  uriInfo.getBaseUriBuilder()
				.path(MessageResource1.class)
				.path(MessageResource1.class,"getCommentResource")
				.path(CommentResource.class)				
				.resolveTemplate("messageId", message.getId())
				.build()
				.toString();
	}
	private String getProfile(UriInfo uriInfo, Message message) {
		// TODO Auto-generated method stub
		return  uriInfo.getBaseUriBuilder()
				.path(ProfileResource.class)
				//.path(Long.toString(message.getId()))
				.build()
				.toString();
	}
	private String getUrl(UriInfo uriInfo, Message message) {
		return  uriInfo.getBaseUriBuilder()
				.path(MessageResource1.class)
				.path(Long.toString(message.getId()))
				.build()
				.toString();
	}
	
	@Path("/{messageId}/comments")
	public CommentResource getCommentResource(){
		
		return new CommentResource();
	}
}
