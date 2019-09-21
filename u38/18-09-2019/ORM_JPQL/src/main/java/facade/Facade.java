package facade;

import entity.Semester;
import entity.Student;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;

/**
 *
 * @author mikkel
 */
public class Facade {

    private static Facade instance;
    private static EntityManagerFactory emf;

    //Private Constructor to ensure Singleton
    private Facade() {
    }

    /**
     *
     * @param _emf
     * @return an instance of this facade class.
     */
    public static Facade getFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new Facade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public List<Student> getAllStudents() {
        EntityManager em = getEntityManager();
        try {
            TypedQuery<Student> query = em.createNamedQuery("Student.findAll", Student.class);
            return query.getResultList();
        } finally {
            em.close();
        }
    }

    public List<Student> getAllStudentByFirstName(String name) {
        EntityManager em = getEntityManager();
        name = "Anders"; //Find all Students in the System with the first name Anders
        try {
            TypedQuery<Student> query = em.createNamedQuery("Student.findByFirstname", Student.class)
                    .setParameter("firstname", name);
            return query.getResultList();
        } finally {
            em.close();
        }
    }

    public void addStudent(Student newStudent) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(newStudent);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }
    
    public void assignSemesterToStudent(Long studentID, Long semsterID) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            Student stud = em.find(Student.class, studentID);
            Semester sem = em.find(Semester.class, semsterID);
            em.getTransaction().commit();
            
            stud.setSemester(sem);
            
            em.getTransaction().begin();
            em.persist(stud);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }
    
    public List<Student> getAllStudentByLastName(String lastName) {
        String stringQuery = "SELECT s FROM Student s WHERE s.lastname = '" + lastName + "'";
        TypedQuery<Student> res = getEntityManager().createQuery(stringQuery, Student.class);
        return res.getResultList();
    }
    
    public int getTotalAmountofStudents() {
        String stringQuery = "SELECT s FROM Student s";
        TypedQuery<Student> res = getEntityManager().createQuery(stringQuery, Student.class);
        List<Student> list = res.getResultList();
        return list.size();
    }
    
    public int getTotalAmountofStudentBySemester(String semesterName) {
        String stringQuery = "SELECT s FROM Student s JOIN Semester p WHERE p.name = '" + semesterName + "' AND s.CURRENTSEMESTER_ID = p.ID";
        TypedQuery<Student> res = getEntityManager().createQuery(stringQuery, Student.class);
        List<Student> list = res.getResultList();
        return list.size();
    }

}
