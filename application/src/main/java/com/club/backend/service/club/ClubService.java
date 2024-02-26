package com.club.backend.service.club;

import com.club.backend.dto.club.ClubDTO;
import com.club.backend.entity.club.Club;
import com.club.backend.entity.club.Property;
import com.club.backend.repository.club.ClubRepository;
import com.club.backend.repository.club.PropertyRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClubService {
    @Autowired
    private ClubRepository clubRepository;

    @Autowired
    private PropertyRepository propertyRepository;

    public List<ClubDTO> getClubTypeSearch(int typeId) {
        List<Club> clubs = clubRepository.findByType_TypeId(typeId);
        return clubs.stream().map(club -> {
            Property property = propertyRepository.findById(club.getClubId())
                    .orElseThrow(() -> new EntityNotFoundException("Property not found for club id: " + club.getClubId()));

            ClubDTO dto = new ClubDTO();
            dto.setClubId(club.getClubId());
            dto.setClubName(club.getClubName());
            dto.setTags(property.getTags());
            dto.setInitialLikes(property.getInitialLikes());
            dto.setImageUrl(property.getImageUrl());
            dto.setIconUrl(property.getIconUrl());

            return dto;
        }).collect(Collectors.toList());
    }
}
