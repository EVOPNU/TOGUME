package suraifokkusu.message.chat.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import suraifokkusu.message.chat.entities.ChatMembers;

import java.util.List;

public interface ChatMembersRepository extends JpaRepository<ChatMembers, Integer> {
    List<ChatMembers> findAllByUserId(Integer userId);
}
