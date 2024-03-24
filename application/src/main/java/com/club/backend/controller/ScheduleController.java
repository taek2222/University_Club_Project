package com.club.backend.controller;

import com.club.backend.dto.club.ScheduleDTO;
import com.club.backend.service.club.ScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/schedules")
public class ScheduleController {
    private final ScheduleService scheduleService;

    @GetMapping("/all")
    public List<ScheduleDTO> getAllSchedules() {
        return scheduleService.getAllSchedules();
    }

    @GetMapping("/modal/{clubId}")
    public List<ScheduleDTO> getBySchedules(@PathVariable("clubId") int clubId) {
        return scheduleService.getBySchedules(clubId);
    }
}
