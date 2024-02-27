package com.club.backend.entity.club;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Modal {
    @Id
    @Column(name="club_id")
    private int clubId;

    @Column(name="modal_title")
    private String modalTitle;

    @Column(name="modal_contents")
    @Lob
    private String modalContents;

    @ElementCollection
    @Column(name="modal_url")
    private List<String> modalImage;

    @Column(name="modal_location_url")
    private String modalLocationImage;

    @OneToOne
    @MapsId
    @JoinColumn(name="club_id")
    private Club club;
}
