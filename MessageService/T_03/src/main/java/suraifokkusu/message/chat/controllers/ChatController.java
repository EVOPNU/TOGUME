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
@RequiredArgsConstructor
public class ChatController {

    @Setter
    @Autowired
    private ChatService chatService;

    private MessageService messageService;

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
        Chat chat = chats.get(id);
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