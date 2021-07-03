package com.example.technologia.model;

import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table( name="magazins")
public class Magazin {

	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	private Long id;
	
	
	@Column(name ="title") 
	private String title;
	
	
	
	
	@OneToMany(mappedBy = "magazin", fetch = FetchType.LAZY )
	private Set<Product> products;
	
	
	@OneToOne()
	@JoinColumn(nullable = true,name="departments_id")
	private Department department;
	
	
	
	
	


	public Department getDepartment() {
		return department;
	}


	public void setDepartment(Department department) {
		this.department = department;
	}


	public Set<Product> getProducts() {
		return products;
	}


	public void setProducts(Set<Product> products) {
		this.products = products;
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


	public Magazin(Long id, String title) {
		super();
		this.id = id;
		this.title = title;
	}


	public Magazin() {
		super();
	}
	
	
	
}
