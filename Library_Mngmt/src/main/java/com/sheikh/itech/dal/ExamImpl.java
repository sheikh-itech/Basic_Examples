package com.sheikh.itech.dal;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.sheikh.itech.model.Details;
import com.sheikh.itech.model.Login;
import com.sheikh.itech.model.StartTest;
import com.sheikh.itech.model.Test;
import com.sheikh.itech.model.TestDetails;
import com.sheikh.itech.model.User;

public final class ExamImpl {

	private static ExamImpl examImpl = null;
	private static Connection con = Utility.getConnection();
	
	public void deleteTestResult(String name, int write, int wrong)throws SQLException{
		PreparedStatement ps = con.prepareStatement("delete from result where name = ? and write = ? and wrong = ?");
		
		ps.setString(1, name);;
		ps.setInt(2, write);;
		ps.setInt(3, wrong);

		ps.execute();
		ps.close();
	}
	public void deleteTest(String username, String testname)throws SQLException{
		PreparedStatement ps = con.prepareStatement("delete from test where username = ? and testname = ?");
		
		ps.setString(1, username);;
		ps.setString(2, testname);;
		
		ps.execute();
		ps.close();
	}
	public void deleteUser(String username)throws SQLException{
		
		PreparedStatement ps = con.prepareStatement("delete from register where username = ?");
		ps.setString(1, username);
		
		ps.execute();
		ps.close();
	}
	public void setUserDetail(User user) throws SQLException{
		
		PreparedStatement ps = con.prepareStatement("update register set name=?,type=?,pass=?,contact=? where username = ?");
		ps.setString(1, user.getName());
		ps.setString(2, user.getType());
		ps.setString(3, user.getPass());
		ps.setInt(4, user.getContact());
		ps.setString(5, user.getUsername());
		
		ps.execute();
		
		ps.close();
	}
	public List<User> getUserDetail(String username) throws SQLException{
		
		PreparedStatement ps = con.prepareStatement("select * from register where username = ?");
		ps.setString(1, username);
		
		ResultSet rs = ps.executeQuery();
		List<User> list = new ArrayList<User>();
		
		while(rs.next()){
			
			User user = new User();
			
			user.setName(rs.getString(1));
			user.setUsername(rs.getString(2));
			user.setType(rs.getString(3));
			user.setPass(rs.getString(4));
			user.setContact(rs.getInt(5));
			
			list.add(user);
		}
		ps.close();
		rs.close();
		return list;
	}
	public List<User> getAllUserDetail() throws SQLException{
		
		PreparedStatement ps = con.prepareStatement("select * from register");
		
		ResultSet rs = ps.executeQuery();
		List<User> list = new ArrayList<User>();
		
		while(rs.next()){
			
			User user = new User();
			
			user.setName(rs.getString(1));
			user.setUsername(rs.getString(2));
			user.setType(rs.getString(3));
			user.setPass(rs.getString(4));
			user.setContact(rs.getInt(5));
			
			list.add(user);
		}
		ps.close();
		rs.close();
		return list;
	}
	public List<Details> getResults() throws SQLException{
		PreparedStatement ps = con.prepareStatement("select * from result");
		
		ResultSet rs = ps.executeQuery();
		List<Details> list = new ArrayList<Details>();
		
		while(rs.next()){
			Details d = new Details();
			
			d.setName(rs.getString(1));
			d.setWrite(rs.getInt(2));
			d.setWrong(rs.getInt(3));
			
			list.add(d);
		}
		rs.close();
		ps.close();
		return list;
	}
	public void saveResult(Details d)throws SQLException{
		
		PreparedStatement ps = con.prepareStatement("insert into result values(?,?,?)");
		
		ps.setString(1, d.getName());
		ps.setInt(2, d.getWrite());
		ps.setInt(3, d.getWrong());
		
		ps.execute();
		ps.close();
	}
	public String startTestDetails(StartTest test)throws SQLException{
		
		Statement stmt = con.createStatement();
		ResultSet rs = stmt.executeQuery("select testfile from test where username = '"+test.getUsername()+"' and testname='"+test.getTestname()+"'");
		String textfile = null;
		while(rs.next()){
			textfile = rs.getString(1);
		}
		return textfile;
	}
	public List<TestDetails> getTestList(String tranee)throws SQLException{
		PreparedStatement ps = con.prepareStatement("select * from test where username = ?");
		
		ps.setString(1, tranee);
		ResultSet rs = ps.executeQuery();
		List<TestDetails> list = new ArrayList<TestDetails>();
		while(rs.next()){
			TestDetails td = new TestDetails();
			
			td.setUsername(rs.getString(1));
			td.setTestname(rs.getString(2));
			td.setTestfile(rs.getString(3));
			
			list.add(td);
			
		}
		ps.close();
		rs.close();
		return list;
	}
	public boolean validateUser(Login login)throws SQLException{
		//PreparedStatement ps = con.prepareStatement("select * from register where username='?' and pass ='?'");
		Statement stmt = con.createStatement();
		//ps.setString(1, login.getUsername());
		//ps.setString(2, login.getPassword());
		
		ResultSet rs = stmt.executeQuery("select * from register where username='"+login.getUsername()+"' and pass ='"+login.getPassword()+"' and type='"+login.getType()+"'");		
		boolean flag = false;
		while(rs.next())
		{			
				flag = true;
			
		}
		rs.close();
		
		return flag;
	}
	public void saveUser(User user) throws SQLException{
		PreparedStatement ps = con.prepareStatement("insert into register values(?,?,?,?,?)");
		
		ps.setString(1, user.getName());
		ps.setString(2, user.getUsername());
		ps.setString(3, user.getType());
		ps.setString(4, user.getPass());
		ps.setInt(5, user.getContact());
		
		ps.execute();
		ps.close();		
	}
	public List<User> getUserList() throws SQLException{
		
		PreparedStatement ps = con.prepareStatement("select * from register where type = 'Trainee'");
		
		ResultSet rs = ps.executeQuery();
		List<User> list = new ArrayList<User>();
		
		while(rs.next()){
			
			User user = new User();
			
			user.setName(rs.getString(1));
			user.setUsername(rs.getString(2));
			user.setType(rs.getString(3));
			user.setPass(rs.getString(4));
			user.setContact(rs.getInt(5));
			
			list.add(user);
		}
		ps.close();
		rs.close();
		return list;
	}
	public List<Test> geTestList() throws SQLException{
		
		PreparedStatement ps = con.prepareStatement("select * from test");
		
		ResultSet rs = ps.executeQuery();
		List<Test> list = new ArrayList<Test>();
		
		while(rs.next()){
			
			Test test = new Test();
			
			test.setUsername(rs.getString(1));
			test.setTestname(rs.getString(2));
			test.setFilename(rs.getString(3));
			
			list.add(test);
		}
		ps.close();
		rs.close();
		return list;
	}
	public void saveTest(Test test)throws SQLException{
		PreparedStatement ps = con.prepareStatement("insert into test values(?,?,?)");
		
		ps.setString(1, test.getUsername());
		ps.setString(2, test.getTestname());
		ps.setString(3, test.getFilename());
		
		ps.execute();
		ps.close();
	}
	
	
	
	
	
	public static ExamImpl getService(){
		return examImpl;
	}
	static{
		examImpl = new ExamImpl();
	}
	private ExamImpl() {

	}
}
