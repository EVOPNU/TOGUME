package com.evo.apatrios.dbcontrolmodule.repositories;

import com.evo.apatrios.dbcontrolmodule.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<Message,Integer> {
}
