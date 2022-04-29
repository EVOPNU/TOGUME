package suraifokkusu.message.exceptions;

import javax.persistence.criteria.CriteriaBuilder;

public class InvalidAttributeValueException extends RuntimeException{
    public InvalidAttributeValueException(String message){
        super(message);
    }
}
