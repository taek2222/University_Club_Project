package com.club.backend.entity.schedule;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "schedule")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long scheduleId;

    @Column(name="part")
    private String part;

    @Column(name="event_title")
    private String eventTitle;

    @Column(name="club_name")
    private String clubName;

    @Column(name="tag")
    private String tag;

    @Column(name="event_time")
    private LocalDateTime eventTime;

    @Column(name="icon_url")
    private String iconUrl;
}
