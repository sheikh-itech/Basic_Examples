package com.sheikh.itech.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Details {

	private String name;
	private int write;
	private int wrong;
	
	public Details(){}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getWrite() {
		return write;
	}

	public void setWrite(int write) {
		this.write = write;
	}

	public int getWrong() {
		return wrong;
	}

	public void setWrong(int wrong) {
		this.wrong = wrong;
	}
}
	
