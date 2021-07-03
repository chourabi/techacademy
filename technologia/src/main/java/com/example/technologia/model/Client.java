package com.example.technologia.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;




@Entity
@Table( name="clients")
public class Client {

	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	private Long id;
	
	
	@Column(name ="fullname") 
	private String fullname;
	
	
	@Column(name ="code_client") 
	private String codeClient;


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getFullname() {
		return fullname;
	}


	public void setFullname(String fullname) {
		this.fullname = fullname;
	}


	public String getCodeClient() {
		return codeClient;
	}


	public void setCodeClient(String codeClient) {
		this.codeClient = codeClient;
	}


	public Client(Long id, String fullname, String codeClient) {
		super();
		this.id = id;
		this.fullname = fullname;
		this.codeClient = codeClient;
	}


	public Client() {
		super();
	}
	
	
	
	
	

}
