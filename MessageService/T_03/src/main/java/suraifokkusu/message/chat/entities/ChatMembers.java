package suraifokkusu.message.chat.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name ="chat_members_new")
@Data
@NoArgsConstructor
public class ChatMembers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, name = "chat_id")
    private Integer chatId;

    @Column(nullable = false, name = "user_id")
    private Integer userId;

   public ChatMembers(Integer chatId, Integer userId) {
        this.chatId = chatId;
        this.userId = userId;
    }
}