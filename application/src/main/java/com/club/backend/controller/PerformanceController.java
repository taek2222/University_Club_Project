package com.club.backend.controller;

import com.club.backend.dto.club.PerformanceDTO;
import com.club.backend.service.club.PerformanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/schedules")
public class PerformanceController {
    private final PerformanceService performanceService;

    @GetMapping("/all")
    public List<PerformanceDTO> getAllSchedules() {
        return performanceService.getAllSchedules();
    }
}
