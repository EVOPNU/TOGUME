package suraifokkusu.message.chat.controllers;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import suraifokkusu.message.chat.entities.Chat;
import suraifokkusu.message.chat.services.ChatService;
import suraifokkusu.message.dto.MessageDTO;
import suraifokkusu.message.dto.transfer.ChatDetail;
import suraifokkusu.message.services.MessageService;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/chat")

public class ChatController {

    private final ChatService chatService;

    private final MessageService messageService;

    @Autowired
    public ChatController(ChatService chatService, MessageService messageService) {
        this.chatService = chatService;
        this.messageService = messageService;
    }

    @GetMapping
    private List<Chat> getAllChats(HttpServletRequest request){
        Integer userId = Integer.valueOf(request.getHeader("Id"));
        return chatService.getChats(userId);
    }

    @GetMapping("/{id}")
    private List<MessageDTO> getMessagesByChatId(HttpServletRequest request,
            @PathVariable(name = "id") Integer id) {
        Integer userId = Integer.valueOf(request.getHeader("Id"));
        List<Chat> chats = chatService.getChats(userId);
        //  chats.stream().forEach( ); //TODO ЗАГЛЯНУТЬ ВНУТРЬ ЧАТА И ВЫТАЩИТЬ АЙДИ ЧАТА (с ним и работаем дальше)
        Chat chat = chats.get(id-1);
        if(chat==null){
            throw new RuntimeException();
        }
        return messageService.getMessagesByChatId(id);

    }

    @PostMapping("/{id}")
   // @JsonView(ChatDetail.class)
    private MessageDTO sendMessage(HttpServletRequest request,
                                   @PathVariable("id") Integer chatId,
                                   @RequestBody
                                           MessageDTO messageDTO){
        messageDTO.setSender_id(Integer.valueOf(request.getHeader("Id")));
        messageDTO.setChat_id(chatId);
        return messageService.save(messageDTO).orElseThrow();
    }
}
 //TODO ликвидировать возможность запроса чего угодно, если юзер не состоит в чате (через вброс ошибок) if(throw->new)
//TODO СДЕЛАТЬ EXCEPTION HANDLER И ДОПИСАТЬ ВСЕ OR.ELSE.THROW
