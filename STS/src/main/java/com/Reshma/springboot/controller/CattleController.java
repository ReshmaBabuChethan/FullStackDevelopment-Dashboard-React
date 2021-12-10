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

import com.Reshma.springboot.model.Cattle;
import com.Reshma.springboot.repository.CattleRepository;
import com.Reshma.springboot.exception.ResourceNotFoundException;
	
	

	@CrossOrigin(origins = "http://localhost:3000")

	@RestController
	@RequestMapping("/api/v1/")
	public class CattleController {

		@Autowired
		private CattleRepository cattleRepository;
		
		//get all cattles
		@GetMapping("/cattles")
		public List<Cattle> getAllCattles(){
			return cattleRepository.findAll();
		}
		
	//create cattle rest api
		@PostMapping("/cattles")
		public Cattle createCattle(@RequestBody Cattle cattle) {
			return cattleRepository.save(cattle);
		}
		
		// get cattle by id rest api
		@GetMapping("/cattles/{id}")
		public ResponseEntity<Cattle> getCattleById(@PathVariable Long id) {
			Cattle cattle=cattleRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Cattle now exist with id :"+id));
			   return ResponseEntity.ok(cattle);
			}
		
		//update cattle rest api
		@PutMapping("/cattles/{id}")
		public ResponseEntity<Cattle> updateCattle(@PathVariable Long id, @RequestBody Cattle cattleDetails){
			Cattle cattle=cattleRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Cattle not exist with id :"+id));
					
			cattle.setCattleID(cattleDetails.getCattleID());
			cattle.setGender(cattleDetails.getGender());
			cattle.setDateofBirth(cattleDetails.getDateofBirth());
			cattle.setVaccine(cattleDetails.getVaccine());
					
			Cattle updatedCattle = cattleRepository.save(cattle);
					return ResponseEntity.ok(updatedCattle);
					
		}
		
	     // delete cattle rest api
		@DeleteMapping("/cattles/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteCattle(@PathVariable Long id){
			Cattle cattle = cattleRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Cattle does not exist with the id:"+id));
					
			cattleRepository.delete(cattle);
					Map<String, Boolean> response = new HashMap<>();
					response.put("deleted", Boolean.TRUE);
					return ResponseEntity.ok(response);
		}
	
	}
