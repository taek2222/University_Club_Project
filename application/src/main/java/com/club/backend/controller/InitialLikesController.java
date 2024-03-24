// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
package com.club.backend.controller;

import com.club.backend.dto.club.InitialLikesDTO;
import com.club.backend.service.club.InitialLikesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/initialLikes")
public class InitialLikesController {
    private final InitialLikesService initialLikesService;

    @GetMapping("/all")
    public List<InitialLikesDTO> getLikesAll() {
        return initialLikesService.getLikesAllSearch();
    }

    @GetMapping("/{typeId}")
    public List<InitialLikesDTO> getLikesType(@PathVariable("typeId") int typeId) {
        return initialLikesService.getLikesTypeSearch(typeId);
    }

    @PatchMapping("/likes")
    public ResponseEntity<?> patchLikes(@RequestBody InitialLikesDTO dto) {
        int likes;

        if(dto.getIsLiked())
            likes = initialLikesService.likesUp(dto.getClubId());
        else
            likes = initialLikesService.likesDown(dto.getClubId());
        return ResponseEntity.ok(likes);
    }
}
