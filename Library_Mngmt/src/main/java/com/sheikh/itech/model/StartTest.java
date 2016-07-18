package com.sheikh.itech.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class StartTest {

	private String testname;
	private String username;
	
	public StartTest(){
		
	}
	public String getTestname() {
		return testname;
	}
	public void setTestname(String testname) {
		this.testname = testname;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	
	
}
