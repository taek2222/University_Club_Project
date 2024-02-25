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
INSERT INTO MODAL_MODAL_IMAGE (modal_club_id, modal_url) values (1, 'http://'), (1, 'hhttt');