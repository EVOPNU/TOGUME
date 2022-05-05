package suraifokkusu.message.chat.utils;

import suraifokkusu.message.chat.entities.ChatMembers;

import java.util.ArrayList;
import java.util.List;

public class Converter {

    public List<Integer> getChatIds(List<ChatMembers> chatsByUser) {
        List<Integer> chatIds = new ArrayList<>();
        for (ChatMembers chatMemberDublet:
             chatsByUser) {
            chatIds.add(chatMemberDublet.getChatId());
        }
        return chatIds;
    }
}