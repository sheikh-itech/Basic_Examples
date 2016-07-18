package com.sheikh.itech.resource;

import java.sql.SQLException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import com.sheikh.itech.dal.ExamImpl;
import com.sheikh.itech.model.Login;
import com.sheikh.itech.model.Test;
import com.sheikh.itech.model.User;

@Path("user")
public class UserResource {

	@Context
	private HttpServletRequest request;

	@Path("/register")
	@POST
	@Produces(MediaType.TEXT_PLAIN)
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean savePerson(User user) {

		String username = (String) request.getSession()
				.getAttribute("username");
		boolean flag = false;

		if (username != null) {

			ExamImpl exam = ExamImpl.getService();
			try {
				exam.saveUser(user);
				flag = true;
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				flag = false;
			}
		} else
			flag = false;

		return flag;
	}

	@Path("/save_test")
	@POST
	@Produces(MediaType.TEXT_PLAIN)
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean saveTest(Test test) {

		boolean flag = false;

		String username = (String) request.getSession()
				.getAttribute("username");
		if (username != null) {
			ExamImpl exam = ExamImpl.getService();
			try {
				exam.saveTest(test);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				flag = true;
			}
		} else
			flag = false;
		return flag;
	}

	@Path("/login")
	@POST
	@Produces(MediaType.TEXT_PLAIN)
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean validatePerson(Login login) {
		boolean flag = false;
		ExamImpl exam = ExamImpl.getService();
		try {
			flag = exam.validateUser(login);

			HttpSession s = request.getSession();
			s.setAttribute("username", login.getUsername());
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			// flag = false;
			System.out.println("login exception");
		}
		return flag;
	}
	@Path("/logout")
	@GET
	public void inValidatePerson() {
	
		try {
			
			HttpSession s = request.getSession();
			s.invalidate();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			// flag = false;
			System.out.println("login invalidate exception");
		}	
	}

	@Path("/userlist")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> getUsers() {

		ExamImpl exam = ExamImpl.getService();
		List<User> list = null;
		String username = (String) request.getSession()
				.getAttribute("username");
		if (username != null) {
			try {

				list = exam.getUserList();
			} catch (Exception e) {
				// TODO Auto-generated catch block

			}
		} else
			list = null;
		return list;
	}

	@Path("/testList")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Test> getTestList() {

		ExamImpl exam = ExamImpl.getService();
		List<Test> list = null;
		String username = (String) request.getSession()
				.getAttribute("username");
		if (username != null) {
			try {

				list = exam.geTestList();
			} catch (Exception e) {
				// TODO Auto-generated catch block

			}
		} else
			list = null;
		return list;
	}
	@GET
	@Path("/delete/{username}/{testname}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.TEXT_PLAIN)
	public List<Test> deleteTest(@PathParam("username") String name, @PathParam("testname") String testname) {

		ExamImpl exam = ExamImpl.getService();
		List<Test> list = null;
		String username = (String) request.getSession()
				.getAttribute("username");
		if (username != null) {
			try {
				exam.deleteTest(name, testname);
				list = exam.geTestList();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				
			}
		} else
			list = null;
		return list;
	}

}
