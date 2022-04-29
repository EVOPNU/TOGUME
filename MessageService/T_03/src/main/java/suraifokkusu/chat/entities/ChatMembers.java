package suraifokkusu.chat.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="chat_members")
@Data
@NoArgsConstructor
public class ChatMembers {
    @Id
    @Column(nullable = false, name = "chat_id")
    private Integer chatId;
    @Id
    @Column(nullable = false, name = "user_id")
    private Integer userId;
}
