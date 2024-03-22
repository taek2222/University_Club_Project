// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
package com.club.backend.service.join;

import com.club.backend.entity.join.Term;
import org.springframework.stereotype.Service;

import java.time.temporal.ChronoUnit;

@Service
public class TermService {

    public String calculate(Term term) {
        long daysBetween = ChronoUnit.DAYS.between(term.getStartDate(), term.getEndDate());

        return "D-" + daysBetween;
    }
}
