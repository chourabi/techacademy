package com.example.technologia.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import javax.validation.constraints.Size;

@Entity
@Table( name="products",   uniqueConstraints = {
		@UniqueConstraint( columnNames = { "title" } )
} )


@JsonIgnoreProperties({"hibernateLazyInitializer","handler","magazin"})
public class Product {
	
	
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	private Long id;
	
	
	@Column(name ="title") 
	private String title;
	
	@Column(name ="code", nullable = false )
	private String code;
	
	@Column(name ="quantity", nullable = false )
	private int quantity;
	
	@Column(name ="price", nullable = false )
	private float price;
	
	
	@ManyToOne( )
	@JoinColumn(nullable = true,name="magazins_id")
	
	
	private Magazin magazin;
	

	
	
	public Magazin getMagazin() {
		return magazin;
	}


	public void setMagazin(Magazin magazin) {
		this.magazin = magazin;
	}


	public float getPrice() {
		return price;
	}


	public void setPrice(float price) {
		this.price = price;
	}


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
