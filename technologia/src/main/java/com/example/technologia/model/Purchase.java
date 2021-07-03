package com.example.technologia.model;

import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table( name="purchases")
public class Purchase {

	
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	private Long id;
	
	
 
	
	@ManyToOne( )
	@JoinColumn(nullable = true,name="products_id") 
	private Product product;
	
	@ManyToOne( )
	@JoinColumn(nullable = true,name="clients_id") 
	private Client client;
	
	
	@Column(name ="quantity") 
	private int quantity;
	
	
	
	@Column(name ="date") 
	private LocalDateTime date;



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public Product getProduct() {
		return product;
	}



	public void setProduct(Product product) {
		this.product = product;
	}



	public Client getClient() {
		return client;
	}



	public void setClient(Client client) {
		this.client = client;
	}



	public int getQuantity() {
		return quantity;
	}



	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}



 



 

	public LocalDateTime getDate() {
		return date;
	}



	public void setDate(LocalDateTime date) {
		this.date = date;
	}



	public Purchase(Long id, Product product, Client client, int quantity, Date date) {
		super();
		this.id = id;
		this.product = product;
		this.client = client;
		this.quantity = quantity; 
	}



	public Purchase() {
		super();
	}
	
	
	
	
	
	
}
