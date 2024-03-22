// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
package com.club.backend.repository.join;

import com.club.backend.entity.join.JoinModal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JoinModalRepository extends JpaRepository<JoinModal, Integer> {
}
