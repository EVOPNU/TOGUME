package suraifokkusu.chat.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import suraifokkusu.chat.entities.ChatMembers;

import java.util.List;

public interface ChatMembersRepository extends JpaRepository<ChatMembers, Integer> {
    List<ChatMembers> findAllByUserId(Integer userId);
}
