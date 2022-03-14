package com.evo.apatrios.dbcontrolmodule.repositories;

import com.evo.apatrios.dbcontrolmodule.models.GroupNews;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupNewsRepository extends JpaRepository<GroupNews, Integer> {
}
