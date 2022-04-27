package suraifokkusu.chat.services;

import org.springframework.stereotype.Service;
import suraifokkusu.chat.entities.Chat;

import java.util.List;

public interface ChatService {
    List<Chat> getChats(Integer userId);

}
