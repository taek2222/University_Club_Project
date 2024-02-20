package com.club.backend.entity.club;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
public class Name {
    @Id
    @Column(name="club_name")
    private String clubName;

    @Column(name="field")
    private String field;
}
