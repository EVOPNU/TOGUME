package suraifokkusu.message.exceptions;

public class MessageNotFoundException extends RuntimeException {
    private String errorMessage;

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }
    public MessageNotFoundException(){
        this.errorMessage = "MESSAGE NOT FOUND";
    }
    public MessageNotFoundException(String errorMessage){
        this.errorMessage = errorMessage;
    }

}
