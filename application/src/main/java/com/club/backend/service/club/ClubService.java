// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
package com.club.backend.service.club;

import com.club.backend.dto.club.ClubDTO;
import com.club.backend.entity.club.Club;
import com.club.backend.entity.club.InitialLikes;
import com.club.backend.entity.club.Property;
import com.club.backend.repository.club.ClubRepository;
import com.club.backend.repository.club.InitialLikesRepository;
import com.club.backend.repository.club.PropertyRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ClubService {
    private final ClubRepository clubRepository;
    private final PropertyRepository propertyRepository;
    private final InitialLikesRepository initialLikesRepository;

    @Cacheable(value = "clubAllCache")
    public List<ClubDTO> getClubAllSearch() { // 동아리 전체 요청
        List<Club> clubs = clubRepository.findAll();
        return clubs.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Cacheable(value = "clubTypeCache")
    public List<ClubDTO> getClubTypeSearch(int typeId) { // 동아리 소속 요청
        List<Club> clubs = clubRepository.findByType_TypeId(typeId);
        return clubs.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private ClubDTO convertToDTO(Club club) { // 동아리 데이터 검색
        Property property = propertyRepository.findById(club.getClubId())
                .orElseThrow(() -> new EntityNotFoundException("Property not found for club id: " + club.getClubId()));

        ClubDTO dto = new ClubDTO();
        dto.setClubId(club.getClubId());
        dto.setClubName(club.getClubName());
        dto.setTags(property.getTags());
        dto.setImageUrl(property.getImageUrl());
        dto.setIconUrl(property.getIconUrl());

        return dto;
    }
}
