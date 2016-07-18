package org.itech.sheikh.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.itech.sheikh.database.DatabaseClass;
import org.itech.sheikh.model.Comment;
import org.itech.sheikh.model.ErrorMessage;
import org.itech.sheikh.model.Message;

public class CommentService {

	private Map<Long, Message> messages = DatabaseClass.getMessages();
	
	public List<Comment> getAllComments(long messageId){
		Map<Long, Comment> comments = messages.get(messageId).getComments();
		
		return new ArrayList<Comment>(comments.values());				
	}
	public Comment getComment(long messageId, long commentId){
		ErrorMessage errorMessage = new ErrorMessage("Web appication exception",500,"http://javabrains.org---Generic Exception Mapper");
		Response response = Response.status(Status.INTERNAL_SERVER_ERROR).entity(errorMessage).build();
		Message message = messages.get(messageId);
		if(message == null){
			throw new WebApplicationException(response);
		}
		Map<Long, Comment> comments = messages.get(messageId).getComments();
		Comment comment = comments.get(commentId);
		if(comment == null){
			throw new WebApplicationException(response);
		}
		return comment;
	}
	public Comment addComment(long messageId, Comment comment){
		Map<Long, Comment> comments = messages.get(messageId).getComments();
		comment.setId(comments.size()+1);
		comments.put(comment.getId(), comment);
		return comment;
	}
	public Comment updateComment(long messageId, Comment comment){
		Map<Long, Comment> comments = messages.get(messageId).getComments();
		if(comment.getId() <= 0){
			return null;
		}
		comments.put(comment.getId(), comment);
		return comment;
	}
	public Comment removeComment(long messageId, long commentId){
		Map<Long, Comment> comments = messages.get(messageId).getComments();
		return comments.remove(commentId);
	}
}
