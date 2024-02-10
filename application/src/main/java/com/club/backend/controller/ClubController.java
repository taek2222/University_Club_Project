package com.club.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClubController {
    @GetMapping("/club/contents/{Element}") // 전체
    public String name(@PathVariable("Element") String Element) {
        return Element;
    }
}