package suraifokkusu.message.exceptions;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler {
    @ExceptionHandler
    public ResponseEntity<?> catchMessageNotFoundException(MessageNotFoundException e){
        log.error(e.getMessage(), e);
        return new ResponseEntity<>(new MessageError(HttpStatus.NOT_FOUND.value(), e.getMessage()), HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler
    public ResponseEntity<?> catchInvalidAttributeValueException(InvalidAttributeValueException e){
        log.error(e.getMessage(), e);
        return new ResponseEntity<>(new MessageError(HttpStatus.BAD_REQUEST.value(), e.getMessage()), HttpStatus.BAD_REQUEST);
    }
}