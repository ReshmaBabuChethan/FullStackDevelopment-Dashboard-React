

package com.Reshma.springboot.controller;

import java.util.HashMap;
	import java.util.List;
	import java.util.Map;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.http.ResponseEntity;
	import org.springframework.web.bind.annotation.CrossOrigin;
	import org.springframework.web.bind.annotation.DeleteMapping;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.PutMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;

import com.Reshma.springboot.model.Lot;
import com.Reshma.springboot.repository.LotRepository;
import com.Reshma.springboot.exception.ResourceNotFoundException;
	
	

	@CrossOrigin(origins = "http://localhost:3000")

	@RestController
	@RequestMapping("/api/v1/")
	public class LotController {

		@Autowired
		private LotRepository lotRepository;
		
		//get all lots
		@GetMapping("/lots")
		public List<Lot> getAllLots(){
			return lotRepository.findAll();
		}
		
	//create lot rest api
		@PostMapping("/lots")
		public Lot createLot(@RequestBody Lot lot) {
			return lotRepository.save(lot);
		}
		
		// get lot by id rest api
		@GetMapping("/lots/{id}")
		public ResponseEntity<Lot> getLotById(@PathVariable Long id) {
			Lot lot=lotRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Lot now exist with id :"+id));
			   return ResponseEntity.ok(lot);
			}
		
		//update lot rest api
		@PutMapping("/lots/{id}")
		public ResponseEntity<Lot> updateLot(@PathVariable Long id, @RequestBody Lot lotDetails){
			Lot lot=lotRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Lot not exist with id :"+id));
					
			lot.setLotID(lotDetails.getLotID());
			lot.setShipDate(lotDetails.getShipDate());
			lot.setTotalCount(lotDetails.getTotalCount());
			lot.setMaleCount(lotDetails.getMaleCount());
			lot.setFemaleCount(lotDetails.getFemaleCount());
			lot.setRancherId(lotDetails.getRancherId());
			
					
			Lot updatedLot = lotRepository.save(lot);
					return ResponseEntity.ok(updatedLot);
					
		}
		
	     // delete lot rest api
		@DeleteMapping("/lots/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteLot(@PathVariable Long id){
			Lot lot = lotRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Lot does not exist with the id:"+id));
					
			lotRepository.delete(lot);
					Map<String, Boolean> response = new HashMap<>();
					response.put("deleted", Boolean.TRUE);
					return ResponseEntity.ok(response);
		}
	
	}
