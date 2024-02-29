package com.club.backend.service.club;
import com.club.backend.dto.club.InitialLikesDTO;
import com.club.backend.entity.club.InitialLikes;
import com.club.backend.repository.club.InitialLikesRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InitialLikesService {
    @Autowired
    private InitialLikesRepository initialLikesRepository;

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
