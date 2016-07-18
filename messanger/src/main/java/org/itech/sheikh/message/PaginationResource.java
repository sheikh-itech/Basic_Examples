package org.itech.sheikh.message;

import java.util.List;

import javax.ws.rs.BeanParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.itech.sheikh.model.Message;
import org.itech.sheikh.service.MessageService1;

@Path("/pagination_message")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class PaginationResource {

	MessageService1 service = new MessageService1();
	@GET
	@Path("/method1")
	public List<Message> getString(@QueryParam("year") int year,
			@QueryParam("start") int start,
			@QueryParam("size") int size){
		
		if(year > 0){
			return service.getAllMessageForYear(year);
		}
		if(start >= 0 & size >= 0){
			return service.getAllMessagePaginated(start, size);
		}
		return service.getAllMessage();
	}
	/* This method is for class MessageFilterBean  */
	@GET
	@Path("method2")
	public List<Message> getFilterBean(@BeanParam() MessageFilterBean filterBean){
		
		if(filterBean.getYear() > 0){
			return service.getAllMessageForYear(filterBean.getYear());
		}
		if(filterBean.getStart() >= 0 & filterBean.getSize() >= 0){
			return service.getAllMessagePaginated(filterBean.getStart(),filterBean.getSize());
		}
		return service.getAllMessage();
	}
}
