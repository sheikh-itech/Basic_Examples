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
import com.sheikh.itech.model.User;

@Path("admin")
public class AdminResource {

	@Context
	private HttpServletRequest request;

	@GET
	@Path("/userDetails/{username}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.TEXT_PLAIN)
	public List<User> getUserDetails(@PathParam("username") String username) {

		ExamImpl exam = ExamImpl.getService();
		List<User> list = null;

		String username1 = (String) request.getSession().getAttribute(
				"username");

		if (username1 != null) {
			try {

				list = exam.getUserDetail(username);

			} catch (Exception e) {
				// TODO Auto-generated catch block

			}
		} else
			list = null;

		return list;
	}

	@GET
	@Path("/allUserDetails")
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> getAllUserDetails() {

		ExamImpl exam = ExamImpl.getService();
		List<User> list = null;

		String username1 = (String) request.getSession().getAttribute(
				"username");

		if (username1 != null) {
			try {

				list = exam.getAllUserDetail();

			} catch (Exception e) {
				// TODO Auto-generated catch block

			}
		} else
			list = null;

		return list;
	}

	@POST
	@Path("/updateUser")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> setUserDetails(User user) {

		ExamImpl exam = ExamImpl.getService();
		List<User> list = null;

		String username = (String) request.getSession()
				.getAttribute("username");

		if (username != null) {
			try {

				exam.setUserDetail(user);
				list = exam.getAllUserDetail();
			} catch (Exception e) {
				// TODO Auto-generated catch block

			}
		} else
			list = null;
		return list;
	}

	@GET
	@Path("/deleteUser/{username}")
	@Consumes(MediaType.TEXT_PLAIN)
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> deleteUserDetails(@PathParam("username") String username) {

		ExamImpl exam = ExamImpl.getService();
		List<User> list = null;
		String username1 = (String) request.getSession().getAttribute(
				"username");

		if (username1 != null) {
			try {

				exam.deleteUser(username);
				list = exam.getAllUserDetail();
			} catch (Exception e) {
				// TODO Auto-generated catch block

			}
		}
		return list;
	}

}
