
package com.Reshma.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//import javax.persistence.Column;
@Entity
@Table(name="cattles") //creates table

public class Cattle {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	   private long id;
	
	  @Column(name="cattle_ID")
       private String cattleID;
	  
	  @Column(name="gender")
       private String gender;
       
	  @Column(name="DOB")
       private String dateofBirth;
	  
	  @Column(name="vaccine")
    private String vaccine;


	//constructors
   public Cattle() {
    	   
       }
       
	public Cattle(String cattleID, String gender, String dateofBirth, String vaccine) {
		super();
		this.cattleID = cattleID;
		this.gender = gender;
		this.dateofBirth = dateofBirth;
		this.vaccine= vaccine;
	}
	//setters and getters
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCattleID() {
		return cattleID;
	}
	public void setCattleID(String cattleID) {
		this.cattleID = cattleID;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDateofBirth() {
		return dateofBirth;
	}
	public void setDateofBirth(String dateofBirth) {
		this.dateofBirth = dateofBirth;
	}
	
	public String getVaccine() {
		return vaccine;
	}
	public void setVaccine(String vaccine) {
		this.vaccine = vaccine;
	}
       
}
