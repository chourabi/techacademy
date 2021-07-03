package com.example.technologia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.technologia.model.Department;
import com.example.technologia.model.Magazin;
import com.example.technologia.repository.DepartmentRepository;
import com.example.technologia.repository.MagazinRepository;
import com.example.technologia.service.DepartmentService;

@RestController
@CrossOrigin( origins = "*" )
@RequestMapping("/departments")
public class DepartmentController {
	
	
	
	
	
	
	@Autowired
	DepartmentService ds;
	
	@PostMapping("/add")
	public Department addNewMagazin( @RequestBody Department m ) {
		return this.ds.getDepartmentRepository() .save(m);
	}
	
	
	
	@GetMapping("/list")
	public List<Department> getAll() {
		
		return this.ds.getDepartmentRepository() .findAll();
	}


}
