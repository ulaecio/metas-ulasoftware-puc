package com.ulasoftware.metas.dto;

import java.util.ArrayList;
import java.util.List;

import com.ulasoftware.metas.entities.Product;
import com.ulasoftware.metas.entities.Sale;

public class SaleDTO {

	Long id;
	Double value;
	private Long userId;
	private List<Product> products = new ArrayList<>();

	public SaleDTO() {
	}

	public SaleDTO(Long id, Double value, Long userId, List<Product> products) {
		super();
		this.id = id;
		this.value = value;
		this.userId = userId;
		this.products = products;
	}

	public SaleDTO(Sale entity, List<Product> products) {
		id = entity.getId();
		value = entity.getValue();
		userId = entity.getId();
		products = entity.getProducts();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public List<Product> getProducts() {
		return products;
	}
}
