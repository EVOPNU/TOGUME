package suraifokkusu.message.chat.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import suraifokkusu.message.chat.entities.Chat;
import suraifokkusu.message.chat.entities.ChatMembers;

@Repository
public interface ChatRepository extends JpaRepository<Chat, Integer> {
   Chat getChatById(Integer chatId);
}
