package com.ulasoftware.metas.entities;

public class Meta {
	
	private Double value;
	private Integer amount;


public Meta () {
	
}


public Meta(Double value, Integer amount) {
	super();
	this.value = value;
	this.amount = amount;
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

}