package suraifokkusu.message.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;
import lombok.NoArgsConstructor;
import suraifokkusu.message.dto.transfer.*;
import suraifokkusu.message.entities.MessageEntity;


import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.util.Date;

@Data
@NoArgsConstructor
public class MessageDTO {
    @Null(groups = {New.class})
    @NotNull(groups = {Update.class})
    @JsonProperty("message_id")
    @JsonView({Exist.class, AdminDetail.class, Detail.class})
    private Integer message_id;

    @NotNull(groups = {New.class,Update.class})
    @JsonProperty("chat_id")
    @JsonView({Exist.class, AdminDetail.class, Detail.class})
    private Integer chat_id;

    @NotNull(groups = {New.class,Update.class})
    @JsonProperty("sender_id")
    @JsonView({Exist.class, AdminDetail.class, Detail.class})
    private Integer sender_id;

    @NotNull(groups = {New.class,Update.class})
    @JsonProperty("message")
    @JsonView({Exist.class, AdminDetail.class, Detail.class})
    private String message;

    @JsonProperty("date_departure")
    @JsonView({Exist.class, AdminDetail.class, Detail.class})
    @Null(groups = {New.class, Update.class})
    private Date date_departure;

    @JsonProperty("date_of_change")
    @JsonView({ AdminDetail.class, Detail.class})
    @Null(groups = {Update.class, New.class})
    private Date date_of_change;

    public MessageDTO(MessageEntity message){
        this.message_id = message.getMessage_id();
        this.chat_id = message.getChat_id();
        this.sender_id = message.getSender_id();
        this.message = message.getMessage();
        this.date_departure = message.getDtCreate();
        this.date_of_change = message.getDtModify();
    }

    @Override
    public String toString() {
        return "MessageDTO{" +
                "message_id=" + message_id +
                ", chat_id=" + chat_id +
                ", sender_id=" + sender_id +
                ", message='" + message + '\'' +
                ", date_departure=" + date_departure +
                ", date_of_change=" + date_of_change +
                '}';
    }
}

