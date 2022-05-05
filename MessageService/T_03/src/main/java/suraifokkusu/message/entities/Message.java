package suraifokkusu.message.entities;

import lombok.AllArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="message_entity")
@AllArgsConstructor
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer message_id;

    @Column(nullable = false)
    private Integer chat_id;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dt_create", updatable = false, nullable = false)
    private Date dtCreate;

    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dt_update", updatable = false, nullable = false)
    private Date dtUpdate;
    @Column(nullable = false)
    private String message;

    @Column(name="user_id", nullable = false)
    private Integer sender_id;

    public Message() {
    }

    public Integer getMessage_id() {
        return message_id;
    }

    public void setMessage_id(Integer message_id) {
        this.message_id = message_id;
    }

    public Integer getChat_id() {
        return chat_id;
    }

    public void setChat_id(Integer chat_id) {
        this.chat_id = chat_id;
    }

    public Integer getSender_id() {
        return sender_id;
    }

    public void setSender_id(Integer sender_id) {
        this.sender_id = sender_id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Date getDtCreate() {
        return dtCreate;
    }

    @PrePersist
    public void setDtCreate() {
        this.dtCreate = this.dtUpdate = new Date();
    }

    public Date getDtModify() {
        return dtUpdate;
    }

    @PreUpdate
    public void setDtModify() {
        this.dtUpdate = new Date();
    }

    @Override
    public String toString() {
        return "Message{" +
                "message_id=" + message_id +
                ", chat_id=" + chat_id +
                ", dtCreate=" + dtCreate +
                ", dtUpdate=" + dtUpdate +
                ", message='" + message + '\'' +
                ", sender_id=" + sender_id +
                '}';
    }
}
