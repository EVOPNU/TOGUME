package com.evo.apatrios.dbcontrolmodule.exceptions;

import lombok.Data;

import java.util.Date;

@Data
public class ProjError {

    private int status;
    private String message;
    private Date timestamp;

    public ProjError(int status, String message) {
        this.status = status;
        this.message = message;
        this.timestamp = new Date();
    }
}
