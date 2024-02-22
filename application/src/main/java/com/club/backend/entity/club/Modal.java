package com.club.backend.entity.club;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Modal {
    @Id
    @Column(name="club_id")
    private int clubId;

    @Column(name="modal_title")
    private String modalTitle;

    @Column(name="modal_contents")
    private String modalContents;

    @ElementCollection
    @Column(name="modal_url")
    private List<String> modalImage;

    @OneToOne
    @MapsId
    @JoinColumn(name="club_id")
    private Club club;
}
