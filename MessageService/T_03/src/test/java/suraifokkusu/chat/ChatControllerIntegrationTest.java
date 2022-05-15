//package suraifokkusu.chat;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.web.reactive.server.WebTestClient;
//import suraifokkusu.message.chat.entities.Chat;
//
//import java.util.List;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
////@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
//@AutoConfigureWebTestClient
//public class ChatControllerIntegrationTest {
//    @Autowired
//    private WebTestClient webTestClient;
//
//    @Test
//    void getListOfChats() {
//        //Arrange
//        //Act
//        List<Chat> chats = webTestClient.get()
//                                        .uri("http://localhost:8080/chat")
//                                        .exchange()
//                                        .expectStatus()
//                                        .isOk()
//                                        .expectBodyList(Chat.class)
//                                        .returnResult()
//                                        .getResponseBody();
//        //Assert
//        assertThat(chats).contains(new Chat(1, "test_lobby", "chats/lobby", 10));
//    }
//    @Test
//    void get(){
//        Chat chat = webTestClient.get()
//                                        .uri("/chat/{id}", 2)
//                                        .exchange()
//                                        .expectBody(Chat.class)
//                                        .returnResult()
//                                        .getResponseBody();
//        //Assert
//        assertThat(chat).isEqualTo(new Chat(1, "test_lobby", "chats/lobby", 10));
//    }
//
//    //TODO (CREATE) TEST OF CHAT
//}
