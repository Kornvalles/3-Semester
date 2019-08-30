package entity;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author mikkel
 */
public class EntityTested {
    
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
        EntityManager em = emf.createEntityManager();
        Customer c1 = new Customer("a", "aa");
        Customer c2 = new Customer("b", "bb");
        try {
            em.getTransaction().begin();
            em.persist(c1);
            em.persist(c2);
            em.getTransaction().commit();
            //Verify that customers are managed and has been given a database id
            System.out.println(c1.getId() + " " + c1.getFirstName() + " " + c1.getLastName());
            System.out.println(c2.getId() + " " + c2.getFirstName() + " " + c2.getLastName());

        } finally {
            em.close();
        }
    }
    
}
