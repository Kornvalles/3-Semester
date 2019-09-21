package test;

import entity.Student;
import facade.Facade;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author mikkel
 */
public class Tester {
    
    public static void main(String[] args) {
        
        Student stud = new Student();
        stud.setFirstname("Mikkel");
        stud.setLastname("Kornval");
        //Facade.getFacade(Persistence.createEntityManagerFactory("pu")).addStudent(stud);
        //Facade.getFacade(Persistence.createEntityManagerFactory("pu")).assignSemesterToStudent(new Long(8), new Long(3));
        //System.out.println(Facade.getFacade(Persistence.createEntityManagerFactory("pu")).getAllStudentByLastName("And"));
        //System.out.println(Facade.getFacade(Persistence.createEntityManagerFactory("pu")).getTotalAmountofStudents());
        System.out.println(Facade.getFacade(Persistence.createEntityManagerFactory("pu")).getTotalAmountofStudentBySemester("CLdat-b14e"));
        //System.out.println(facade.getAllStudentByFirstName(""));
    }
    
}
