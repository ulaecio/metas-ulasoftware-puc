package com.ulasoftware.metas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ulasoftware.metas.entities.Sale;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long>{

}
