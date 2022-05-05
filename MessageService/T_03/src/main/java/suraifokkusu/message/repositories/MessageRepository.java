package suraifokkusu.message.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import suraifokkusu.message.entities.Message;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Integer> {
    @Query(value = "SELECT m FROM Message m WHERE m.chat_id = ?1")
    List<Message> findAllByChatId(Integer id);
}
