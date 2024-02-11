package com.club.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Club {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String clubName; // 이름

    @ElementCollection
    private List<String> tags; // 태그

    private int initialLikes; // 좋아요 수

    private String imageUrl; // 배너 이미지

    private String iconUrl; // 아이콘 이미지

    private String modalTitle; // 모달 제목

    private String modalContents; // 모달 내용

    @ElementCollection
    private List<String> modalImage; // 모달 이미지
}
