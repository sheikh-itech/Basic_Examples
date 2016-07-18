package org.itech.sheikh.service;

import java.util.ArrayList;
import java.util.List;

import org.itech.sheikh.model.Message;

public class MessageService {
	
	
	public List<Message> getAllMessage(){
		Message msg1 = new Message(1,"hello restfull","sheikh");
		Message msg2 = new Message(2,"hello jersey","sheikh");
		List<Message> list = new ArrayList<Message>();
		list.add(msg1);
		list.add(msg2);
		
		
		return list;		
	}
}
