package com.club.backend.service.club;

import com.club.backend.dto.club.ModalDTO;
import com.club.backend.entity.club.Modal;
import com.club.backend.repository.club.ModalRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ModalService {
    @Autowired
    private ModalRepository modalRepository;

    public ModalDTO getClubModalSearch(int clubId) {
        Modal modal = modalRepository.findById(clubId).orElseThrow(() -> new EntityNotFoundException("Not Found ClubId " + clubId));
        ModalDTO dto = new ModalDTO();

        dto.setModalTitle(modal.getModalTitle());
        dto.setModalContents(modal.getModalContents());
        dto.setModalImage(modal.getModalImage());
        dto.setModalLocationImage(modal.getModalLocationImage());
        return dto;
    }
}
