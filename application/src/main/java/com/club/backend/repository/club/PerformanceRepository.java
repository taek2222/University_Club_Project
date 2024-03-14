package com.club.backend.repository.club;

import com.club.backend.entity.club.Performance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScheduleRepository extends JpaRepository<Performance, Integer> {
}
