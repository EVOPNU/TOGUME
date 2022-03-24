package com.evo.apatrios.dbcontrolmodule.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

//@Entity
//@Data
//@Table(name = "news")
//@NoArgsConstructor
@AllArgsConstructor
public class GroupNews {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "user_id")
    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private Account user;

    @OneToOne(mappedBy = "news_image")
    private Image image;

    @Column(name = "public_id")
    @ManyToOne(optional = false)
    @JoinColumn(name = "public_id", nullable = false)
    private Group group;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dt_create", updatable = false)
    private Date dtCreate;

    public Date getDtCreate(){
        return dtCreate;
    }

    @PrePersist
    public void setDtCreate(){
        this.dtCreate =new Date();
    }

    @Override
    public String toString() {
        return "GroupNews{" +
                "id=" + id +
//                ", userId=" + user.getId()+
//                ", groupId=" + group.getId() +
//                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", dtCreate=" + dtCreate +
                '}';
    }
}
