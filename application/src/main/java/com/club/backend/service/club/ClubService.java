package com.club.backend.service.club;

import com.club.backend.dto.club.ClubDTO;
import com.club.backend.entity.club.Club;
import com.club.backend.entity.club.Type;
import com.club.backend.repository.club.ClubRepository;
import com.club.backend.repository.club.ModalRepository;
import com.club.backend.repository.club.PropertyRepository;
import com.club.backend.repository.club.TypeRepository;
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
    private TypeRepository typeRepository;

    public ClubDTO getClubsByFieldId(int fieldId) {
        Type type = typeRepository.findById(fieldId)
                .orElseThrow(() -> new EntityNotFoundException("Not Found Id"));

        List<Club> clubs = clubRepository.findByType(type);

        return (ClubDTO) clubs.stream()
                .map(club -> convertToClubDTO(club, type.getField()))
                .collect(Collectors.toList());
    }

    private ClubDTO convertToClubDTO(Club club, String typeName) {
        ClubDTO dto = new ClubDTO();
        dto.setClubId(club.getClubId());
        dto.setClubName(club.getClubName());
        dto.setTypeName(typeName);
        return dto;
    }
}
