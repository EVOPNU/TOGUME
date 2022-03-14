package com.evo.apatrios.dbcontrolmodule.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name = "messages")
@NoArgsConstructor
@AllArgsConstructor
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "chatId")
    private Integer chatId;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dt_create", updatable = false)
    private Date dtCreate;

    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dt_update", updatable = false)
    private Date dtUpdate;

    @Column(name = "message")
    private String message;

    @Column(name = "user_id")
    private Integer userId;

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
                "id=" + id +
                ", chatId=" + chatId +
                ", dtCreate=" + dtCreate +
                ", dtUpdate=" + dtUpdate +
                ", message='" + message + '\'' +
                ", user_id=" + userId +
                '}';
    }
}
