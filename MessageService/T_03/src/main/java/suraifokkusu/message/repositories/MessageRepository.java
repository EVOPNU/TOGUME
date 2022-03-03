package suraifokkusu.message.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import suraifokkusu.message.entities.MessageEntity;

import java.util.Optional;

@Repository
public interface MessageRepository extends JpaRepository<MessageEntity, Long> {
}
