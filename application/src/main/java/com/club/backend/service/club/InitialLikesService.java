// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
package com.club.backend.service.club;

import com.club.backend.entity.club.InitialLikes;
import com.club.backend.repository.club.InitialLikesRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class InitialLikesService {
    private final InitialLikesRepository initialLikesRepository;

    public int likesUp(int clubId) {
        InitialLikes initialLikes = initialLikesRepository.findById(clubId)
                .orElseThrow(() -> new EntityNotFoundException("[Like] (Up) Not Found Id: " + clubId));

        initialLikes.setInitialLikes(initialLikes.getInitialLikes() + 1);
        initialLikesRepository.save(initialLikes);
        return initialLikes.getInitialLikes();
    }

    public int likesDown(int clubId) {
        InitialLikes initialLikes = initialLikesRepository.findById(clubId)
                .orElseThrow(() -> new EntityNotFoundException("[Like] (Down) Not Found Id: " + clubId));

        initialLikes.setInitialLikes(initialLikes.getInitialLikes() - 1);
        initialLikesRepository.save(initialLikes);
        return initialLikes.getInitialLikes();
    }
}
