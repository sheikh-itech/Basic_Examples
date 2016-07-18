package com.sheikh.itech.resource;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import com.sheikh.itech.dal.ExamImpl;
import com.sheikh.itech.model.Details;
import com.sheikh.itech.model.StartTest;
import com.sheikh.itech.model.TestDetails;

@Path("test")
public class TestResource {

	@Context
	private HttpServletRequest request;

	@GET
	@Path("/testlist/{trainee}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.TEXT_PLAIN)
	public List<TestDetails> getTestDetails(@PathParam("trainee") String tranee) {

		ExamImpl exam = ExamImpl.getService();
		List<TestDetails> list = null;

		String username = (String) request.getSession()
				.getAttribute("username");
		if (username != null) {
			try {

				list = exam.getTestList(tranee);
			} catch (Exception e) {
				// TODO Auto-generated catch block

			}
		} else
			list = null;
		return list;
	}

	@GET
	@Path("/results")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Details> getTestResult() {

		ExamImpl exam = ExamImpl.getService();
		List<Details> list = null;

		String username = (String) request.getSession()
				.getAttribute("username");
		if (username != null) {
			try {

				list = exam.getResults();//System.out.print("username="+username);
			} catch (Exception e) {
				// TODO Auto-generated catch block

			}
		} else
			list = null;
		return list;
	}
	@GET
	@Path("/delete/{name}/{write}/{wrong}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.TEXT_PLAIN)
	public List<Details> deleteTestResult(@PathParam("name") String name, @PathParam("write") int write, @PathParam("wrong") int wrong) {

		ExamImpl exam = ExamImpl.getService();
		List<Details> list = null;

		String username = (String) request.getSession()
				.getAttribute("username");
		if (username != null) {
			try {
				exam.deleteTestResult(name, write, wrong);
				list = exam.getResults();//System.out.print("username="+username);
			} catch (Exception e) {
				// TODO Auto-generated catch block

			}
		} else
			list = null;
		return list;
	}
	@POST
	@Path("/details")
	@Produces(MediaType.TEXT_PLAIN)
	@Consumes(MediaType.APPLICATION_JSON)
	public String getDetails(StartTest test) {

		ExamImpl exam = ExamImpl.getService();
		String file = null;

		String username = (String) request.getSession()
				.getAttribute("username");
		if (username != null) {
			try {

				file = exam.startTestDetails(test);
			} catch (Exception e) {
				// TODO Auto-generated catch block

			}
		} else
			file = null;
		return file;
	}

	@POST
	@Path("/saveresult")
	@Produces(MediaType.TEXT_PLAIN)
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean saveDetails(Details details) {

		ExamImpl exam = ExamImpl.getService();
		boolean flag = false;

		String username = (String) request.getSession()
				.getAttribute("username");
		if (username != null) {
			try {
				exam.saveResult(details);
				flag = true;

			} catch (Exception e) {
				// TODO Auto-generated catch block

			}
		} else
			flag = false;
		return flag;
	}
}
