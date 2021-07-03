package com.example.technologia.request;

public class AddNewProductRequest {

	private String title;
	private float price;
	private int quantity;
	private String ref;
	private Long idmagazin;
	
	
	
	
	public Long getIdmagazin() {
		return idmagazin;
	}
	public void setIdmagazin(Long idmagazin) {
		this.idmagazin = idmagazin;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getRef() {
		return ref;
	}
	public void setRef(String ref) {
		this.ref = ref;
	}
	public AddNewProductRequest() {
		super();
	}
	
	
	
	
	
}
