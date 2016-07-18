package org.itech.sheikh.exception;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

import org.itech.sheikh.model.ErrorMessage;
//Enable @Provider annotion if no web application excptions are used?
//@Provider
public class GenericExceptionMapper implements ExceptionMapper<Throwable>{

	@Override
	public Response toResponse(Throwable th) {
		// TODO Auto-generated method stub
		ErrorMessage errorMessage = new ErrorMessage(th.getMessage(),500,"http://javabrains.org---Generic Exception Mapper");
		return Response.status(Status.INTERNAL_SERVER_ERROR).entity(errorMessage).build();
	}

}
