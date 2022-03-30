package com.evo.apatrios.dbcontrolmodule.exceptions;

public class CodeNotFoundException extends RuntimeException{
    private String errorMessage;
    public CodeNotFoundException(){
        this.errorMessage = "Code is not found";
    }
    public CodeNotFoundException(String message) {
        this.errorMessage=message;
    }

    public String getErrorMessage() {
        return errorMessage;
    }
}
