package suraifokkusu.message.services;

import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import suraifokkusu.message.dto.MessageDTO;
import suraifokkusu.message.entities.MessageEntity;
import suraifokkusu.message.repositories.MessageRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
public class MessageService {
    //private ModelMapper modelMapper;
    private MessageRepository messageRepository;

//    @Autowired
//    public void setModelMapper(ModelMapper modelMapper) {
//        this.modelMapper = modelMapper;
//    }
    @Autowired
    public void setMessageRepository(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }


    @Transactional
    public List<MessageDTO> findAll() {
        return messageRepository.findAll().stream()
                .map(MessageDTO::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public Optional<MessageDTO> findById(Integer id) {
        return messageRepository.findById(id).map(MessageDTO::new);
    }

    @Transactional
    public Optional<MessageDTO> save(MessageDTO messageDTO)
    {
        return Optional.of(messageRepository.save(new MessageEntity(messageDTO.getMessage_id(),
                messageDTO.getChat_id(), messageDTO.getDate_departure(), messageDTO.getDate_of_change(),
                messageDTO.getMessage(), messageDTO.getSender_id())))
                .map(MessageDTO::new);
    }

    @Transactional
    public void deleteById(Integer id) {
     messageRepository.deleteById(id);
    }

//    private MessageEntity dtoToEntity(MessageDTO dto){
//        log.info(dto.toString());
//
////        return modelMapper.map(dto, MessageEntity.class);
//    }
//    private MessageDTO entityToDto(MessageEntity message){
//        log.info(message.toString());
////        return modelMapper.map(message, MessageDTO.class);
//    }
}
