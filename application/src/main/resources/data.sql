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
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (1, '안녕하세요, 강릉원주대학교 동아리 연합회입니다! 우리 캠퍼스의 다양한 동아리들을 한눈에 볼 수 있는 특별한 기회, 동아리 부스 행사가 곧 열립니다! 새학기를 맞이하여, 새로운 사람들을 만나고, 다양한 동아리를 경험하고 싶은 분들을 위한 완벽한 기회입니다. 🎈\n \n *📅 행사 일시:* \n2024년 3월 15일 (금) 10:00 ~ 16:00\n \n *📍장소:* 대학교 중앙 광장\n \n *🎪 행사 내용:* \n동아리 소개 부스: 각 동아리의 활동 내용, 연간 계획, 가입 방법 등을 소개합니다.\n라이브 공연: 음악, 댄스, 극단 동아리들의 생동감 넘치는 라이브 공연을 즐길 수 있습니다.\n체험 활동: 다양한 동아리가 준비한 체험 활동을 통해 새로운 취미와 재능을 발견해 보세요.\nQ&A 세션: 동아리 회원들과 직접 대화하며 궁금한 점을 해소할 수 있습니다.\n \n*👥 참가 방법:*\n사전 등록: 행사 참여를 원하시는 분들은 사전에 대학교 동아리 연합회 홈페이지를 통해 등록해 주세요. 사전 등록자에게는 소정의 기념품을 드립니다!\n현장 참여: 사전 등록 없이 행사 당일 현장을 방문하여 참여할 수도 있습니다.\n \n*🎁 특별 이벤트:* \n인스타그램 이벤트: 행사 당일 #대학교동아리연합회 해시태그와 함께 인스타그램에 사진을 올리면 추첨을 통해 소정의 상품을 드립니다.\n스탬프 랠리: 행사 참여 동아리 부스를 방문하고 스탬프를 모으세요! 모든 스탬프를 모은 참가자에게는 특별한 선물이 기다립니다.\n \n*🔔 주의 사항:*\n모든 참가자는 행사장 내에서 마스크 착용을 비롯한 코로나19 방역 수칙을 준수해 주시기 바랍니다.\n행사장 내에서는 음식물 섭취가 제한됩니다.\n \n이번 동아리 부스 행사는 여러분이 새로운 사람들을 만나고, 관심 있는 분야를 탐색할 수 있는 절호의 기회입니다. 다양한 동아리와 그 멤버들과의 만남을 통해 대학 생활을 더욱 풍부하게 만들어 보세요! 우리 모두 그날 광장에서 만나요! 🎊', '⭐️총동연⭐️', '0_map.png');
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (2, '테스트_제목', '테스트_내용', '0_map.png');
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (3, '테스트_제목', '테스트_내용', '0_map.png');
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (4, '테스트_제목', '테스트_내용', '0_map.png');
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (5, '테스트_제목', '테스트_내용', '0_map.png');
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (6, '테스트_제목', '테스트_내용', '0_map.png');
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (7, '테스트_제목', '테스트_내용', '0_map.png');
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (8, '테스트_제목', '테스트_내용', '0_map.png');
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (9, '테스트_제목', '테스트_내용', '0_map.png');
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (10, '테스트_제목', '테스트_내용', '0_map.png');
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (11, '테스트_제목', '테스트_내용', '0_map.png');
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (12, '테스트_제목', '테스트_내용', '0_map.png');
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (13, '테스트_제목', '테스트_내용', '0_map.png');
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (14, '테스트_제목', '테스트_내용', '0_map.png');
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (15, '테스트_제목', '테스트_내용', '0_map.png');
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (16, '테스트_제목', '테스트_내용', '0_map.png');
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (17, '테스트_제목', '테스트_내용', '0_map.png');
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (18, '테스트_제목', '테스트_내용', '0_map.png');
INSERT INTO MODAL (club_id, modal_contents, modal_title, modal_location_url) values (19, '테스트_제목', '테스트_내용', '0_map.png');

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
