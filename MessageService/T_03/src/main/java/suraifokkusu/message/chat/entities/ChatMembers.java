package suraifokkusu.message.chat.entities;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name ="chat_members_new")
@Data
@NoArgsConstructor
public class ChatMembers {

    @Id
    @Column(nullable = false, name = "id")
    private Integer id;

    @Column(nullable = false, name = "chat_id")
    private Integer chatId;

    @Column(nullable = false, name = "user_id")
    private Integer userId;

}
