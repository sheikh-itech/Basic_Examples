package com.sheikh.itech.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Test {


	private String username;
	private String testname;
	private String filename;
	
	public Test(){		
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

	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}
}
