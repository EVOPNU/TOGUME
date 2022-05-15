package suraifokkusu.message.chat.controllers;

import com.fasterxml.jackson.annotation.JsonView;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import suraifokkusu.message.chat.entities.Chat;
import suraifokkusu.message.chat.entities.ChatMembers;
import suraifokkusu.message.chat.services.ChatService;
import suraifokkusu.message.dto.MessageDTO;
import suraifokkusu.message.dto.transfer.ChatDetail;
import suraifokkusu.message.services.MessageService;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

@RestController
//@Api(value = "Chat")
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
    //@ApiOperation(value = "Get all chats")
    private List<Chat> getAllChats(HttpServletRequest request){
        Integer userId = Integer.valueOf(request.getHeader("Id"));
        return chatService.getChats(userId);
    }


    @GetMapping("/{id}")
   // @ApiOperation(value = "Get messages by chat_ID")
  //  @ApiImplicitParam(paramType = "header")
    private List<MessageDTO> getMessagesByChatId(HttpServletRequest request,
            @PathVariable(name = "id") Integer id) {
        Integer userId = Integer.valueOf(request.getHeader("Id"));
        List<Chat> chats = chatService.getChats(userId);
        chats.stream().filter((chat -> chat.getId() == id)).collect(Collectors.toList()); //TODO ЗАГЛЯНУТЬ ВНУТРЬ ЧАТА И ВЫТАЩИТЬ АЙДИ ЧАТА (с ним и работаем дальше) +
        Chat chat = chats.get(id-1);
        if(chat==null){
            throw new RuntimeException();
        }
        return messageService.getMessagesByChatId(id);

    }

    @PostMapping("/{id}")
    //@ApiOperation(value = "Send message")
    //@ApiImplicitParam(paramType = "header")
    @JsonView(ChatDetail.class)
    private MessageDTO sendMessage(HttpServletRequest request, //todo менять в чате тоталмэсседжес* +
                                   @PathVariable("id") Integer chatId,
                                   @RequestBody
                                           MessageDTO messageDTO){
       Integer userId = Integer.valueOf(request.getHeader("Id"));
        messageDTO.setSender_id(userId);
        messageDTO.setChat_id(chatId);
        chatService.increaseTotalMessagesByOne(chatId);
        return messageService.save(messageDTO).orElseThrow();
    }

    @PostMapping("/addChat")
    //@ApiOperation(value = "Add chat")
    private Chat addChat(@RequestBody Chat chat){
       return chatService.save(chat);
    }

    //@ApiOperation(value = "Add user to chat")
    //@ApiImplicitParam(paramType = "header")
    @PostMapping("/addUser/${id}")
    private ChatMembers addUser(HttpServletRequest request,
                                @PathVariable("id") Integer chatId){
        Integer userId = Integer.valueOf(request.getHeader("Id"));
        return chatService.addUserToChat(chatId, userId);
    }

}
//TODO ликвидировать возможность запроса чего угодно, если юзер не состоит в чате (через вброс ошибок) if(throw->new)
//TODO СДЕЛАТЬ EXCEPTION HANDLER И ДОПИСАТЬ ВСЕ OR.ELSE.THROW

//TODO API FOR ADD CHAT+
//TODO USER ADD TO CHAT+
//TODO VALIDATION FOR MEESSAGE TO SEND IN CHAT МНЕ НЕ НУЖНО В ДТОШКЕ CHAT_ID AND SEND_ID ПОТОМУ ЧТО ПОЛУЧАЕМ ИХ ИЗ ХЕДЕРОВ И ИЗ ПУТИ, НУЖЕН ТОЛЬКО МЭССЕДЖ+
//todo сделать сваггер** +
