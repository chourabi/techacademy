package com.example.technologia.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.technologia.model.Product;
import com.example.technologia.repository.MagazinRepository;
import com.example.technologia.repository.ProductRepository;
import com.example.technologia.request.AddNewProductRequest;
import com.example.technologia.response.ProductAddResponse;
import com.example.technologia.response.ProductModelResponse;

@RestController
@CrossOrigin( origins = "*" )
@RequestMapping("/products")

public class ProductController {
	
	
	@Autowired
	ProductRepository productRepo;
	
	
	@Autowired
	MagazinRepository mr;
	
	@GetMapping("/list")
	public List<Product> getProductsList() {
		return this.productRepo.findAll();
	}
	
	
	@GetMapping("/list/{id}")
	public ProductModelResponse getProductsList(@PathVariable(value = "id") Long id) {
		Product p = this.productRepo.findById(id).get();
		
		ProductModelResponse pr = new ProductModelResponse();
		
		pr.setTitle(p.getTitle());
		pr.setId(p.getId());
		pr.setIdmagazin(p.getMagazin().getId());
		pr.setQuantity(p.getQuantity());
		pr.setCode(p.getCode());
		pr.setPrice(p.getPrice());
		return pr;
	}
	
	
	@PostMapping("/add")
	public ProductAddResponse addNewProduc( @RequestBody() AddNewProductRequest a  ) {
		ProductAddResponse res = new ProductAddResponse();
		
		try {
			Product p = new Product();
			p.setTitle(a.getTitle());
			p.setPrice(a.getPrice());
			p.setCode(a.getRef());
			p.setQuantity(a.getQuantity()); 
			
			p.setMagazin(this.mr.findById(a.getIdmagazin()).get());
			
			 this.productRepo.save(p); // INSERT INTO products .... 
			 res.setSuccess(true);
			 res.setMessage("Product added successfully");
			
		}catch(Exception e) {
			System.out.print(e.getMessage());
			
			res.setSuccess(false);
			res.setMessage("please verify your enters");
		}
		// { success:true , id:3 }
		
		
		return  res;
	}
	
	
	
	@PostMapping("/update/{id}")
	public void updateProduct( @RequestBody() AddNewProductRequest a , @PathVariable(value = "id") Long id  ) {
		 
		
		try {
			
			Product p;
			
			Optional<Product> res = this.productRepo.findById(id);
			
			p = res.get();
				
			
			p.setTitle(a.getTitle());
			p.setPrice(a.getPrice());
			p.setCode(a.getRef());
			p.setQuantity(a.getQuantity()); 
			
			 this.productRepo.save(p); // INSERT INTO products .... 
			  
			
		}catch(Exception e) {
			System.out.print(e.getMessage()); 
		}
 
	}
	
	
	
	
	
	@DeleteMapping("/delete/{id}")
	public ProductAddResponse deleteProduct( @PathVariable(value = "id") Long id ) {
		ProductAddResponse response = new ProductAddResponse();
		try {
			Product p;
			
			Optional<Product> res = this.productRepo.findById(id);
			
			p = res.get();
			
			this.productRepo.delete(p);
			
			response.setSuccess(true);
			response.setMessage("Product deleted successfully");
			 
			 
		}catch(Exception e) {
			response.setSuccess(false);
			response.setMessage("No such product with provided id: ".concat(id.toString()));
		}
		
		
		return response;
		
		
		
	}
	
	
	

}
