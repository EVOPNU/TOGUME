package suraifokkusu.message.chat.services;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import suraifokkusu.message.chat.entities.Chat;
import suraifokkusu.message.chat.entities.ChatMembers;
import suraifokkusu.message.chat.repositories.ChatMembersRepository;
import suraifokkusu.message.chat.repositories.ChatRepository;
import suraifokkusu.message.chat.utils.Converter;

import java.util.List;

@Service
public class ChatServiceImpl implements ChatService {

    private final ChatRepository chatRepository;

    private final ChatMembersRepository chatMembersRepository;

    private final Converter converter;

    @Autowired
    public ChatServiceImpl(ChatRepository chatRepository, ChatMembersRepository chatMembersRepository, Converter converter) {
        this.chatRepository = chatRepository;
        this.chatMembersRepository = chatMembersRepository;
        this.converter = converter;
    }

    @Override
    public List<Chat> getChats(Integer userId) {
        List<ChatMembers> chatsByUser = chatMembersRepository.findAllByUserId(userId);
        List<Integer> idsOfChats = converter.getChatIds(chatsByUser);
        return chatRepository.findAllById(idsOfChats);
    }
}
