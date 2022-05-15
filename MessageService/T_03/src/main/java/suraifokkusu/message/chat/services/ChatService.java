package suraifokkusu.message.chat.services;

import org.springframework.web.bind.annotation.RequestBody;
import suraifokkusu.message.chat.entities.Chat;

import java.util.List;
import java.util.Optional;

public interface ChatService {
    List<Chat> getChats(Integer userId);
    Chat increaseTotalMessagesByOne (Integer chatId);
    public Chat save(@RequestBody Chat chat);
}
