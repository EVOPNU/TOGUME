package suraifokkusu.message.entities;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class MessageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long message_id;

    @Column(nullable = false)
    private Long chat_id;

    @Column(nullable = false)
    private Long sender_id;

    @Column(nullable = false)
    private String message;

    @CreationTimestamp
    @Column
    private LocalDateTime date_departure;

    @UpdateTimestamp
    @Column
    private LocalDateTime date_of_change;

    public MessageEntity() {
    }

    public Long getMessage_id() {
        return message_id;
    }

    public void setMessage_id(Long message_id) {
        this.message_id = message_id;
    }

    public Long getChat_id() {
        return chat_id;
    }

    public void setChat_id(Long chat_id) {
        this.chat_id = chat_id;
    }

    public Long getSender_id() {
        return sender_id;
    }

    public void setSender_id(Long sender_id) {
        this.sender_id = sender_id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LocalDateTime getDate_departure() {
        return date_departure;
    }

    public void setDate_departure(LocalDateTime date_departure) {
        this.date_departure = date_departure;
    }

    public LocalDateTime getDate_of_change() {
        return date_of_change;
    }

    public void setDate_of_change(LocalDateTime date_of_change) {
        this.date_of_change = date_of_change;
    }

    @Override
    public String toString() {
        return "MessageEntity{" + "message_id=" + message_id + ", chat_id=" + chat_id + ", user_id=" + sender_id + ", message='" + message + '\'' + ", date_departure=" + date_departure + ", date_of_change=" + date_of_change + '}';
    }
}
