-- TYPE 데이터
INSERT INTO TYPE (field) VALUES ('공연');
INSERT INTO TYPE (field) VALUES ('체육');
INSERT INTO TYPE (field) VALUES ('취미');
INSERT INTO TYPE (field) VALUES ('종교');
INSERT INTO TYPE (field) VALUES ('봉사');
INSERT INTO TYPE (field) VALUES ('총동연');

-- 동아리
INSERT INTO CLUB (club_name, type_id) VALUES ('총동연', 6);

INSERT INTO CLUB (club_name, type_id) VALUES ('루시우스', 1);
INSERT INTO CLUB (club_name, type_id) VALUES ('페르마타', 1);
INSERT INTO CLUB (club_name, type_id) VALUES ('프레이즈', 1);
INSERT INTO CLUB (club_name, type_id) VALUES ('OST', 1);
INSERT INTO CLUB (club_name, type_id) VALUES ('뉴를리', 1);

INSERT INTO CLUB (club_name, type_id) VALUES ('스핀', 2);
INSERT INTO CLUB (club_name, type_id) VALUES ('에이스', 2);
INSERT INTO CLUB (club_name, type_id) VALUES ('핀액션', 2);
INSERT INTO CLUB (club_name, type_id) VALUES ('홀인원', 2);
INSERT INTO CLUB (club_name, type_id) VALUES ('브레맨4기', 2);

INSERT INTO CLUB (club_name, type_id) VALUES ('해시태그', 3);
INSERT INTO CLUB (club_name, type_id) VALUES ('팔레트', 3);
INSERT INTO CLUB (club_name, type_id) VALUES ('보드홀릭', 3);
INSERT INTO CLUB (club_name, type_id) VALUES ('택더빌', 3);
INSERT INTO CLUB (club_name, type_id) VALUES ('GWG', 3);

INSERT INTO CLUB (club_name, type_id) VALUES ('CCC', 4);
INSERT INTO CLUB (club_name, type_id) VALUES ('JDM', 4);

INSERT INTO CLUB (club_name, type_id) VALUES ('RCY', 5);

-- 동아리 속성
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (1, 82, 'main.JPG', 'icon.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (2, 83, 'feed_test.png', 'feed_test.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (3, 87, 'feed_test.png', 'feed_test.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (4, 87, 'feed_test.png', 'feed_test.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (5, 87, 'feed_test.png', 'feed_test.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (6, 87, 'feed_test.png', 'feed_test.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (7, 87, 'feed_test.png', 'feed_test.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (8, 87, 'feed_test.png', 'feed_test.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (9, 87, 'feed_test.png', 'feed_test.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (10, 87, 'feed_test.png', 'feed_test.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (11, 87, 'feed_test.png', 'feed_test.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (12, 87, 'feed_test.png', 'feed_test.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (13, 87, 'feed_test.png', 'feed_test.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (14, 87, 'feed_test.png', 'feed_test.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (15, 87, 'feed_test.png', 'feed_test.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (16, 87, 'feed_test.png', 'feed_test.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (17, 87, 'feed_test.png', 'feed_test.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (18, 87, 'feed_test.png', 'feed_test.png');
INSERT INTO PROPERTY (club_id, initial_likes, image_url, icon_url) VALUES (19, 87, 'feed_test.png', 'feed_test.png');

-- 동아리 태그
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (1, '농담'), (1, '한국');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (2, '테스트1'), (2, '테스트2');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (3, '테스트2'), (3, '테스트2');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (4, '테스트1'), (4, '테스트2');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (5, '테스트2'), (5, '테스트2');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (6, '테스트1'), (6, '테스트2');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (7, '테스트2'), (7, '테스트2');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (8, '테스트1'), (8, '테스트2');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (9, '테스트2'), (9, '테스트2');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (10, '테스트1'), (10, '테스트2');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (11, '테스트2'), (11, '테스트2');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (12, '테스트1'), (12, '테스트2');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (13, '테스트2'), (13, '테스트2');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (14, '테스트1'), (14, '테스트2');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (15, '테스트2'), (15, '테스트2');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (16, '테스트1'), (16, '테스트2');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (17, '테스트2'), (17, '테스트2');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (18, '테스트1'), (18, '테스트2');
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (19, '테스트2'), (19, '테스트2');

-- 동아리 모달
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (1, '아아아아아', '실험 테스트');
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (2, '테스트_제목', '테스트_내용');
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (3, '테스트_제목', '테스트_내용');
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (4, '테스트_제목', '테스트_내용');
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (5, '테스트_제목', '테스트_내용');
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (6, '테스트_제목', '테스트_내용');
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (7, '테스트_제목', '테스트_내용');
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (8, '테스트_제목', '테스트_내용');
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (9, '테스트_제목', '테스트_내용');
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (10, '테스트_제목', '테스트_내용');
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (11, '테스트_제목', '테스트_내용');
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (12, '테스트_제목', '테스트_내용');
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (13, '테스트_제목', '테스트_내용');
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (14, '테스트_제목', '테스트_내용');
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (15, '테스트_제목', '테스트_내용');
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (16, '테스트_제목', '테스트_내용');
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (17, '테스트_제목', '테스트_내용');
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (18, '테스트_제목', '테스트_내용');
INSERT INTO MODAL (club_id, modal_contents, modal_title) values (19, '테스트_제목', '테스트_내용');

-- 동아리 모달 이미지
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (1, '1_1.JPG'), (1, '1_2.JPG'), (1, '1_3.JPG');
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (2, '0_1.png');
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (3, '0_1.png');
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (4, '0_1.png');
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (5, '0_1.png');
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (6, '0_1.png');
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (7, '0_1.png');
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (8, '0_1.png');
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (9, '0_1.png');
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (10, '0_1.png');
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (11, '0_1.png');
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (12, '0_1.png');
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (13, '0_1.png');
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (14, '0_1.png');
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (15, '0_1.png');
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (16, '0_1.png');
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (17, '0_1.png');
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (18, '0_1.png');
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (19, '0_1.png');

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
