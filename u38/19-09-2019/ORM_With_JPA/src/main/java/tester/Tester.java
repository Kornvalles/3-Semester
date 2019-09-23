package tester;

import entity.Customer;
import facade.Facade;

/**
 *
 * @author mikkel
 */
public class Tester {
    
    public static void main(String[] args) {
        
        Facade f = new Facade();
        
        Customer c1 = new Customer();
        c1.setName("Mikkel");
        c1.setEmail("a@b.dk");
        f.addCustomer(c1);
        
        System.out.println(f.getCustomer(1).getName() + " " + f.getCustomer(1).getEmail());
        
    }
    
}
