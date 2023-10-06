package com.ulasoftware.metas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ulasoftware.metas.dto.TargetDTO;
import com.ulasoftware.metas.entities.Target;
import com.ulasoftware.metas.repositories.TargetRepository;

@Service
public class TargetService {

	@Autowired
	public TargetRepository repository;

	@Transactional (readOnly = true)
	public Page<TargetDTO> findAllPaged(PageRequest pageRequest) {
		Page<Target> list = repository.findAll(pageRequest);
		return list.map(x -> new TargetDTO(x, x.getUser()));
	}
}
