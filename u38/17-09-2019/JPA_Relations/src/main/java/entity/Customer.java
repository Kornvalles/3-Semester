package entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapKeyColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Customer implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    
    @ElementCollection(fetch = FetchType.LAZY)
    @MapKeyColumn(name = "PHONE")
    @Column(name = "Description")
    private Map<String,String> phones = new HashMap();
    
    public void addPhone(String phoneNo, String description) {
        phones.put(phoneNo, description);
    }
    
    public String getPhoneDescription(String phoneNo) {
        return phones.get(phoneNo);
    }
    
    @ElementCollection
    private List<String> hobbies = new ArrayList();
    
    public void addHobby(String hobby) {
        hobbies.add(hobby);
    }
    
    public String getHobbies() {
        return String.join(",", hobbies);
    }

//    //relations
//    @OneToOne(cascade = CascadeType.PERSIST)
//    private Address address;
//
//    public Address getAddress() {
//        return address;
//    }
//
//    public void setAddress(Address address) {
//        this.address = address;
//    }
    
//    @OneToMany(cascade = CascadeType.PERSIST)
//    @JoinColumn
//    List<Address> addresses = new ArrayList();
//    
//    public void addAddress(Address address) {
//        addresses.add(address);
//    }
//
//    public List<Address> getAddresses() {
//        return addresses;
//    }
    
    public Customer(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Customer() {
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

}
