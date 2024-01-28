package com.club.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClubController {
    @GetMapping("/club/contents/all")
    public String All() {
        return "All";
    }
}