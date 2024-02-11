package com.club.backend.controller;

import com.club.backend.entity.Club;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class ClubController {
    @GetMapping("/club/contents/{Element}") // 전체
    public List<Club> ClubContents(@PathVariable("Element") String Element) {
        List<Club> clubs = new ArrayList<>();
        clubs.add(new Club(
                "총동연",
                Arrays.asList("총동아리 연합회", "부원 모집"),
                27,
                "url_to_image", // 실제 이미지 URL로 교체 필요
                "url_to_icon", // 실제 아이콘 URL로 교체 필요
                "🌟 총동아리 연합회 🌟",
                "안녕하세요, 대학교 동아리 연합회입니다! ...",
                Arrays.asList("url_to_image1", "url_to_image2", "url_to_image3") // 실제 이미지 URL로 교체 필요
        ));
        return clubs;
    }
}