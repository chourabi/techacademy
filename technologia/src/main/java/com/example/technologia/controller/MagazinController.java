package com.example.technologia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.technologia.model.Magazin;
import com.example.technologia.model.Product;
import com.example.technologia.repository.MagazinRepository;

@RestController
@CrossOrigin( origins = "*" )
@RequestMapping("/magazins")
public class MagazinController {
	
	@Autowired
	MagazinRepository mr;
	
	@PostMapping("/add")
	public Magazin addNewMagazin( @RequestBody Magazin m ) {
		return this.mr.save(m);
	}
	
	
	
	@GetMapping("/list")
	public List<Magazin> getAll() {
		return this.mr.findAll();
	}

}
