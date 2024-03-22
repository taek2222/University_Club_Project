// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
package com.club.backend.service.join;

import com.club.backend.dto.join.JoinDTO;
import com.club.backend.entity.club.Club;
import com.club.backend.entity.join.Join;
import com.club.backend.entity.join.Term;
import com.club.backend.repository.club.ClubRepository;
import com.club.backend.repository.join.JoinRepository;
import com.club.backend.repository.join.TermRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class JoinService {
    private final JoinRepository joinRepository;
    private final ClubRepository clubRepository;
    private final TermRepository termRepository;
    private final TermService termService;

    public List<JoinDTO> getJoinAllSearch() {
        List<Join> joins = joinRepository.findAll();

        return joins.stream().map(join -> {
            Club club = clubRepository.findById(join.getClubId())
                    .orElseThrow(() -> new EntityNotFoundException("Club not found for club id: " + join.getClubId()));

            Term term = termRepository.findById(join.getClubId())
                    .orElseThrow(() -> new EntityNotFoundException("Term not found for club id: " + join.getClubId()));
            JoinDTO dto = new JoinDTO();

            // Join
            dto.setClubId(join.getClubId());
            dto.setIconImage(join.getIconImage());
            dto.setTitle(join.getTitle());
            dto.setPaths(join.getPaths());

            // Term
            dto.setEventDate(termService.calculate(term));

            // Club
            dto.setClubName(club.getClubName());
            dto.setField(club.getType().getField());

            return dto;
        }).collect(Collectors.toList());
    }
}
