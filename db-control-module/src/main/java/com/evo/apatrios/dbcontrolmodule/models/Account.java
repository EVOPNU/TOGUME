package com.evo.apatrios.dbcontrolmodule.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table
@Data
@NoArgsConstructor
public class Account {

    @Id
    private Integer id;

    private String email;

    private String password;

    private String firstName;

    private String lastName;

    private String thirdName;

    private Date birthday;

    private String groupUniversity;

    private String Faculty;

    private String nickname;

    private String statusInProfile;

    private Integer countOfFriends;

    private Integer countOfFollowers;

    private Integer countOfPhotos;

    private Integer countOfPosts;

    private String mainPhoto;

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
        return "Account{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", thirdName='" + thirdName + '\'' +
                ", birthday=" + birthday.toString() +
                ", groupUniversity='" + groupUniversity + '\'' +
                ", Faculty='" + Faculty + '\'' +
                ", nickname='" + nickname + '\'' +
                ", statusInProfile='" + statusInProfile + '\'' +
                ", countOfFriends=" + countOfFriends +
                ", countOfFollowers=" + countOfFollowers +
                ", countOfPhotos=" + countOfPhotos +
                ", countOfPosts=" + countOfPosts +
                ", mainPhoto='" + mainPhoto + '\'' +
                ", dtCreate=" + dtCreate.toString() +
                '}';
    }
}
