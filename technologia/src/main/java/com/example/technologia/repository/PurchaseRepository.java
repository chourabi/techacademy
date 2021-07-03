package com.example.technologia.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.technologia.model.Purchase;

public interface PurchaseRepository extends JpaRepository<Purchase,Long> {

}
