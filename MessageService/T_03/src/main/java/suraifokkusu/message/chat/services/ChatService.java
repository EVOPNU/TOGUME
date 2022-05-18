package suraifokkusu.message.chat.services;

import org.springframework.web.bind.annotation.RequestBody;
import suraifokkusu.message.chat.entities.Chat;
import suraifokkusu.message.chat.entities.ChatMembers;

import java.util.List;
import java.util.Optional;

public interface ChatService {
    List<Chat> getChats(Integer userId);
    Chat increaseTotalMessagesByOne (Integer chatId);
    Chat increaseTotalMessagesByOne (Chat chat);
    Chat save(@RequestBody Chat chat);
    ChatMembers addUserToChat(Integer chatId, Integer userId);
}
