package com.evo.apatrios.dbcontrolmodule.controllers;

import com.evo.apatrios.dbcontrolmodule.dtos.CodeDto;
import com.evo.apatrios.dbcontrolmodule.dtos.transfer.New;
import com.evo.apatrios.dbcontrolmodule.services.CodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/codes")
public class CodeController {

    private CodeService codeService;

    @Autowired
    public void setCodeService(CodeService codeService) {
        this.codeService = codeService;
    }

    @GetMapping()
    public List<CodeDto> getAllCodes(){
        return codeService.getAllCodes();
    }

    @GetMapping("/{id}")
    public CodeDto getCodeById(@PathVariable("id") Integer id){
        return codeService.getCodeById(id);
    }

    @PostMapping()
    public CodeDto createNewTestingDbCode(@RequestBody
                                              @Validated(New.class)
                                                    CodeDto codeDto){
        return codeService.save(codeDto);
    }
}
