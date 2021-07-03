package com.example.technologia.controller;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.technologia.model.Product;
import com.example.technologia.model.Purchase;
import com.example.technologia.request.AddNewProductRequest;
import com.example.technologia.request.NewPurchaseModel;
import com.example.technologia.response.ProductAddResponse;
import com.example.technologia.service.PurchaseService;

@RestController
@CrossOrigin( origins = "*" )
@RequestMapping("/purchases")
public class PurchaseController {

	
	@Autowired
	PurchaseService ps;
	
	
	@GetMapping("/list")
	
	public List<Purchase> getAll(){
		return this.ps.getPurchaseRepository().findAll();
	}
	
	
	@PostMapping("/add")
	public Purchase addNewTransaction( @RequestBody() NewPurchaseModel npm  ) {
		
		
		Purchase p = new Purchase();
		
		Product oldP = ps.getProductRepository().findById(npm.getIdProduct()).get();
		
		oldP.setQuantity(  ( oldP.getQuantity() - npm.getQuantity() )  );
		
		ps.getProductRepository().save(oldP);
		
		p.setClient(ps.getClientsRepository().findById(npm.getIdClient()).get());
		p.setProduct(ps.getProductRepository().findById(npm.getIdProduct()).get());
		p.setQuantity(npm.getQuantity());
		
		 
		
		// current systdate
		
		/*LocalDateTime date = LocalDateTime.now();*/
		
		
		p.setDate(npm.getDate() );
		
		return ps.getPurchaseRepository().save(p);
		
		
		
		
		
	}
	
}
