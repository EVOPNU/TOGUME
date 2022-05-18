package suraifokkusu.message.chat.services;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import suraifokkusu.message.chat.entities.Chat;
import suraifokkusu.message.chat.entities.ChatMembers;
import suraifokkusu.message.chat.repositories.ChatMembersRepository;
import suraifokkusu.message.chat.repositories.ChatRepository;
import suraifokkusu.message.chat.utils.Converter;

import java.util.List;
import java.util.Optional;

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

    @Override
    @Transactional
    public Chat increaseTotalMessagesByOne(Integer chatId) {
        Chat chat = chatRepository.getChatById(chatId);
        Long messages = chat.getTotalMessages() + 1;
        chat.setTotalMessages(messages);
        return chat;
    }
    @Override
    @Transactional
    public Chat increaseTotalMessagesByOne(Chat chat) { // сделал перегруженный метод чтобы избавиться от лишнего запроса в бд.
        Long messages = chat.getTotalMessages() + 1;
        chat.setTotalMessages(messages);
        return chat;
    }

    @Transactional
    public Chat save(@RequestBody Chat chat) {
        return chatRepository.save(
                new Chat(
                        chat.getId(), //TODO проверить на nullPointerException
                        chat.getName(),
                        chat.getPath(),
                        chat.getTotalMessages()
                )
        );
    }

    @Transactional
    public ChatMembers addUserToChat(Integer chatId, Integer userId){
        ChatMembers chatMembers = new ChatMembers(chatId, userId); //Стоит сделать проверку потом на уже возможное наличие данного юзера в чате. чтобы не захламлять бд одинаковыми записями.
       return chatMembersRepository.save(chatMembers);
    }
}

