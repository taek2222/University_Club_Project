// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
package com.club.backend.dto.club;

import lombok.Data;

@Data
public class InitialLikesDTO {
    private int clubId;
    private int initialLikes;
    private Boolean isLiked;
}