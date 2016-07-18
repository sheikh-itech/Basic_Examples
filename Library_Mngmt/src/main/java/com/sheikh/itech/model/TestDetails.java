package com.sheikh.itech.model;

import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement
public class TestDetails {

	private String username;
	private String testname;
	private String testfile;
	
	public TestDetails(){
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getTestname() {
		return testname;
	}
	public void setTestname(String testname) {
		this.testname = testname;
	}
	public String getTestfile() {
		return testfile;
	}
	public void setTestfile(String testfile) {
		this.testfile = testfile;
	}
	
}
