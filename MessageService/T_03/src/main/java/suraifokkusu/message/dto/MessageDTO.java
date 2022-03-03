package suraifokkusu.message.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import suraifokkusu.message.dto.transfer.*;
import suraifokkusu.message.entities.MessageEntity;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class MessageDTO {
    @Null(groups = {New.class})
    @NotNull(groups = {Update.class})
    @JsonProperty("message_id")
    @JsonView({Exist.class, AdminDetail.class, Detail.class})
    private Long message_id;

    @NotNull(groups = {New.class,Update.class})
    @JsonProperty("chat_id")
    @JsonView({Exist.class, AdminDetail.class, Detail.class})
    private Long chat_id;

    @NotNull(groups = {New.class,Update.class})
    @JsonProperty("sender_id")
    @JsonView({Exist.class, AdminDetail.class, Detail.class})
    private Long sender_id;

    @NotNull(groups = {New.class,Update.class})
    @JsonProperty("message")
    @JsonView({Exist.class, AdminDetail.class, Detail.class})
    private String message;

    @JsonProperty("date_departure")
    @JsonView({Exist.class, AdminDetail.class, Detail.class})
    private LocalDateTime date_departure;

    @JsonProperty("date_of_change")
    @JsonView({ AdminDetail.class, Detail.class})
    private LocalDateTime date_of_change;

    public MessageDTO(MessageEntity message){
        this.message_id = message.getMessage_id();
        this.chat_id = message.getChat_id();
        this.sender_id = message.getSender_id();
        this.message = message.getMessage();
        this.date_departure = message.getDate_departure();
        this.date_of_change = message.getDate_of_change();
    }

    public MessageDTO(Long message_id, Long chat_id, Long user_id, String message, LocalDateTime date_departure, LocalDateTime date_of_change) {
        this.message_id = message_id;
        this.chat_id = chat_id;
        this.sender_id = user_id;
        this.message = message;
        this.date_departure = date_departure;
        this.date_of_change = date_of_change;
    }
}

