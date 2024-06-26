package com.club.backend.controller;

import com.club.backend.dto.memo.MemoDTO;
import com.club.backend.entity.memo.Memo;
import com.club.backend.service.memo.MemoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/memos")
public class MemoController {
    private final MemoService memoService;

    @GetMapping("/confirmed")
    public ResponseEntity<List<Memo>> getConfirmedMemos() {
        List<Memo> memos = memoService.getAllConfirmedMemos();
        return ResponseEntity.ok().body(memos);
    }

    @GetMapping("/confirmed/cache/reset")
    public String cacheReset() { return memoService.cacheReset(); }

    @PostMapping("/memo")
    public ResponseEntity<Memo> createMemo(@RequestBody MemoDTO memoDTO) {
        return memoService.saveMemo(memoDTO)
                .map(post -> ResponseEntity.ok().body(post))
                .orElse(ResponseEntity.badRequest().build());
    }
}
