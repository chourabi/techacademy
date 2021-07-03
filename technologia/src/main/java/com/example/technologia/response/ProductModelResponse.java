package com.example.technologia.response;

 

public class ProductModelResponse {
 
	private Long id;
	
	 
	private String title; 
	private String code; 
	private int quantity; 
	private float price;  
	private Long idmagazin;
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
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public Long getIdmagazin() {
		return idmagazin;
	}
	public void setIdmagazin(Long idmagazin) {
		this.idmagazin = idmagazin;
	}
	public ProductModelResponse(Long id, String title, String code, int quantity, float price, Long idmagazin) {
		super();
		this.id = id;
		this.title = title;
		this.code = code;
		this.quantity = quantity;
		this.price = price;
		this.idmagazin = idmagazin;
	}
	public ProductModelResponse() {
		super();
	}
	
	
	
}
