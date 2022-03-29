package com.evo.apatrios.dbcontrolmodule.dtos;

import com.evo.apatrios.dbcontrolmodule.dtos.transfer.New;
import com.evo.apatrios.dbcontrolmodule.models.Code;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.util.Date;

@Data
@NoArgsConstructor
public class CodeDto {

    @Null(groups ={New.class})
    private Integer id;

    @NotNull(groups = {New.class})
    private String email;

    @NotNull(groups = {New.class})
    private Integer code;

    @Null(groups ={New.class})
    private Date dtCreate;

    public CodeDto (Code code ){
        this.id = code.getId();
        this.email = code.getEmail();
        this.code = code.getCode();
        this.dtCreate = code.getDtCreate();
    }
}
