package com.ulasoftware.metas.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.ulasoftware.metas.entities.User;

public class UserDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	@NotBlank(message = "Campo Obrigatório")
	private String name;
	
	Set<RoleDTO> roles = new HashSet<>();
	
	public UserDTO() {
		
	}

	public UserDTO(Long id, String name) {
		this.id = id;
		this.name = name;

	
	}
	
	public UserDTO(User entity) {
		id = entity.getId();
		name = entity.getName();

		entity.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
		
	}

	public Set<RoleDTO> getRoles() {
		return roles;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public void setRoles(Set<RoleDTO> roles) {
		this.roles = roles;
	}
	
	
}
