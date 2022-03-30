package com.evo.apatrios.dbcontrolmodule.exceptions;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<?> handleCodeNotFoundException(CodeNotFoundException exception){
        log.error(exception.getMessage(), exception);
        return new ResponseEntity<>(new ProjError(HttpStatus.NOT_FOUND.value(), exception.getErrorMessage()), HttpStatus.NOT_FOUND);
    }
}
