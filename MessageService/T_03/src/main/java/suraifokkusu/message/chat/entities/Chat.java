package suraifokkusu.message.chat.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "chats")
@Data
@NoArgsConstructor
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, name = "name")
    private String name;

    @Column(nullable = false, name = "path")
    private String path;

    @Column(nullable = false, name = "total_messages")
    private Long totalMessages;

    public Chat(int i, String test_lobby, String s, int i1) {
    }
}
