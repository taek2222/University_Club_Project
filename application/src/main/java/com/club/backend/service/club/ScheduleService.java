package com.club.backend.service.club;

import com.club.backend.dto.club.ScheduleDTO;
import com.club.backend.entity.club.Schedule;
import com.club.backend.repository.club.ScheduleRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ScheduleService {
    private final ScheduleRepository scheduleRepository;

    @Cacheable(value = "ScheduleAllCache")
    public List<ScheduleDTO> getAllSchedules() {
        List<Schedule> schedules = scheduleRepository.findAll();

        return schedules.stream().map(schedule -> {
            ScheduleDTO scheduleDTO = new ScheduleDTO();

            scheduleDTO.setScheduleId(schedule.getScheduleId());
            scheduleDTO.setClubId(schedule.getClub().getClubId());
            scheduleDTO.setClubName(schedule.getClub().getClubName());
            scheduleDTO.setField(schedule.getClub().getType().getField());
            scheduleDTO.setIconUrl(schedule.getIconUrl());
            scheduleDTO.setImageUrl(schedule.getImageUrl());
            scheduleDTO.setPart(schedule.getPart());
            scheduleDTO.setLocation(schedule.getLocation());
            scheduleDTO.setCategory(schedule.getCategory());
            scheduleDTO.setEventTime(schedule.getEventTime());
            scheduleDTO.setEventEndTime(schedule.getEventEndTime());
            scheduleDTO.setStatus(schedule.getStatus());
            return scheduleDTO;
        }).collect(Collectors.toList());
    }

    public Schedule getScheduleById(int scheduleId) {
        return scheduleRepository.findById(scheduleId).orElse(null);
    }

    @Cacheable(value = "ScheduleCache")
    public List<ScheduleDTO> getBySchedules(int clubId) {
        List<Schedule> schedules = scheduleRepository.findByClub_ClubId(clubId);

        return schedules.stream().map(schedule -> {
            ScheduleDTO scheduleDTO = new ScheduleDTO();

            scheduleDTO.setCategory(schedule.getCategory());
            scheduleDTO.setEventTime(schedule.getEventTime());
            scheduleDTO.setEventEndTime(schedule.getEventEndTime());

            return scheduleDTO;
        }).collect(Collectors.toList());
    }

    public Boolean ScheduleUse(int clubId) {
        return scheduleRepository.existsByClub_ClubId(clubId);
    }

    @CacheEvict(value = {"ScheduleAllCache", "ScheduleCache"}, allEntries = true)
    public ScheduleDTO updateSchedule(int scheduleId, ScheduleDTO scheduleDTO) {
        Schedule schedule = scheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new EntityNotFoundException("Schedule not found"));

        schedule.setPart(scheduleDTO.getPart());
        schedule.setLocation(scheduleDTO.getLocation());
        schedule.setIconUrl(scheduleDTO.getIconUrl());
        schedule.setImageUrl(scheduleDTO.getImageUrl());
        schedule.setCategory(scheduleDTO.getCategory());
        schedule.setEventTime(scheduleDTO.getEventTime());
        schedule.setEventEndTime(scheduleDTO.getEventEndTime());
        schedule.setStatus(scheduleDTO.getStatus());

        scheduleRepository.save(schedule);

        return scheduleDTO;
    }
}
