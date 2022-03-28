package com.evo.apatrios.dbcontrolmodule.services;

import com.evo.apatrios.dbcontrolmodule.dtos.CodeDto;
import org.springframework.stereotype.Service;

import java.util.List;

public interface CodeService {

    List<CodeDto> getAllCodes();

    CodeDto getCodeById(Integer id);

    CodeDto save(CodeDto codeDto);
}
