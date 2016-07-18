package org.itech.sheikh.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Map;
import org.itech.sheikh.database.DatabaseClass;
import org.itech.sheikh.exception.DataNotFoundException;
import org.itech.sheikh.model.Message;

public class MessageService1 {
	
	private Map<Long, Message> messages = DatabaseClass.getMessages();
	
	public MessageService1(){
		messages.put(1l, new Message(1,"hello stub web service 1","sheikh"));
		messages.put(2l, new Message(2,"hello stub web service 2","sheikh"));
	}
	
	// start Concept for pagination and filtering
	
	public List<Message> getAllMessageForYear(int year){
		List<Message> messagesForYear = new ArrayList<>();
		Calendar cal = Calendar.getInstance();
		for(Message message : messages.values()){
			cal.setTime(message.getCreated());
			if(cal.get(Calendar.YEAR) == year)
				messagesForYear.add(message);
		}
		return messagesForYear;
	}
	
	
	public List<Message> getAllMessagePaginated(int start,int size){
	
		ArrayList<Message> list = new ArrayList<Message>(messages.values());
		if(start+size >list.size()) return new ArrayList<Message>();
		return list.subList(start, start+size);
	}
		
	// End Concept for pagination and filtering
	
	public List<Message> getAllMessage(){
	
		return new ArrayList<Message>(messages.values());
	}
	public Message getMessage(long id){
		Message message = messages.get(id);
		
		if(message == null)
		{
			throw new DataNotFoundException("messagewith id "+id+" not found.");
		}
		return message;
	}
	public Message addMessage(Message message){
		message.setId(messages.size()+1);
		messages.put(message.getId(), message);
		
		return message;
	}
	public Message updateMessage(Message message){
		if(message.getId() <= 0){
			return null;
		}
		messages.put(message.getId(), message);
		
		return message;
	}
	public Message removeMessage(long id){
		return messages.remove(id);
	}
}
