package com.club.backend.repository.club;

import com.club.backend.entity.club.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PerformanceRepository extends JpaRepository<Schedule, Integer> {
}
