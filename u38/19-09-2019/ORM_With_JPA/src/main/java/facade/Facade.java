package facade;

import entity.Customer;
import entity.ItemType;
import entity.Order;
import entity.OrderLine;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;

/**
 *
 * @author mikkel
 */
public class Facade {

    private static EntityManagerFactory emf;

    public Customer addCustomer(Customer newCustomer) {
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(newCustomer);
            em.getTransaction().commit();
            return newCustomer;
        } finally {
            em.close();
        }
    }

    public Customer getCustomer(int id) {
        EntityManager em = emf.createEntityManager();
        try {
            Customer cust = em.find(Customer.class, id);
            return cust;
        } finally {
            em.close();
        }
    }

    public List<Customer> getAllCustomers() {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<Customer> query = em.createQuery("SELECT c FROM Customer c", Customer.class);
            return query.getResultList();
        } finally {
            em.close();
        }
    }

    public ItemType addItemType(ItemType newItemType) {
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(newItemType);
            em.getTransaction().commit();
            return newItemType;
        } finally {
            em.close();
        }
    }

    public ItemType getItemType(int id) {
        EntityManager em = emf.createEntityManager();
        try {
            ItemType item = em.find(ItemType.class, id);
            return item;
        } finally {
            em.close();
        }
    }

    public Order addOrder(Order order, Customer cust) {
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            order.setCustomer(cust);
            em.persist(order);
            em.getTransaction().commit();
            return order;
        } finally {
            em.close();
        }
    }

    public OrderLine addOrderLine(OrderLine oline, ItemType item, Order order) {
        EntityManager em = emf.createEntityManager();
        oline.setItemType(item);
        List<OrderLine> orderLines = new ArrayList();
        orderLines.add(oline);
        order.setOrderLine(orderLines);
        try {
            em.getTransaction().begin();
            em.persist(oline);
            em.getTransaction().commit();
            return oline;
        } finally {
            em.close();
        }
    }
    
    public List<Order> getAllOrders(Customer cust) {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<Order> query = em.createNamedQuery("SELECT o FROM Order o WHERE Order.Customer = " + cust.getName(), Order.class);
            return query.getResultList();
        } finally {
            em.close();
        }
    }

}
