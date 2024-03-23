package com.club.backend.controller;

import com.club.backend.dto.club.ScheduleDTO;
import com.club.backend.entity.club.Schedule;
import com.club.backend.entity.memo.Memo;
import com.club.backend.service.club.ScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/{id}")
    public ResponseEntity<Schedule> getScheduleById(@PathVariable("id") int scheduleId) {
        Schedule schedule = scheduleService.getScheduleById(scheduleId);
        if (schedule != null) {
            return ResponseEntity.ok().body(schedule);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/modal/{clubId}")
    public List<ScheduleDTO> getBySchedules(@PathVariable("clubId") int clubId) {
        return scheduleService.getBySchedules(clubId);
    }

    @PatchMapping("/update/{scheduleId}")
    public ScheduleDTO updateSchedule(@PathVariable(name = "scheduleId") int scheduleId, @RequestBody ScheduleDTO scheduleDTO) {
        return scheduleService.updateSchedule(scheduleId, scheduleDTO);
    }
}
