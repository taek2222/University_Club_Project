package com.club.backend.entity.club;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Type {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int fieldId;

    @Column(name="field")
    private String field;
}
