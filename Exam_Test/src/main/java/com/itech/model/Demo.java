package com.itech.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Demo {

	private String name;
	private String pass;
	
	public Demo(){
		super();
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	
}
