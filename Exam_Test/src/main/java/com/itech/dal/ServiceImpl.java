package com.itech.dal;

import java.sql.Connection;

import com.itech.dal.Service;
import com.itech.dal.Utility;
import com.itech.dal.ServiceImpl;

public final class ServiceImpl implements Service {

	private static Service service = null;

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	public static Service getServices(){
		return service;
	}
	static {

		service = new ServiceImpl();

	}
	private static Connection con = Utility.getConnection();
	private ServiceImpl() {

	}
}
