package com.club.backend.dto.club;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ScheduleDTO {
    private int performanceId;
    private int clubId;
    private String clubName;
    private String field;
    private String iconUrl;
    private String imageUrl;
    private String part;
    private String category;
    private LocalDateTime eventTime;
}
