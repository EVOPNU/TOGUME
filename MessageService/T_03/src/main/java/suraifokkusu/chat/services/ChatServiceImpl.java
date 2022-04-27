package suraifokkusu.chat.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import suraifokkusu.chat.entities.Chat;
import suraifokkusu.chat.entities.ChatMembers;
import suraifokkusu.chat.repositories.ChatMembersRepository;
import suraifokkusu.chat.repositories.ChatRepository;
import suraifokkusu.chat.utils.Converter;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatServiceImpl implements ChatService {

    private ChatRepository chatRepository;

    private ChatMembersRepository chatMembersRepository;

    private Converter converter;

    @Override
    public List<Chat> getChats(Integer userId) {
        List<ChatMembers> chatsByUser = chatMembersRepository.findAllByUserId(userId);
        List<Integer> idsOfChats = converter.getChatIds(chatsByUser);
        return chatRepository.findAllById(idsOfChats);
    }
}
