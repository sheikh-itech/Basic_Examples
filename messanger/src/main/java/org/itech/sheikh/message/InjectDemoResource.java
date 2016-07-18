package org.itech.sheikh.message;

import javax.ws.rs.Consumes;
import javax.ws.rs.CookieParam;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.MatrixParam;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;


@Path("/injectdemo")
@Consumes(MediaType.TEXT_PLAIN)
@Produces(MediaType.TEXT_PLAIN)
public class InjectDemoResource {

	@GET
	@Path("annotations")
	public String getParameters(@MatrixParam("param") String matrixParam,@HeaderParam("header")String header,@CookieParam("JSESSIONID")String cookie){
		
		return "matrix param = "+matrixParam+"| header param ="+header+" | cookie param ="+cookie;
	}
	@GET
	@Path("context")
	public String getParameterUsingContext(@Context UriInfo uriInfo,
			@Context HttpHeaders headers){
		
		
		return "Path = "+uriInfo.getAbsolutePath().toString()+" | Cookies"+headers.getCookies();
	}
}
