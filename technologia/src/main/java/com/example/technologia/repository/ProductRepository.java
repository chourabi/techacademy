package com.example.technologia.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.technologia.model.Product;


public interface ProductRepository extends JpaRepository<Product,Long> {
	
}
