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

import com.Reshma.springboot.model.Rancher;
import com.Reshma.springboot.repository.RancherRepository;
import com.Reshma.springboot.exception.ResourceNotFoundException;
	
	

	@CrossOrigin(origins = "http://localhost:3000")

	@RestController
	@RequestMapping("/api/v1/")
	public class RancherController {

		@Autowired
		private RancherRepository rancherRepository;
		
		//get all ranchers
		@GetMapping("/ranchers")
		public List<Rancher> getAllRanchers(){
			return rancherRepository.findAll();
		}
		
	//create rancher rest api
		@PostMapping("/ranchers")
		public Rancher createRancher(@RequestBody Rancher rancher) {
			return rancherRepository.save(rancher);
		}
		
		// get rancher by id rest api
		@GetMapping("/ranchers/{id}")
		public ResponseEntity<Rancher> getRancherById(@PathVariable Long id) {
			Rancher rancher=rancherRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Rancher now exist with id :"+id));
			   return ResponseEntity.ok(rancher);
			}
		
		//update rancher rest api
		@PutMapping("/ranchers/{id}")
		public ResponseEntity<Rancher> updateRancher(@PathVariable Long id, @RequestBody Rancher rancherDetails){
			Rancher rancher=rancherRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Rancher not exist with id :"+id));
					
			rancher.setFirstName(rancherDetails.getFirstName());
			rancher.setLastName(rancherDetails.getLastName());
			rancher.setEmailId(rancherDetails.getEmailId());
			rancher.setContactNum(rancherDetails.getContactNum());
					
					Rancher updatedRancher = rancherRepository.save(rancher);
					return ResponseEntity.ok(updatedRancher);
					
		}
		
	     // delete rancher rest api
		@DeleteMapping("/ranchers/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteRancher(@PathVariable Long id){
			Rancher rancher = rancherRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Rancher does not exist with the id:"+id));
					
			rancherRepository.delete(rancher);
					Map<String, Boolean> response = new HashMap<>();
					response.put("deleted", Boolean.TRUE);
					return ResponseEntity.ok(response);
		}
	
	}
