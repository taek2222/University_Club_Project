package com.club.backend.service.memo;

import com.club.backend.dto.memo.MemoDTO;
import com.club.backend.entity.memo.Memo;
import com.club.backend.repository.memo.MemoRepository;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.Cascade;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
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
        memo.setAnonymous(memoDTO.getAnonymous());
        memo.setStudentName(memoDTO.getStudentName());
        memo.setContent(memoDTO.getContent());
        memo.setColor(memoDTO.getColor());
        memo.setConfirm(memoDTO.getConfirm());

        return Optional.ofNullable(memoRepository.save(memo));
    }

    @Override
    @Cacheable(value = "memoAllCache")
    public List<Memo> getAllConfirmedMemos() {
        return memoRepository.findByConfirm(true);
    }

    @Override
    @CacheEvict(value = "memoAllCache", allEntries = true)
    public String cacheReset() {
        return "Cache is reset";
    }
}
