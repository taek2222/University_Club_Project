package com.club.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testAPI {
    @GetMapping("/api/test")
    public String hello() {
        return "안녕하세요.";
    }
}