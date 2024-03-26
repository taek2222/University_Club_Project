// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
package com.club.backend.service.join;

import com.club.backend.entity.join.Term;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@Service
public class TermService {

    public String calculate(Term term) {
        LocalDate currentDate = LocalDate.now();
        LocalDate endDate = term.getEndDate();

        if (endDate.equals(LocalDate.of(2025, 1, 1)))
            return "상시 모집";

        long daysBetween = ChronoUnit.DAYS.between(currentDate, endDate);

        return "D-" + daysBetween;
    }
}
