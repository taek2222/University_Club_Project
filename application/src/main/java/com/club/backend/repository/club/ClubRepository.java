// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
package com.club.backend.repository.club;

import com.club.backend.entity.club.Club;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClubRepository extends JpaRepository<Club, Integer> {
    @EntityGraph(attributePaths = {"type"})
    List<Club> findAll();
    List<Club> findByType_TypeId(int typeId);
}
