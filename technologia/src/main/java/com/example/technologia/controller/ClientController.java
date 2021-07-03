package com.example.technologia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.technologia.model.Client;
import com.example.technologia.model.Magazin;
import com.example.technologia.repository.ClientsRepository;
import com.example.technologia.repository.MagazinRepository;

@RestController
@CrossOrigin( origins = "*" )
@RequestMapping("/clients")

public class ClientController {
	
	
	
	@Autowired
	ClientsRepository clientsRepository;
	
	@PostMapping("/add")
	public Client addNewMagazin( @RequestBody Client m ) {
		return this.clientsRepository.save(m);
	}
	
	
	
	@GetMapping("/list")
	public List<Client> getAll() {
		return this.clientsRepository.findAll();
	}


}
