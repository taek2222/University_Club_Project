package com.club.backend.service.club;

import com.club.backend.dto.club.PerformanceDTO;
import com.club.backend.entity.club.Club;
import com.club.backend.entity.club.Performance;
import com.club.backend.repository.club.ClubRepository;
import com.club.backend.repository.club.PerformanceRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PerformanceService {
    private final ClubRepository clubRepository;
    private final PerformanceRepository performanceRepository;

    public List<PerformanceDTO> getAllSchedules() {
        List<Performance> schedules = performanceRepository.findAll();

        return schedules.stream().map(schedule -> {
            Club club = clubRepository.findById(schedule.getClub().getClubId())
                    .orElseThrow(() -> new EntityNotFoundException("Club not found for club id: " + schedule.getClub().getClubId()));

            PerformanceDTO performanceDTO = new PerformanceDTO();

            performanceDTO.setClubId(schedule.getClub().getClubId());
            performanceDTO.setClubName(schedule.getClub().getClubName());
            performanceDTO.setField(schedule.getClub().getType().getField());
            performanceDTO.setIconUrl(schedule.getIconUrl());
            performanceDTO.setImageUrl(schedule.getImageUrl());
            performanceDTO.setPart(schedule.getPart());
            performanceDTO.setEventTime(schedule.getEventTime());
            return performanceDTO;
        }).collect(Collectors.toList());
    }
}
