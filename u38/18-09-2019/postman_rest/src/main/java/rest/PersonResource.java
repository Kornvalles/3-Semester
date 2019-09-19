package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import exception.PersonNotFoundException;
import java.util.HashMap;
import java.util.Map;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

class Person {
    private String name;
    private String email;
    private int id;
    public Person(String name, String email, int id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    public void setId(int id) {
        this.id = id;
    }
    
    public int getId() {
        return this.id;
    }
}


/**
 * REST Web Service
 *
 * @author mikkel
 */
@Path("person")
public class PersonResource {

    private static Map<Integer,Person> persons = new HashMap();
    private static Gson gson = new GsonBuilder().setPrettyPrinting().create();
    private static int nextId = 3;
    
    public PersonResource(){
        if(persons.isEmpty()){
            persons.put(1, new Person("Kurt Wonnegut","a@b.dk", 1));
            persons.put(2, new Person("Hanne Wonnegut","h@b.dk", 2));
        }
    }

    /**
     * Retrieves representation of an instance of rest.PersonResource
     * @param id
     * @return an instance of java.lang.String
     * @throws exception.PersonNotFoundException
     */
    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson(@PathParam("id") int id) throws PersonNotFoundException {
        Person p = persons.get(id);
        if(p == null) {
            throw new PersonNotFoundException("Not found");
        }
        return gson.toJson(p);
    }
    
    @GET
    @Path("all")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAll() {
        //TODO return proper representation object
        return gson.toJson(persons.values());
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String addPerson(String personAsJson) {
        Person personNew = gson.fromJson(personAsJson, Person.class);
        persons.put(nextId, personNew);
        personNew.setId(nextId);
        nextId++;
        return gson.toJson(personNew);
    }
    
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{id}")
    public String editPerson(String personAsJson, @PathParam("id") int id) {
        Person personOrg = persons.get(id);
        Person personNew = gson.fromJson(personAsJson, Person.class);
        personOrg.setName(personNew.getName());
        personOrg.setEmail(personNew.getEmail());
        return gson.toJson(personOrg);
    }
    
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{id}")
    public String delete(@PathParam("id") int id) {
        persons.remove(id);
        
        return "{\"status\":\"OK\"}";
    }
    
}
