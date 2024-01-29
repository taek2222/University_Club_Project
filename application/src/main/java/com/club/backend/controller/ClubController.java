package com.club.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClubController {
    @GetMapping("/club/contents/all") // 전체
    public String All() {
        return "All";
    }

    @GetMapping("/club/contents/performance") // 공연
    public String Performance() {
        return "Performance";
    }

    @GetMapping("/club/contents/sports") // 공연
    public String Sports() {
        return "sports";
    }

    @GetMapping("/club/contents/hobby") // 취미
    public String Hobby() {
        return "Hobby";
    }

    @GetMapping("/club/contents/religion") // 종교
    public String Religion() {
        return "Religion";
    }

    @GetMapping("/club/contents/service") // 봉사
    public String Service() {
        return "Service";
    }
}