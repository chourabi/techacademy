package com.example.technologia.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.technologia.repository.ClientsRepository;
import com.example.technologia.repository.ProductRepository;
import com.example.technologia.repository.PurchaseRepository;

@Service
public class PurchaseService {

	
	@Autowired
	ClientsRepository clientsRepository;
	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	PurchaseRepository purchaseRepository;

	public ClientsRepository getClientsRepository() {
		return clientsRepository;
	}

	public void setClientsRepository(ClientsRepository clientsRepository) {
		this.clientsRepository = clientsRepository;
	}

	public ProductRepository getProductRepository() {
		return productRepository;
	}

	public PurchaseRepository getPurchaseRepository() {
		return purchaseRepository;
	}

	public void setPurchaseRepository(PurchaseRepository purchaseRepository) {
		this.purchaseRepository = purchaseRepository;
	}

	public void setProductRepository(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}

 
	
	
	
}
