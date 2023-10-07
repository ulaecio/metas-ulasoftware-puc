package com.ulasoftware.metas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ulasoftware.metas.dto.SaleDTO;
import com.ulasoftware.metas.entities.Sale;
import com.ulasoftware.metas.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	public SaleRepository repository;

	@Transactional (readOnly = true)
	public Page<SaleDTO> findAllPaged(PageRequest pageRequest) {
		Page<Sale> list = repository.findAll(pageRequest);
		return list.map(x -> new SaleDTO(x, x.getProducts()));
	}

}
