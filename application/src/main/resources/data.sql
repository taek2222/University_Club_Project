-- TYPE 데이터
INSERT INTO TYPE (field) VALUES ('공연');
INSERT INTO TYPE (field) VALUES ('체육');
INSERT INTO TYPE (field) VALUES ('취미');
INSERT INTO TYPE (field) VALUES ('종교');
INSERT INTO TYPE (field) VALUES ('봉사');

-- 동아리
INSERT INTO CLUB (club_name, field_id) VALUES ('총동연', 1);

-- 동아리 속성
INSERT INTO PROPERTY (club_id, initial_likes) VALUES (1, 82);

-- 동아리 태그
INSERT INTO PROPERTY_TAGS (property_club_id, tags) VALUES (1, '농담'), (1, '한국');
