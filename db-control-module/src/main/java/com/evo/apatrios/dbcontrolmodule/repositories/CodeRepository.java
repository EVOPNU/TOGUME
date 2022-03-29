package com.evo.apatrios.dbcontrolmodule.repositories;

import com.evo.apatrios.dbcontrolmodule.models.Code;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CodeRepository extends JpaRepository<Code, Integer> {
}
