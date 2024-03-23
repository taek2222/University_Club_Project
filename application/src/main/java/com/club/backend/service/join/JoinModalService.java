// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
package com.club.backend.service.join;

import com.club.backend.dto.join.JoinModalDTO;
import com.club.backend.entity.join.JoinModal;
import com.club.backend.repository.join.JoinModalRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JoinModalService {
    private final JoinModalRepository joinModalRepository;

    @Cacheable(value = "joinModalCache")
    public JoinModalDTO getJoinModalSearch(int clubId) {
        JoinModal joinModal = joinModalRepository.findById(clubId)
                .orElseThrow(() -> new EntityNotFoundException("JoinModal Not Found Club Id " + clubId));
        JoinModalDTO dto = new JoinModalDTO();

        dto.setModalImage(joinModal.getModalImage());
        dto.setModalContents(joinModal.getModalContents());
        dto.setJoinUrl(joinModal.getJoinUrl());

        return dto;
    }
}
