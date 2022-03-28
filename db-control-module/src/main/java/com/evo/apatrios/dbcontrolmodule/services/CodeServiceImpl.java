package com.evo.apatrios.dbcontrolmodule.services;

import com.evo.apatrios.dbcontrolmodule.dtos.CodeDto;
import com.evo.apatrios.dbcontrolmodule.exceptions.CodeNotFoundException;
import com.evo.apatrios.dbcontrolmodule.models.Code;
import com.evo.apatrios.dbcontrolmodule.repositories.CodeRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@Slf4j
public class CodeServiceImpl implements CodeService{

    private CodeRepository codeRepository;

    @Autowired
    public void setCodeRepository(CodeRepository codeRepository) {
        this.codeRepository = codeRepository;
    }

    @Override
    public List<CodeDto> getAllCodes() {
        return codeRepository.findAll().stream()
                .map(CodeDto::new)
                .collect(Collectors.toList());
    }

    @Override
    public CodeDto getCodeById(Integer id) {
        return codeRepository.findById(id)
                .map(CodeDto::new)
                .orElseThrow(CodeNotFoundException::new);
    }

    @Override
    public CodeDto save(CodeDto codeDto) {
        return Optional.of(codeRepository.save(new Code(codeDto.getEmail(),codeDto.getCode())))
                .map(CodeDto::new)
                .orElseThrow(CodeNotFoundException::new);
    }
}
