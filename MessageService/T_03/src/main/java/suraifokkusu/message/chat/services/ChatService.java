package suraifokkusu.message.chat.services;

import suraifokkusu.message.chat.entities.Chat;

import java.util.List;

public interface ChatService {
    List<Chat> getChats(Integer userId);

}
