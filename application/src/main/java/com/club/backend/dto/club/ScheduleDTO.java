package com.club.backend.dto.club;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class PerformanceDTO {
    private int performanceId;
    private int clubId;
    private String clubName;
    private String field;
    private String iconUrl;
    private String imageUrl;
    private String part;
    private LocalDateTime eventTime;
}
