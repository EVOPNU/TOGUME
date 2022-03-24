package com.evo.apatrios.dbcontrolmodule.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

//@Entity
//@Data
//@Table(name = "images")
@NoArgsConstructor
@AllArgsConstructor
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "image")
    private String image;

    @Column(name = "news_id")
    @OneToOne(mappedBy = "image_news")
    private GroupNews news;

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
        return "Image{" +
                "id=" + id +
                ", image='" + image + '\'' +
//                ", news_id=" + news.getId()+
                ", dtCreate=" + dtCreate +
                '}';
    }
}
