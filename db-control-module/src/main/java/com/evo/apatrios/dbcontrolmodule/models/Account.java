package com.evo.apatrios.dbcontrolmodule.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

//@Entity
//@Table(name = "accounts")
//@Data
@NoArgsConstructor
@AllArgsConstructor
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "thirdName")
    private String thirdName;

    @Column(name = "birthday")
    private Date birthday;

    @Column(name = "groupUniversity")
    private String groupUniversity;

    @Column(name = "faculty")
    private String faculty;

    @Column(name = "nickname")
    private String nickname;

    @Column(name = "statusInProfile")
    private String statusInProfile;

    @Column(name = "countOfFriends")
    private Integer countOfFriends;

    @Column(name = "countOfFollowers")
    private Integer countOfFollowers;

    @Column(name = "countOfPhotos")
    private Integer countOfPhotos;

    @Column(name = "countOfPosts")
    private Integer countOfPosts;

    @Column(name = "mainPhoto")
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

    @OneToMany(mappedBy = "user")
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private List<GroupNews> news;

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
                ", Faculty='" + faculty + '\'' +
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
