package suraifokkusu.message.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import suraifokkusu.message.entities.MessageEntity;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<MessageEntity, Integer> {
    @Query(value = "SELECT m FROM MessageEntity m WHERE m.chat_id = ?1")
    List<MessageEntity> findAllByChatId(Integer id);
}
