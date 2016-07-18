package org.sheikh.itech.rental_car_system.model;

import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

@XmlAccessorType
@XmlRootElement
public class BokingDetails {

	private int carId;
	private int custId;
	private String hireScheme;
	private int hireTime;
	
	
	public int getCarId() {
		return carId;
	}
	public void setCarId(int carId) {
		this.carId = carId;
	}
	public int getCustId() {
		return custId;
	}
	public void setCustId(int custId) {
		this.custId = custId;
	}
	public String getHireScheme() {
		return hireScheme;
	}
	public void setHireScheme(String hireScheme) {
		this.hireScheme = hireScheme;
	}
	public int getHireTime() {
		return hireTime;
	}
	public void setHireTime(int hireTime) {
		this.hireTime = hireTime;
	}
	
}
