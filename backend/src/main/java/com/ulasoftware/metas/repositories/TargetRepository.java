package com.ulasoftware.metas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ulasoftware.metas.entities.Target;

@Repository
public interface TargetRepository extends JpaRepository<Target, Long>{
}
