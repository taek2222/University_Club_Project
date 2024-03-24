// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
package com.club.backend.service.club;

import com.club.backend.dto.club.InitialLikesDTO;
import com.club.backend.entity.club.Club;
import com.club.backend.entity.club.InitialLikes;
import com.club.backend.repository.club.ClubRepository;
import com.club.backend.repository.club.InitialLikesRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class InitialLikesService {
    private final InitialLikesRepository initialLikesRepository;
    private final ClubRepository clubRepository;

    public int likesUp(int clubId) {
        InitialLikes initialLikes = initialLikesRepository.findById(clubId)
                .orElseThrow(() -> new EntityNotFoundException("[Like] (Up) Not Found Id: " + clubId));

        initialLikes.setInitialLikes(initialLikes.getInitialLikes() + 1);
        initialLikesRepository.save(initialLikes);
        return initialLikes.getInitialLikes();
    }

    public int likesDown(int clubId) {
        InitialLikes initialLikes = initialLikesRepository.findById(clubId)
                .orElseThrow(() -> new EntityNotFoundException("[Like] (Down) Not Found Id: " + clubId));

        initialLikes.setInitialLikes(initialLikes.getInitialLikes() - 1);
        initialLikesRepository.save(initialLikes);
        return initialLikes.getInitialLikes();
    }

    public List<InitialLikesDTO> getLikesAllSearch() {
        List<InitialLikes> likes = initialLikesRepository.findAll();
        return likes.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private InitialLikesDTO convertToDTO(InitialLikes initialLikes) {
        InitialLikesDTO dto = new InitialLikesDTO();
        dto.setClubId(initialLikes.getClubId());
        dto.setInitialLikes(initialLikes.getInitialLikes());

        return dto;
    }

    public List<InitialLikesDTO> getLikesTypeSearch(int typeId) {
        List<Club> clubs = clubRepository.findByType_TypeId(typeId);

        return clubs.stream().map(club -> {
            InitialLikes initialLikes = initialLikesRepository.findById(club.getClubId()).orElseThrow();
            InitialLikesDTO dto = new InitialLikesDTO();
            dto.setClubId(initialLikes.getClubId());
            dto.setInitialLikes(initialLikes.getInitialLikes());

            return dto;
        }).collect(Collectors.toList());
    }
}
