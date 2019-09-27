package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entity.User;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author mikkel
 */
@Path("user")
public class Userresource {

    @Context
    private UriInfo context;
    
    private static User user = new User("Anders And");
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();
    
    /**
     * Creates a new instance of User
     */
    public Userresource() {
    }

    /**
     * Retrieves representation of an instance of mikkel.Userresource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        return "{\"msg\":\"Hello World\"}";
    }
    
    @Path("all")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getUser() {
        return GSON.toJson(user);
    }

    /**
     * PUT method for updating or creating an instance of Userresource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
