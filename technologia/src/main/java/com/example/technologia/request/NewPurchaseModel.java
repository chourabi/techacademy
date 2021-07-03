package com.example.technologia.request;

import java.time.LocalDateTime;

public class NewPurchaseModel {

	private Long idClient;
	private Long idProduct;
	private int quantity;
	
	
	private LocalDateTime date;
	
	
	
	
	
	
	public LocalDateTime getDate() {
		return date;
	}
	public void setDate(LocalDateTime date) {
		this.date = date;
	}
	public Long getIdClient() {
		return idClient;
	}
	public void setIdClient(Long idClient) {
		this.idClient = idClient;
	}

	
	
	public Long getIdProduct() {
		return idProduct;
	}
	public void setIdProduct(Long idProduct) {
		this.idProduct = idProduct;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public NewPurchaseModel() {
		super();
	}
	
	
	

}
