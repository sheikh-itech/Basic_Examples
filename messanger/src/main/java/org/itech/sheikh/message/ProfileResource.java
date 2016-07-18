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
import javax.ws.rs.core.MediaType;

import org.itech.sheikh.model.Profile;
import org.itech.sheikh.service.ProfileService;

@Path("/profile")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ProfileResource {

	
	private ProfileService service = new ProfileService();
	
	@GET
	public List<Profile> getProfile(){
		return service.getAllProfile();
	}
	@POST
	public Profile addProfile(Profile profile){
		return service.addProfile(profile);
	}
	@GET
	@Path("/{profileName}")
	public Profile getProfile(@PathParam("profileName") String profileName){
		return service.getProfile(profileName);
	}
	@PUT
	@Path("/{profileName}")
	public Profile updateProfile(@PathParam("profileName") String profileName, Profile profile){
		profile.setProfileName(profileName);
		return service.updateProfile(profile);
	}
	@DELETE
	@Path("/{profileName}")
	public void deleteProfile(@PathParam("profileName") String profileName){
		service.removeProfile(profileName);
	}
}
