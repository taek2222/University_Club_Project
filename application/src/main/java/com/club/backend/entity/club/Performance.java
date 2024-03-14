package com.club.backend.entity.club;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Entity
@Table(name = "performance")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Performance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int performanceId;

    @ManyToOne
    @JoinColumn(name = "club_id")
    private Club club;

    @Column(name = "part")
    private String part;

    @Column(name="icon_url")
    private String iconUrl;

    @Column(name="image_url")
    private String imageUrl;

    @Column(name = "event_time")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime eventTime;
}
