package com.club.backend.controller;

import com.club.backend.dto.club.ClubDTO;

import com.club.backend.dto.club.ModalDTO;
import com.club.backend.entity.club.Club;
import com.club.backend.service.club.ClubService;
import com.club.backend.service.club.ModalService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ClubController {

    @Autowired
    private ClubService clubService;

    @Autowired
    private ModalService modalService;

    private final Logger log = LoggerFactory.getLogger(getClass());

    @GetMapping("/All/clubs") // 동아리 전체 요청
    public List<ClubDTO> getClubsByAll() {
        return clubService.getClubAllSearch();
    }

    @GetMapping("/{typeId}/clubs") // 동아리 소속 요청
    public List<ClubDTO> getClubsByType(@PathVariable("typeId") int typeId) {
        return clubService.getClubTypeSearch(typeId);
    }

    @GetMapping("/{clubId}/club/modal") // 동아리 모달 요청
    public ModalDTO getClubsByModal(@PathVariable("clubId") int clubId) {
        return modalService.getClubModalSearch(clubId);
    }
}