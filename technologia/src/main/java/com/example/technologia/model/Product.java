package com.example.technologia.model;

import javax.persistence.*;
//import javax.validation.constraints.Size;

@Entity
@Table( name="products" )
public class Product {
	
	
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	private Long id;
	
	
	@Column(name ="title", nullable = false ) 
	private String title;
	
	@Column(name ="code", nullable = false )
	private String code;
	
	@Column(name ="quantity", nullable = false )
	private int quantity;

	
	
	public Product(Long id, String title, String code, int quantity) {
		super();
		this.id = id;
		this.title = title;
		this.code = code;
		this.quantity = quantity;
	}
	
	
	public Product() {
		super(); 
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	

}
