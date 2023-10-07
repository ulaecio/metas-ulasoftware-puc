package com.ulasoftware.metas.dto;

import java.io.Serializable;

import com.ulasoftware.metas.entities.Target;
import com.ulasoftware.metas.entities.User;

public class TargetDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private Double value;
	private Integer amount;
	
	private User user;

	public TargetDTO() {
	}
	
	public TargetDTO(Long id, Double value, Integer amount) {
		this.id = id;
		this.value = value;
		this.amount = amount;
	}
	
	public TargetDTO(Target entity) {
		id = entity.getId();
		value = entity.getValue();
		amount = entity.getAmount();
	}
	
	public TargetDTO(Target entity, User user) {
		this(entity);
		user = entity.getUser();
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

	public Integer getAmount() {
		return amount;
	}

	public void setAmount(Integer amount) {
		this.amount = amount;
	}

	public User getUser() {
		return user;
	}	
}
