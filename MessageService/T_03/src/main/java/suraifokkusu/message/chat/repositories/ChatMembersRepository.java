package suraifokkusu.message.chat.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseStatus;
import suraifokkusu.message.chat.entities.ChatMembers;

import java.util.List;

@Repository
public interface ChatMembersRepository extends JpaRepository<ChatMembers, Integer> {
    List<ChatMembers> findAllByUserId(Integer userId);
    ChatMembers save(ChatMembers chatMembers);
}
