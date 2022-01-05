
package com.Reshma.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//import javax.persistence.Column;
@Entity
@Table(name="lots") //creates table

public class Lot {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	   private long id;
	
	  @Column(name="lot_ID")
       private String lotID;
	  
	  @Column(name="shipDate")
       private String shipDate;
       
	  @Column(name="totalCount")
       private String totalCount;
	  
	  @Column(name="maleCount")
    private String maleCount;
	  
	  @Column(name="femaleCount")
	    private String femaleCount;

	  @Column(name="rid")
	    private int rancherId;

	//constructors
   public Lot() {
    	   
       }
       
	public Lot(String lotID, String shipDate, String totalCount, String maleCount, String femaleCount, int rancherId) {
		super();
		this.lotID = lotID;
		this.shipDate = shipDate;
		this.totalCount = totalCount;
		this.maleCount= maleCount;
		this.femaleCount= femaleCount;
		this.rancherId=rancherId;
	}
	//setters and getters
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getLotID() {
		return lotID;
	}
	public void setLotID(String lotID) {
		this.lotID = lotID;
	}
	public String getShipDate() {
		return shipDate;
	}
	public void setShipDate(String shipDate) {
		this.shipDate = shipDate;
	}
	public String getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(String totalCount) {
		this.totalCount = totalCount;
	}
	
	public String getMaleCount() {
		return maleCount;
	}
	public void setMaleCount(String maleCount) {
		this.maleCount = maleCount;
	}
       
	public String getFemaleCount() {
		return femaleCount;
	}
	public void setFemaleCount(String femaleCount) {
		this.femaleCount = femaleCount;
	}
	
	public int getRancherId() {
		return rancherId;
	}
	public void setRancherId(int rancherId) {
		this.rancherId = rancherId;
	}
      
       
}
