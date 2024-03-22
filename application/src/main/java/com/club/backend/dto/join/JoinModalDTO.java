// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
package com.club.backend.dto.join;

import lombok.Data;

import java.util.List;

@Data
public class JoinModalDTO {
    private List<String> modalImage; // 모달 이미지
    private String modalContents; // 모달 내용
    private List<String> joinUrl; // 모달 Url
}
