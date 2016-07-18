package com.sheikh.itech.model;

import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement
public class Result {

	private String username;
	private int marks;
	public Result(){
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getMarks() {
		return marks;
	}
	public void setMarks(int marks) {
		this.marks = marks;
	}
}
