package tester;

import entity.Customer;
import entity.Address;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Tester {
    
    public static void main(String[] args) {
        
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
        
        EntityManager em = emf.createEntityManager();
        
        Customer cust = new Customer("Kurt", "Larsen");
//        Address address1 = new Address("Toftebaeksvej 15A", "Kongens Lyngby");
//        Address address2 = new Address("Bagsvaerd Hovedgade", "Bagsvaerd");
//        cust.addAddress(address1);
//        cust.addAddress(address2);
        cust.addPhone("1234", "private number");
        cust.addPhone("5678", "work number");
        cust.addPhone("3456", "fax number");
//        cust.setAddress(address1);
//        cust.setAddress(address2);
        
        
        try {
            em.getTransaction().begin();
            
            em.persist(cust);
            
            em.getTransaction().commit();
        }finally {
            em.close();
        }
        
//        em = emf.createEntityManager();
//        Customer found = em.find(Customer.class, cust.getId());
//        System.out.println("City: " + found.getAddress().getCity());
        
    }
    
}
