package com.ulasoftware.metas.dto;

import java.io.Serializable;
import java.util.List;
import java.util.stream.Collectors;

import com.ulasoftware.metas.entities.Product;
import com.ulasoftware.metas.entities.Sale;

public class SaleDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private Double value;
	private UserDTO user;
	private List<ProductDTO> products;

	public SaleDTO() {
	}

	public SaleDTO(Sale sale, List<Product> products) {
		this.id = sale.getId();
		this.value = sale.getValue();
		this.user = new UserDTO(sale.getUser());
		this.products = products.stream().map(ProductDTO::new).collect(Collectors.toList());
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

	public List<ProductDTO> getProducts() {
		return products;
	}

	public UserDTO getUser() {
		return user;
	}
}
