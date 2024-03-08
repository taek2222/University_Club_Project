package com.club.backend.dto.club;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ScheduleDTO {
    private int scheduleId;
    private int clubId;
    private String clubName;
    private String field;
    private String iconImage;
    private String part;
    private LocalDateTime eventTime;
}
