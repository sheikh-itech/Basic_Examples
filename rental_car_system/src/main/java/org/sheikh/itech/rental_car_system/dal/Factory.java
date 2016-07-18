package org.sheikh.itech.rental_car_system.dal;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


public final class Factory {

	private static Connection connection = null;

	private Factory() {

	}

	static {
		try {

			Class.forName("oracle.jdbc.driver.OracleDriver");
			connection = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","sheikh","sheikh");
			//System.out.println("done");

		} catch (ClassNotFoundException e) {
			System.out.println("CNFEx:" + e);
		} catch (SQLException e) {
			System.out.println("SQLEx:" + e);
		} 
	}

	public static Connection getConnection() {

		return connection;
	}

	public static void close(PreparedStatement ps, ResultSet rs) {
        try {
            if (ps != null) {
                ps.close();
            }
            if (rs != null) {
                rs.close();
            }
        } catch (Exception e) {
        }
    }

 /*public static void main(String [] args) throws SQLException {
	 
 }*/
 
}