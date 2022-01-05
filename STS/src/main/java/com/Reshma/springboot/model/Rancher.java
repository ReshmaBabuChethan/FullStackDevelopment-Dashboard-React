package com.Reshma.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//import javax.persistence.Column;
@Entity
@Table(name="ranchers") //creates table

public class Rancher {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	   private long id;
	
	  @Column(name="first_name")
       private String firstName;
	  
	  @Column(name="last_name")
       private String lastName;
       
	  @Column(name="email_Id")
       private String emailId;
	  
	  @Column(name="contact_num")
    private String contactNum;
	  
	  @Column(name="rid")
	    private int rancherId;


	//constructors
   public Rancher() {
    	   
       }
       
	public Rancher(String firstName, String lastName, String emailId, String contactNum, int rancherId) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.contactNum= contactNum;
		this.rancherId=rancherId;
	}
	//setters and getters
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getContactNum() {
		return contactNum;
	}
	public void setContactNum(String contactNum) {
		this.contactNum = contactNum;
	}
	public int getRancherId() {
		return rancherId;
	}
	public void setRancherId(int rancherId) {
		this.rancherId = rancherId;
	}
       
}
