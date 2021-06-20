package com.example.technologia.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin( origins = "*" )
@RequestMapping("/products")

public class ProductController {
	
	
	@GetMapping("/test")
	public String test() {
		return "hello world";
	}
	

}