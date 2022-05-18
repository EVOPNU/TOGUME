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
import suraifokkusu.message.exceptions.ChatCreationException;
import suraifokkusu.message.exceptions.InvalidAttributeValueException;
import suraifokkusu.message.exceptions.UserHaveNotAccess;
import suraifokkusu.message.services.MessageService;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@Api(value = "Chat")
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
    @ApiOperation(value = "Get all chats")
    public List<Chat> getAllChats(HttpServletRequest request){
        Integer userId = Integer.valueOf(request.getHeader("Id"));
        return chatService.getChats(userId);
    }


    @GetMapping("/{id}")
    @ApiOperation(value = "Get messages by chat_ID")
    @ApiImplicitParam(paramType = "header")
    public List<MessageDTO> getMessagesByChatId(HttpServletRequest request,
            @PathVariable(name = "id") Integer id) {
        Integer userId = Integer.valueOf(request.getHeader("Id"));
        //Модуль определяющий имеет ли юзер право работать с чатом
        List<Chat> chats = chatService.getChats(userId); //TODO по хорошему вынести его потом в сервисы.
        Chat currentChat = chats.stream()
                .filter((chat -> chat.getId().equals(id)))
                .findFirst()
                .orElseThrow(() ->
                        new UserHaveNotAccess(String.format("Юзер:id= %d не имеет право работать с этим чатом:id= %d", userId, id)));//ты так и не сделал эту задачу. наполовину ты ее сделал. надо было удалить строчку с Chat chat = service.getChat(id-1);

        return messageService.getMessagesByChatId(id);

    }

    @PostMapping("/{id}")
    @ApiOperation(value = "Send message")
    @ApiImplicitParam(paramType = "header")
    @JsonView(ChatDetail.class)
    public MessageDTO sendMessage(HttpServletRequest request,
                                   @PathVariable("id") Integer chatId,
                                   @RequestBody
                                           MessageDTO messageDTO){
       Integer userId = Integer.valueOf(request.getHeader("Id"));

        List<Chat> chats = chatService.getChats(userId); //TODO по хорошему вынести его потом в сервисы.
        Chat currentChat = chats.stream()
                .filter((chat -> chat.getId().equals(chatId)))
                .findFirst()
                .orElseThrow(() ->
                        new UserHaveNotAccess(String.format("Юзер:id= %d не имеет право работать с этим чатом:id= %d", userId, chatId)));//ты так и не сделал эту задачу. наполовину ты ее сделал. надо было удалить строчку с Chat chat = service.getChat(id-1);

        messageDTO.setSender_id(userId);
        messageDTO.setChat_id(chatId);
        chatService.increaseTotalMessagesByOne(currentChat); //чтобы не отправлять лишние запросы в бд
        return messageService.save(messageDTO).orElseThrow(()-> new InvalidAttributeValueException("Неверно сформированно тело сообщения"));
    }

    @PostMapping("/addChat")
    @ApiOperation(value = "Add chat")
    public Chat addChat(@RequestBody Chat chat){
        if(chat.getId() !=null){
            throw new ChatCreationException("При создании чата id должен отсутствовать"); //нужно для того, чтобы репозиторий не переписал существующие чаты.
        }
       return chatService.save(chat);
    }

    @ApiOperation(value = "Add user to chat")
    @ApiImplicitParam(paramType = "header")
    @GetMapping("/addUser/{chatId}") //зачем post если мы тело не передаем
    public ChatMembers addUser(HttpServletRequest request,
                                @PathVariable("chatId") Integer chatId){
        Integer userId = Integer.valueOf(request.getHeader("Id"));
        return chatService.addUserToChat(chatId, userId); //по хорошему надо бы навешать сюда еще проверку какую-нибудь на то , что данного юзера уже нет в данном чате. но поидеи бд нам об этом скажет, вроде бы я поля уникальные делал.
    }

}
//TODO затестить текущий сервис. Работает или нет? В туду из сервиса попробовать отловить nullPointerException
//TODO на дальнейшее будущее. переместить все выбросы exception'ов на уровень сервисов. Или на уровень Actions(новый уровень, похожий на сервисы, но не он)
//todo сделать сваггер** +
