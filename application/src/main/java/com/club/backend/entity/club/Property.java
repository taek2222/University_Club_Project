package com.club.backend.entity.club;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table
public class Property {

    @Id
    private String clubName;

    @ElementCollection
    @Column(name="tags")
    private List<String> tags;

    @Column(name="initial_likes")
    private int initialLikes;

    @Column(name="image_url")
    private String imageUrl;

    @Column(name="icon_url")
    private String iconUrl;

    @OneToOne
    @JoinColumn(name = "clubName", referencedColumnName = "club_name")
    private Name name;
}
