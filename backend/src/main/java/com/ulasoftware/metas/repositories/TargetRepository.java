package com.ulasoftware.metas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ulasoftware.metas.entities.Target;

public interface TargetRepository extends JpaRepository<Target, Long>{
}
