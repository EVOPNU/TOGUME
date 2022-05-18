package suraifokkusu.message.controllers;

import com.fasterxml.jackson.annotation.JsonView;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import suraifokkusu.message.dto.MessageDTO;
import suraifokkusu.message.dto.transfer.*;

import suraifokkusu.message.exceptions.InvalidAttributeValueException;
import suraifokkusu.message.exceptions.MessageNotFoundException;
import suraifokkusu.message.services.MessageService;

import java.util.List;

    @RestController
    @RequestMapping("/api/v1/message")
    @Api(value = "Message")
    public class MessageController {
    private final MessageService service;
    @Autowired
    public MessageController(MessageService service) {
        this.service = service;
    }

    @GetMapping()
    @ApiOperation(value = "Get messages to simple user")
    @JsonView(Exist.class)
    public List<MessageDTO> simpleUsersFindAll() {
        return service.findAll();
    }


    @GetMapping(value="/admin")
    @ApiOperation(value = "Get messages to admin")
    @JsonView(AdminDetail.class)
        public List<MessageDTO> AdminFindAll() {
            return service.findAll();
        }


    @GetMapping(value = "/{id}")
    @ApiOperation(value = "Get message by id")
    @JsonView(Exist.class)
    public MessageDTO findById(@PathVariable Integer id) {
        return service.findById(id).orElseThrow(MessageNotFoundException::new);
    }

    @PostMapping()
    @ApiOperation(value = "Add message")
    @JsonView(Exist.class)
    public MessageDTO save(@Validated(New.class) @RequestBody MessageDTO dto) {
        if (dto.getMessage_id()!=null){
            throw new InvalidAttributeValueException("MESSAGE ID MUST BE NULL");
        }
        return service.save(dto).orElseThrow(MessageNotFoundException::new);
    }

    @PutMapping()
    @ApiOperation(value = "Edit message by id")
    @JsonView(Exist.class)
    public MessageDTO update(@Validated(Update.class) @RequestBody MessageDTO dto) {
        if (dto.getMessage_id() ==null){
            throw new InvalidAttributeValueException("MESSAGE ID MUST NOT BE NULL");
        }
        return service.save(dto).orElseThrow(MessageNotFoundException::new);
        }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "Delete message by id")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable Integer id) {
        service.deleteById(id);
    }
}