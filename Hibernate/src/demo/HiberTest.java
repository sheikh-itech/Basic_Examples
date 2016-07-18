package demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HiberTest {

	public static void main(String [] args){
		UserDetails details = new UserDetails();
		details.setUserId(1);
		details.setName("sheikh");
		
		SessionFactory factory = new Configuration().configure().buildSessionFactory();
		Session session = factory.openSession();
		session.beginTransaction();
		session.save(details);
		session.getTransaction().commit();
	}
}
