package suraifokkusu.message.services;

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
public class MessageService {
    private ModelMapper modelMapper;
    private MessageRepository messageRepository;

    @Autowired
    public void setModelMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }
    @Autowired
    public void setMessageRepository(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }


    @Transactional
    public List<MessageDTO> findAll() {
        return messageRepository.findAll().stream().map(this::entityToDto).collect(Collectors.toList());
    }

    @Transactional
    public Optional<MessageDTO> findById(Long id) {
        return messageRepository.findById(id).map(this::entityToDto);
    }

    @Transactional
    public Optional<MessageDTO> save(MessageDTO messageDTO)
    {
        return Optional.of(messageRepository.save(dtoToEntity(messageDTO))).map(this::entityToDto);
    }

    @Transactional
    public void deleteById(Long id) {
     messageRepository.deleteById(id);
    }

    private MessageEntity dtoToEntity(MessageDTO dto){
        return modelMapper.map(dto, MessageEntity.class);
    }

    private MessageDTO entityToDto(MessageEntity message){
        return modelMapper.map(message, MessageDTO.class);
    }
}
