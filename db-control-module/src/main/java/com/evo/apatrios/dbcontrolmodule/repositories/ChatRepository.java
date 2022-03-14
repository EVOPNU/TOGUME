package com.evo.apatrios.dbcontrolmodule.repositories;

import com.evo.apatrios.dbcontrolmodule.models.Chat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatRepository extends JpaRepository<Chat, Integer> {
}
