package suraifokkusu.message.exceptions;

public class ChatCreationException extends RuntimeException{
    private String errorMessage;

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }
    public ChatCreationException(){
        this.errorMessage = "ERROR ON CHAT CREATION";
    }
    public ChatCreationException(String errorMessage){
        this.errorMessage = errorMessage;
    }
}
