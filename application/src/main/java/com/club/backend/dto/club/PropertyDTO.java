// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
package com.club.backend.dto.club;

import lombok.Data;

import java.util.List;

@Data
public class PropertyDTO {
    private int clubId;
    private List<String> tags;
    private int initialLikes;
    private String imageUrl;
    private String iconUrl;
}
