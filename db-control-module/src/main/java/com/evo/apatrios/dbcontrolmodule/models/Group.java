package com.evo.apatrios.dbcontrolmodule.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.List;

//@Entity
//@Data
//@Table(name = "publics")
@NoArgsConstructor
@AllArgsConstructor
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "access")
    private String access;

    @Column(name = "amount")
    private Integer amount;

    @OneToMany(mappedBy = "publics ")
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private List<GroupNews> news;

    @Override
    public String toString() {
        return "Group{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", access='" + access + '\'' +
                ", amount=" + amount +
                '}';
    }
}
