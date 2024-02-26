-- TYPE 데이터
INSERT INTO TYPE (field) VALUES ('공연');
INSERT INTO TYPE (field) VALUES ('체육');
INSERT INTO TYPE (field) VALUES ('취미');
INSERT INTO TYPE (field) VALUES ('종교');
INSERT INTO TYPE (field) VALUES ('봉사');

-- 동아리
INSERT INTO CLUB (club_name, type_id) VALUES ('총동연', 1);
INSERT INTO CLUB (club_name, type_id) VALUES ('해시태그', 1);
INSERT INTO CLUB (club_name, type_id) VALUES ('페르마타', 1);

-- 동아리 속성
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (1, 82, 'main.JPG', 'icon.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (2, 83, 'feed_test.png', 'feed_test.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (3, 87, 'feed_test.png', 'feed_test.png');

-- 동아리 태그
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (1, '농담'), (1, '한국');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (2, '농2담'), (2, '한2국');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (3, '농2담'), (3, '한2국');

-- 동아리 모달
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (1, '아아아아아', '실험 테스트');

-- 동아리 모달 이미지
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (1, '1_1.JPG'), (1, '1_2.JPG'), (1, '1_3.JPG');

-- 메모 실험용 데이터
INSERT INTO memo (memo_id, major, class_of, student_name, content) values (1, '컴퓨터공학과', '20191758', '유재현', '해시태그 화이팅!');
INSERT INTO memo (memo_id, major, class_of, student_name, content) values (2, '유아교육과', '10000000', '카리나', '응원문구 테스트1');
INSERT INTO memo (memo_id, major, class_of, student_name, content) values (3, '간호학과', '20000000', '윈터', '응원문구 테스트2');
INSERT INTO memo (memo_id, major, class_of, student_name, content) values (4, '산업경영공학과', '30000000', '지젤', '응원문구 테스트3');
INSERT INTO memo (memo_id, major, class_of, student_name, content) values (5, '자동차공학과', '40000000', '닝닝', '응원문구 테스트4');
INSERT INTO memo (memo_id, major, class_of, student_name, content) values (6, '기계공학과', '50000000', '김채원', '응원문구 테스트5');
INSERT INTO memo (memo_id, major, class_of, student_name, content) values (7, '사회복지학과', '60000000', '카즈하', '응원문구 테스트6');
INSERT INTO memo (memo_id, major, class_of, student_name, content) values (8, '전기공학과', '70000000', '홍은채', '응원문구 테스트7');
INSERT INTO memo (memo_id, major, class_of, student_name, content) values (9, '다문화학과', '80000000', '장원영', '응원문구 테스트8');
INSERT INTO memo (memo_id, major, class_of, student_name, content) values (10, '멀티미디어학과', '90000000', '안유진', '응원문구 테스트9');
