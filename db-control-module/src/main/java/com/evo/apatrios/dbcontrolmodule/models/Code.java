package com.evo.apatrios.dbcontrolmodule.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

//@Entity
//@Data
//@Table(name = "codes")
//@NoArgsConstructor
@AllArgsConstructor
public class Code {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "email")
    private String email;

    @Column(name = "code")
    private Integer code;

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
        return "Code{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", code=" + code +
                ", dtCreate=" + dtCreate +
                '}';
    }
}
