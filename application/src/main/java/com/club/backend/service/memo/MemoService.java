package com.club.backend.service.memo;

import com.club.backend.dto.memo.MemoDTO;
import com.club.backend.entity.memo.Memo;

import java.util.List;
import java.util.Optional;

public interface MemoService {
    Optional<Memo> saveMemo(MemoDTO memoDTO);

    List<Memo> getAllConfirmedMemos();

    String cacheReset();
}
