package com.club.backend.entity.join;

import com.club.backend.entity.club.Club;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class JoinModal {
    @Id
    @Column(name="club_id")
    private int clubId;

    @Column(name="modal_image")
    @ElementCollection
    private List<String> modalImage;

    @Column(name="modal_contents")
    @Lob
    private String modalContents;

    @Column(name = "join_url")
    @ElementCollection
    private List<String> joinUrl;

    @OneToOne
    @MapsId
    @JoinColumn(name="club_id")
    private Club club;
}
