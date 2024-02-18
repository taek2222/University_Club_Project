package com.club.backend.controller;

import com.club.backend.dto.memo.MemoDTO;
import com.club.backend.entity.memo.Memo;
import com.club.backend.service.memo.MemoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/memos")
public class MemoController {
    private final MemoService memoService;

    @GetMapping("/all")
    public ResponseEntity<List<Memo>> getAllMemos() {
        List<Memo> memos = memoService.getAllMemos();
        return ResponseEntity.ok().body(memos);
    }

    @PostMapping("/memo")
    public ResponseEntity<Memo> createMemo(@RequestBody MemoDTO memoDTO) {
        return memoService.saveMemo(memoDTO)
                .map(post -> ResponseEntity.ok().body(post))
                .orElse(ResponseEntity.badRequest().build());
    }
}
