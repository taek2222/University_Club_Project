package com.club.backend.service.memo;

import com.club.backend.dto.memo.MemoDTO;
import com.club.backend.entity.memo.Memo;
import com.club.backend.repository.memo.MemoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemoServiceImpl implements MemoService {
    private final MemoRepository memoRepository;

    @Override
    public Optional<Memo> saveMemo(MemoDTO memoDTO) {
        Memo memo = new Memo();
        memo.setMajor(memoDTO.getMajor());
        memo.setClassOf(memoDTO.getClassOf());
        memo.setStudentName(memoDTO.getStudentName());
        memo.setContent(memoDTO.getContent());

        return Optional.ofNullable(memoRepository.save(memo));
    }
}
