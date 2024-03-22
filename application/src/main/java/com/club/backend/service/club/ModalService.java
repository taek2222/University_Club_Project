// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
package com.club.backend.service.club;

import com.club.backend.dto.club.ModalDTO;
import com.club.backend.entity.club.Modal;
import com.club.backend.repository.club.ModalRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ModalService {
    private final ModalRepository modalRepository;
    private final ScheduleService scheduleService;

    public ModalDTO getClubModalSearch(int clubId) {
        Modal modal = modalRepository.findById(clubId).orElseThrow(() -> new EntityNotFoundException("Not Found ClubId " + clubId));
        ModalDTO dto = new ModalDTO();

        // Modal
        dto.setModalTitle(modal.getModalTitle());
        dto.setModalContents(modal.getModalContents());
        dto.setModalImage(modal.getModalImage());
        dto.setModalLocationImage(modal.getModalLocationImage());

        // Schedule
        dto.setScheduleUse(scheduleService.ScheduleUse(clubId));
        return dto;
    }
}
