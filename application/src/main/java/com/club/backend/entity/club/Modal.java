package com.club.backend.entity.club;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table
public class Modal {

    @Id
    private String clubName;

    @Column(name="modal_title")
    private String modalTitle;

    @Column(name="modal_contents")
    private String modalContents;

    @ElementCollection
    @Column(name="modal_url")
    private List<String> modalImage;

    @OneToOne
    @JoinColumn(name = "clubName", referencedColumnName = "club_name")
    private Name name;
}
