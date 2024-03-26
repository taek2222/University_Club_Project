-- TYPE 데이터
INSERT INTO type (field) VALUES ('공연');
INSERT INTO type (field) VALUES ('체육');
INSERT INTO type (field) VALUES ('취미');
INSERT INTO type (field) VALUES ('종교');
-- 수정
INSERT INTO type (field) VALUES ('기타');
-- 수정
INSERT INTO type (field) VALUES ('학회');

-- 동아리
INSERT INTO club (club_id, club_name, type_id) VALUES (1, '총동연', 6);

INSERT INTO club (club_id, club_name, type_id) VALUES (2, '루시우스', 1);
INSERT INTO club (club_id, club_name, type_id) VALUES (3, '페르마타', 1);
INSERT INTO club (club_id, club_name, type_id) VALUES (4, '프레이즈', 1);
INSERT INTO club (club_id, club_name, type_id) VALUES (5, 'OST', 1);
INSERT INTO club (club_id, club_name, type_id) VALUES (6, '뉴를리', 1);

-- 삭제
INSERT INTO club (club_id, club_name, type_id) VALUES (7, '스핀', 2);
-- INSERT INTO club (club_id, club_name, type_id) VALUES (9,'핀액션', 2);

INSERT INTO club (club_id, club_name, type_id) VALUES (12, '해시태그', 3);
INSERT INTO club (club_id, club_name, type_id) VALUES (14, '보드홀릭', 3);

INSERT INTO club (club_id, club_name, type_id) VALUES (17, 'CCC', 4);
INSERT INTO club (club_id, club_name, type_id) VALUES (18, 'JDM', 4);

INSERT INTO club (club_id, club_name, type_id) VALUES (19, 'GHOST', 5);
INSERT INTO club (club_id, club_name, type_id) VALUES (20, 'ROTC', 5);
-- 추가
INSERT INTO club (club_id, club_name, type_id) VALUES (21, 'EGO', 1);

-- 동아리 속성
INSERT INTO property (club_id, image_url, icon_url) VALUES (1, '1_2.jpeg', '1_1.png');
INSERT INTO property (club_id, image_url, icon_url) VALUES (2, '2_2.jpeg', '2_1.jpeg');
INSERT INTO property (club_id, image_url, icon_url) VALUES (3, 'feed_test.png', 'feed_test.png');
INSERT INTO property (club_id, image_url, icon_url) VALUES (4, 'feed_test.png', 'feed_test.png');
-- 수정
INSERT INTO property (club_id, image_url, icon_url) VALUES (5, '5_2.jpeg', '5_1.png');
INSERT INTO property (club_id, image_url, icon_url) VALUES (6, '6_2.jpeg', '6_1.png');
-- 삭
INSERT INTO property (club_id, image_url, icon_url) VALUES (7, 'feed_test.png', 'feed_test.png');
-- INSERT INTO property (club_id, image_url, icon_url) VALUES (9, 'feed_test.png', 'feed_test.png');
INSERT INTO property (club_id, image_url, icon_url) VALUES (12, '12_2.jpg', '12_1.png');
INSERT INTO property (club_id, image_url, icon_url) VALUES (14, '14_2.jpg', '14_1.png');
INSERT INTO property (club_id, image_url, icon_url) VALUES (17, 'feed_test.png', 'feed_test.png');
INSERT INTO property (club_id, image_url, icon_url) VALUES (18, 'feed_test.png', 'feed_test.png');
INSERT INTO property (club_id, image_url, icon_url) VALUES (19, '19_2.png', '19_1.jpeg');
-- 수정
INSERT INTO property (club_id, image_url, icon_url) VALUES (20, '20_2.png', '20_1.jpeg');
INSERT INTO property (club_id, image_url, icon_url) VALUES (21, '21_2.jpeg', '21_1.png');

-- 동아리 태그
INSERT INTO tags (club_id, tag) VALUES (1, '축제 협회'), (1, '안내 부스');
INSERT INTO tags (club_id, tag) VALUES (2, '대학응원단'), (2, '루시우스');
INSERT INTO tags (club_id, tag) VALUES (3, '테스트2'), (3, '테스트2');
INSERT INTO tags (club_id, tag) VALUES (4, '테스트1'), (4, '테스트2');
-- 수정
INSERT INTO tags (club_id, tag) VALUES (5, '연극'), (5, '뮤지컬');
INSERT INTO tags (club_id, tag) VALUES (6, '댄스동아리'), (6, '뉴를리');
-- 삭제
INSERT INTO tags (club_id, tag) VALUES (7, '테스트2'), (7, '테스트2');
-- INSERT INTO tags (club_id, tag) VALUES (9, '테스트2'), (9, '테제트2');
INSERT INTO tags (club_id, tag) VALUES (12, '사진'), (12, '출사');
INSERT INTO tags (club_id, tag) VALUES (14, '보드게임'), (14, '모두 모여라!');
INSERT INTO tags (club_id, tag) VALUES (17, '테스트2'), (17, '테스트2');
INSERT INTO tags (club_id, tag) VALUES (18, '테스트1'), (18, '테스트2');
INSERT INTO tags (club_id, tag) VALUES (19, '테스트2'), (19, '테스트2');
-- 수정
INSERT INTO tags (club_id, tag) VALUES (20, '사격게임'), (20, '학군단');
INSERT INTO tags (club_id, tag) VALUES (21, '힙합'), (21, '공연');

-- 동아리 모달
INSERT INTO modal (club_id, contents, title, location_url) values (1, '안녕하세요, 강릉원주대학교 동아리 연합회입니다! 우리 캠퍼스의 다양한 동아리들을 한눈에 볼 수 있는 특별한 기회, 동아리 부스 행사가 곧 열립니다! 새학기를 맞이하여, 새로운 사람들을 만나고, 다양한 동아리를 경험하고 싶은 분들을 위한 완벽한 기회입니다. 🎈\n \n *📅 행사 일시:* \n2024년 3월 15일 (금) 10:00 ~ 16:00\n \n *📍장소:* 대학교 중앙 광장\n \n *🎪 행사 내용:* \n동아리 소개 부스: 각 동아리의 활동 내용, 연간 계획, 가입 방법 등을 소개합니다.\n라이브 공연: 음악, 댄스, 극단 동아리들의 생동감 넘치는 라이브 공연을 즐길 수 있습니다.\n체험 활동: 다양한 동아리가 준비한 체험 활동을 통해 새로운 취미와 재능을 발견해 보세요.\nQ&A 세션: 동아리 회원들과 직접 대화하며 궁금한 점을 해소할 수 있습니다.\n \n*👥 참가 방법:*\n사전 등록: 행사 참여를 원하시는 분들은 사전에 대학교 동아리 연합회 홈페이지를 통해 등록해 주세요. 사전 등록자에게는 소정의 기념품을 드립니다!\n현장 참여: 사전 등록 없이 행사 당일 현장을 방문하여 참여할 수도 있습니다.\n \n*🎁 특별 이벤트:* \n인스타그램 이벤트: 행사 당일 #대학교동아리연합회 해시태그와 함께 인스타그램에 사진을 올리면 추첨을 통해 소정의 상품을 드립니다.\n스탬프 랠리: 행사 참여 동아리 부스를 방문하고 스탬프를 모으세요! 모든 스탬프를 모은 참가자에게는 특별한 선물이 기다립니다.\n \n*🔔 주의 사항:*\n모든 참가자는 행사장 내에서 마스크 착용을 비롯한 코로나19 방역 수칙을 준수해 주시기 바랍니다.\n행사장 내에서는 음식물 섭취가 제한됩니다.\n \n이번 동아리 부스 행사는 여러분이 새로운 사람들을 만나고, 관심 있는 분야를 탐색할 수 있는 절호의 기회입니다. 다양한 동아리와 그 멤버들과의 만남을 통해 대학 생활을 더욱 풍부하게 만들어 보세요! 우리 모두 그날 광장에서 만나요! 🎊', '⭐️총동연⭐️', '1_map.png');
INSERT INTO modal (club_id, contents, title) values (2, '안녕하세요! 👋 \n 치어리딩 동아리 *''루시우스''* 입니다! \n \n 이번에 신입단원과 함께 한 페이지가 될 수 있게 곡을 치어리딩으로 변화시켜 준비했습니다! \n \n 부족한 점이 있을 수도 있겠지만 24년도 첫 무대인 만큼 많은 호응과 격려, 관심 부탁드립니다 ✨ \n \n  공연 일정은 아래 *🗓️행사 일정*을 참고해주세요! \n \n  감사합니다 👋 ', '🎈 치어리딩 루시우스 공연 많관부 🤍');
INSERT INTO modal (club_id, contents, title) values (3, '테스트_제목', '테스트_내용');
INSERT INTO modal (club_id, contents, title, location_url) values (4, '테스트_제목', '테스트_내용', '4_map.png');
-- 수정
INSERT INTO modal (club_id, contents, title, location_url) values (5, '', '테스트_내용', '5_map.png');
INSERT INTO modal (club_id, contents, title) values (6, '안녕하세요.👋 \n 강릉원주대학교 원주캠퍼스 댄스동아리 *''뉴를리''* 입니다. \n \n 저희가 이번 2024 동아리 홍보제에서 총 *2곡*을 준비했는데요! \n \n 부족하더라도 열심히 준비했으니까 \n *많은 관심 부탁드립니다!❤️‍🔥* \n \n *‼️포스터는 ''뉴를리''를 참고해주세요!*', '💫댄스동아리 뉴를리 공연💫');
-- 삭제
INSERT INTO modal (club_id, contents, title, location_url) values (7, '테스트_제목', '테스트_내용', '7_map.png');
-- INSERT INTO modal (club_id, contents, title, location_url) values (9, '테스트_제목', '테스트_내용', '9_map.png');
INSERT INTO modal (club_id, contents, title, location_url) values (12, '안녕하세요! 사진 동아리 *''해시태그''*입니다! \n \n *🎈행사 내용* \n 해시태그가 찍은 학교 속 사진과 같은 장소를 찾아 사진을 찍어오기! \n \n 학교 예시 사진은 부스에서 보실 수 있습니다! \n \n 찍어오신 사진 & 사진첩의 원하는 사진을 인화해 드립니다!', '📸 순간포착 학교에 이런곳이?!', '12_map.png');
INSERT INTO modal (club_id, contents, title, location_url) values (14, '안녕하세요! \n 강릉원주대학교 동아리 *''보드홀릭''*입니다! \n \n 저희 동아리 부스 행사에 참여하셔서 준비한 게임 \n *🕹️복불복 꼬치의 달인* \n *🕹악어 룰렛* \n *🕹카지노 블랙잭* \n 체험하고 가세요! \n \n *🍯 꿀잼* 보장합니다! \n 감사합니다. 👋', '🎲 보드홀릭 🧩', '14_map.png');
INSERT INTO modal (club_id, contents, title, location_url) values (17, '테스트_제목', '테스트_내용', '17_map.png');
INSERT INTO modal (club_id, contents, title, location_url) values (18, '테스트_제목', '테스트_내용', '18_map.png');
INSERT INTO modal (club_id, contents, title, location_url) values (19, '테스트_제목', '테스트_내용', '19_map.png');
-- 수정
INSERT INTO modal (club_id, contents, title, location_url) values (20, '안녕하세요! 🎯 \n *ROTC* 사격부스에서 여러분을 초대합니다! \n \n 군인이라는 딱딱한 이미지를 벗어던지고, 친근하게 다가가기 위해 준비했어요. \n \n *사격 체험과 함께 다양한 상품도 준비되어 있으니까 친구들과 잊지 못할 추억을 만들어 보세요! 🌟* \n \n 여러분의 많은 참여를 기다리고 있습니다! 사격부스에서 새로운 경험을 통해 즐거운 시간을 보내세요! 🌈 \n \n 👋 감사합니다.', '🎈ROTC 사격 게임🔫', '20_map.png');
INSERT INTO modal (club_id, contents, title) values (21, '📣 안녕하세요! \n \n 강릉원주대학교 힙합동아리 *''EGO''*의 홍보제 공연 정보를 알려드립니다. \n \n *✔️ 공연 상세 정보* \n 1️⃣공연 일시 : 4월 3일 (수) \n 2️⃣공연 장소 : 연화홀 \n 3️⃣공연 곡 목록: \n *🎤be! - sokodomo* \n *🎤밤에 들어갈게 – GIRIBOY* \n *🎤윈윈 – Huh* \n *🎤흔들리며 피는 꽃 – Clloud* \n \n 포스터는 일정란에 EGO 포스터도 참고해 주세요! ', '🎤EGO');

-- 동아리 모달 이미지
INSERT INTO modal_image (club_id, url) values (1, '1_1.JPG'), (1, '1_2.JPG'), (1, '1_3.jpeg'), (1, '1_4.jpeg');
INSERT INTO modal_image (club_id, url) values (2, '2_1.jpeg'), (2, '2_2.jpeg'), (2, '2_3.jpeg');
INSERT INTO modal_image (club_id, url) values (3, '0_1.png');
INSERT INTO modal_image (club_id, url) values (4, '0_1.png');
--수정
INSERT INTO modal_image (club_id, url) values (5, '5_1.jpeg'), (5, '5_2.jpeg'), (5, '5_3.jpeg'), (5, '5_4.png');
INSERT INTO modal_image (club_id, url) values (6, '6_1.jpeg'), (6, '6_2.jpeg');
-- 삭제
INSERT INTO modal_image (club_id, url) values (7, '0_1.png');
-- INSERT INTO modal_image (club_id, url) values (9, '0_1.png');
-- 수정
INSERT INTO modal_image (club_id, url) values (12, '12_1.jpg'), (12, '12_2.jpeg'), (12, '12_3.jpeg'), (12, '12_4.jpeg'), (12, '12_5.jpeg');
INSERT INTO modal_image (club_id, url) values (14, '14_1.jpg');
INSERT INTO modal_image (club_id, url) values (17, '0_1.png');
INSERT INTO modal_image (club_id, url) values (18, '0_1.png');
INSERT INTO modal_image (club_id, url) values (19, '0_1.png');
-- 수정
INSERT INTO modal_image (club_id, url) values (20, '20_1.jpeg'), (20, '20_2.jpeg'), (20, '20_3.jpeg');
INSERT INTO modal_image (club_id, url) values (21, '21_1.jpeg'), (21, '21_2.jpeg'), (21, '21_3.jpeg');

-- 동아리 좋아요 수
INSERT INTO initial_likes(club_id, initial_likes) values (1, 0);
INSERT INTO initial_likes(club_id, initial_likes) values (2, 0);
INSERT INTO initial_likes(club_id, initial_likes) values (3, 0);
INSERT INTO initial_likes(club_id, initial_likes) values (4, 0);
INSERT INTO initial_likes(club_id, initial_likes) values (5, 0);
INSERT INTO initial_likes(club_id, initial_likes) values (6, 0);
-- 삭제
INSERT INTO initial_likes(club_id, initial_likes) values (7, 0);
-- INSERT INTO initial_likes(club_id, initial_likes) values (9, 0);
INSERT INTO initial_likes(club_id, initial_likes) values (12, 0);
INSERT INTO initial_likes(club_id, initial_likes) values (14, 0);
INSERT INTO initial_likes(club_id, initial_likes) values (17, 0);
INSERT INTO initial_likes(club_id, initial_likes) values (18, 0);
INSERT INTO initial_likes(club_id, initial_likes) values (19, 0);
INSERT INTO initial_likes(club_id, initial_likes) values (20, 0);
INSERT INTO initial_likes(club_id, initial_likes) values (21, 0);

-- 메모 실험용 데이터
INSERT INTO memo (memo_id, major, class_of, anonymous, student_name, content, color, confirm) values (101, '컴퓨터공학과', '20191758', false, '유재현', '해시태그 화이팅!', 'bg-red-200', true);
INSERT INTO memo (memo_id, major, class_of, anonymous, student_name, content, color, confirm) values (102, '유아교육과', '10000000', false, '카리나', '응원문구 테스트1', 'bg-yellow-100', true);
INSERT INTO memo (memo_id, major, class_of, anonymous, student_name, content, color, confirm) values (103, '간호학과', '20000000', false, '윈터', '응원문구 테스트2', 'bg-orange-200', true);
INSERT INTO memo (memo_id, major, class_of, anonymous, student_name, content, color, confirm) values (104, '산업경영공학과', '30000000', false, '지젤', '응원문구 테스트3', 'bg-green-100', false);
INSERT INTO memo (memo_id, major, class_of, anonymous, student_name, content, color, confirm) values (105, '자동차공학과', '40000000', false, '닝닝', '응원문구 테스트4', 'bg-teal-100', false);
INSERT INTO memo (memo_id, major, class_of, anonymous, student_name, content, color, confirm) values (106, '기계공학과', '50000000', false, '김채원', '응원문구 테스트5', 'bg-cyan-100', true);
INSERT INTO memo (memo_id, major, class_of, anonymous, student_name, content, color, confirm) values (107, '사회복지학과', '60000000', false, '카즈하', '응원문구 테스트6', 'bg-indigo-200', true);
INSERT INTO memo (memo_id, major, class_of, anonymous, student_name, content, color, confirm) values (108, '전기공학과', '70000000', false, '홍은채', '응원문구 테스트7', 'bg-violet-200', false);
INSERT INTO memo (memo_id, major, class_of, anonymous, student_name, content, color, confirm) values (109, '다문화학과', '80000000', false, '장원영', '응원문구 테스트8', 'bg-purple-200', false);
INSERT INTO memo (memo_id, major, class_of, anonymous, student_name, content, color, confirm) values (1010, '멀티미디어학과', '90000000', false, '안유진', '응원문구 테스트9', 'bg-fuchsia-200', true);

-- 가입 신청 동아리
INSERT INTO join_table(club_id, icon_image, title) values (1, '1.png', '2024년도 총동아리연합회 \n 🎉신입생 모집 안내🎉');
INSERT INTO join_table(club_id, icon_image, title) values (2, '2.jpeg', '17기 치어리딩 동아리 \n 📣루시우스📣 단원모집');
-- 추가
INSERT INTO join_table(club_id, icon_image, title) values (6, '6.png', '💫2024 댄스동아리 NEWLY 💫 \n 📣신입부원 오디션 공고');
INSERT INTO join_table(club_id, icon_image, title) values (7, '7.png', '2024년도 새학기 농구동아리 \n 🏀''스핀'' 부원 모집');
INSERT INTO join_table(club_id, icon_image, title) values (20, '20.jpeg', '📣2024 학군사관 후보생 \n 65기, 66기 모집');

-- 가입 경로 ( 네이버, 구글, 카카오, 인스타 )

INSERT INTO join_paths(club_id, path) values (1, true), (1, false), (1, false), (1, true);
INSERT INTO join_paths(club_id, path) values (2, false), (2, false), (2, true), (2, true);
-- 추가
INSERT INTO join_paths(club_id, path) values (6, false), (6, false), (6, true), (6, false);
INSERT INTO join_paths(club_id, path) values (7, false), (7, false), (7, true), (7, false);
INSERT INTO join_paths(club_id, path) values (20, false), (20, false), (20, true), (20, true);

-- 가입 기간
INSERT INTO term(club_id, start_date, end_date) values (1, '2023-03-08', '2024-04-12');
INSERT INTO term(club_id, start_date, end_date) values (2, '2023-03-08', '2024-04-12');
-- 추가
INSERT INTO term(club_id, start_date, end_date) values (6, '2023-03-08', '2024-04-12');
INSERT INTO term(club_id, start_date, end_date) values (7, '2023-03-08', '2024-04-12');
INSERT INTO term(club_id, start_date, end_date) values (20, '2024-03-27', '2024-04-26');

-- 가입 모달 내용
-- 수정
INSERT INTO join_modal(club_id, contents) values (1, '안녕하십니까, 제39대 총동아리연합회 ''EUM''입니다. \n \n 총동아리연합회 2024학년도 부원을 모집합니다.\n \n *📋모집 대상* \n-2024년 강릉원주대학교 원주캠퍼스 신입생 *[1학년]* \n \n *📆모집 기간* \n -1차 서류 접수 기간 : *📣상시 모집* \n -2차 대면 면접 : 추후 개별 연락 \n \n 1차 서류 지원서는 모집 공고에 첨부된 URL 통해 네이버 폼 및 인스타 DM 부탁드립니다!');
INSERT INTO join_modal(club_id, contents) values (2, '안녕하세요. \n *강릉원주대학교 원주캠퍼스 치어리딩 동아리 루시우스*입니다! \n 새학기를 맞이하여 24년도 17기 루시우스 신입단원을 모집합니다. \n 무대 경험이 없어도, 춤을 잘 추지 못해도 한번 쯤 치어리딩 해보고 싶으셨다면 모두 환영입니다 🤗 \n \n 저희 루시우스는 \n *1️⃣ 액션 치어리딩 연습합니다!* \n *2️⃣ 기본 동작 알려드립니다!* \n *3️⃣ 안무는 같이 연습합니다!* \n \n - 지원 방법은 포스터에 기재된 방법대로 지원하시면 됩니다. \n *🙅🏻‍♀️면접 & 오디션은 따로 없습니다🙅🏻‍♀️* \n \n 루시우스에서 같이 좋은 추억 만들어 가셨으면 좋겠습니다. 🫶🏻 \n 많은 지원 부탁드립니다. \n 인스타: gwnu.lucius \n \n *17기 루시우스 🌙*');
-- 추가
INSERT INTO join_modal(club_id, contents) values (6, '*📣2024년을 맞아 <NEWLY>의 새로운 멤버를 모집합니다.* \n \n *⭐️모집대상:* 강릉원주대학교 원주캠퍼스 전학년 여학우 \n *⭐️모집인원:* 7명 \n *⭐️지원방법:* \n 안무영상 1~3분 이내 \n 카카오톡 오픈채팅 링크로 제출 \n (이름/학번/학과 + 지원영상) \n \n *👀NEWLY에게 가장 많았던 문의 답변👀* \n \n *Q. 연습은 언제 하나요?* \n A. NEWLY는 학우들의 개인 시간을 존중하여 정기적인 연습보다는 자유롭게 시간을 조율하여 연습시간을 가집니다. 하여 강제적인 정기연습일정은 잡지 않습니다.\n \n *Q. 춤을 잘 못하는데 들어가도 되나요?* \n A. 다양한 장점을 가진 분들이 동아리를 구성하고 있습니다. 오히려 동아리에 들어와 춤을 배우며 실력이 늘고 있으니, 큰 부담은 가지지 않으셔도 됩니다. \n \n *Q. 어떤 춤(장르)을 주로 추시나요?* \n A. 고정된 장르보다는 다양한 장르를 도전하고 경험하는 과정 중에 있습니다. 팀원들의 의견을 가장 우선으로 두고 선호하는 방향에 따라 진행되고 있습니다. \n \n *Q. 동아리 회비는 얼마인가요?* \n A. NEWLY는 동아리 회비를 걷지 않고 있습니다.공연을 준비할 때 개개인에게 경제적인 부담을 주지 않기 위함이며 공연 참여/미참여가 자유롭게 진행되기 때문에 정기적인 동아리 회비는 형평성에 의해 운영되지 않습니다. \n \n ❤️자유로운 분위기를 추구하며 팀원 내의 친목도모와 발전을 위하는 *<NEWLY>*입니다.❤️ \n \n 이외의 다른 문의사항은 *아래의 오픈채팅 링크*로 들어오시면 보다 빠르고 자세한 답변을 받으실 수 있습니다.');
INSERT INTO join_modal(club_id, contents) values (7, '안녕하세요. *''스핀''*입니다 \n *🏀새학기를 맞아 새로운 부원을 모집하려 하고 있습니다. \n \n *✔️활동* \n 1️⃣교내 5:5, 3:3 경기 \n 2️⃣타대학 농구동아리 교류전 \n 3️⃣기본기 연습 \n 4️⃣대학교 동아리 대회 \n 등등 위와 같이 활동하고 있습니다. \n \n *✔️지원 자격* \n 1️⃣주 1회 이상 꾸준하게 활동 가능한 분 \n 2️⃣농구에 관심이 있는 분 \n 3️⃣숨을 쉴 수 있는 분 \n 4️⃣매니저 하실 분 \n \n *✔️지원 방법* \n 문자로 학과 학번 이름 입력 후 문자바랍니다! \n *문자지원: 010-3554-6792*');
INSERT INTO join_modal(club_id, contents) values (20, '*📣2024년 학군사관 후보생 65기, 66기를 모집합니다.📣* \n \n *👉모집 기간:* 24. 03. 04(월)~''24. 04. 26(금) \n *👉지원 자격:* 1, 2학년 재/휴학생이라면 누구나 가능! \n *👉지원 방법:* 육군학생군사학교 홈페이지 (www.armyofficer.mil.kr)에 지원서 제출선발 \n \n *👉 세부 일정* \n *신체검사:* 3월 4일(월)~ 7월 5일(금) \n *인성검사:* 4월 29일(월)~ 5월 10일(금) \n *가서류, 체력인증서 제출:* 5월 1일(수) ~ 7월 31일(수) \n *AI면접:* 5월 13일(월)~ 6월 7일(금) \n *신원조사:* 5월 16일(목)~ 6월 7일(금) \n *합격자 발표:* 9월 13일(금) \n \n *😳학군사관 후보생 혜택!* \n 1. 강릉원주대 163학군단 사관후보생 기숙사 우선제공 혜택 보장 \n 2. 미 TEXAS A&M 대학 어학연수 선발 기회제공 \n 3. 다양한 국·내외 전사적지 탐방 프로그램 지원 \n 4. 단기 복무장교 장려금 지급 1200만원(2024년 기준), 매년 증진 예정 \n 5. 2년간 매월 부교재비 지원 (2년간 총 163만원) \n 6. 학기 중 학군생활지원금 지급(월 18만원) \n 7. 매학기 우수후보생 장학금 지급 \n 8. 학군사관 후보생증 발급을 통해 군마트(px) 및 육군 휴양시설 이용가능 및 문화 공연 등 협약된 업체 할인 혜택 \n \n 궁금한 것이 있으시다면 인스타그램 DM 또는 카카오톡 오픈채팅 방을 통해 연락해주시면, 친절하고 자세하게 답변해 드리겠습니다! \n \n *📞지원문의* \n *학군단 행정실 : 033-640-2650*');

-- 가입 모달 이미지
INSERT INTO join_modal_image(club_id, url) values (1, '1_1.JPG'), (1, '1_2.jpeg'), (1, '1_3.jpeg');
INSERT INTO join_modal_image(club_id, url) values (2, '2_1.jpeg'), (2, '2_2.jpeg'), (2, '2_3.jpeg'), (2, '2_4.jpeg');
-- 추가
INSERT INTO join_modal_image(club_id, url) values (6, '6_1.jpeg'), (6, '6_2.jpeg'), (6, '6_3.jpeg');
INSERT INTO join_modal_image(club_id, url) values (7, '7_1.jpeg');
INSERT INTO join_modal_image(club_id, url) values (20, '20_1.png'), (20, '20_2.jpeg'), (20, '20_3.jpeg');

-- 가입 모달 Url
INSERT INTO join_paths_url(club_id, url) values (1, 'https://form.naver.com/response/JEMUf_nDTieSnZ3QUEJr8w'), (1, 'false'), (1, 'false'), (1, 'https://www.instagram.com/gwnu_eum_wonju?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==');
INSERT INTO join_paths_url(club_id, url) values (2, 'false'), (2, 'false'), (2, 'https://open.kakao.com/o/suF9FQ6f'), (2, 'https://www.instagram.com/gwnu.lucius?igsh=YXJkemI4MGR6YzBx');
-- 추가
INSERT INTO join_paths_url(club_id, url) values (6, 'false'), (6, 'false'), (6, 'https://open.kakao.com/o/stCIT76f'), (6, 'false');
INSERT INTO join_paths_url(club_id, url) values (7, 'false'), (7, 'false'), (7, 'https://open.kakao.com/o/sRMxcHPe'), (7, 'false');
INSERT INTO join_paths_url(club_id, url) values (20, 'false'), (20, 'false'), (20, 'https://open.kakao.com/o/g3Ii8A5e'), (20, 'https://instagram.com/gwnu_163rotc?');

-- 부스 동아리 day1 재확인 필요
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (1, 1, '1_1.png', '', 1, '중앙부스', 'booth', '2024-04-01 10:00', '2024-04-01 18:00', '운영중');
-- INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (2, 4, '0_1.png', '', 1, '중앙부스', 'booth', '2024-04-01 10:00', '2024-04-01 18:00', '종료');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (3, 5, '5_1.png', '', 1, '중앙부스', 'booth', '2024-04-01 11:00', '2024-04-01 14:00', '혼잡');
-- 삭제
-- INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (4, 7, '1_1.png', '', 1, '체육관', 'booth', '2024-04-01 10:00', '2024-04-01 18:00', '운영중');
-- INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (5, 9, '1_1.png', '', 1, '중앙부스', 'booth', '2024-04-01 10:00', '2024-04-01 18:00', '조기마감');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (6, 12, '12_1.png', '12.jpg', 1, '중앙부스', 'booth', '2024-04-01 10:00', '2024-04-01 18:00', '일시중지');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (7, 14, '14_1.png', '', 1, '중앙부스', 'booth', '2024-04-01 10:00', '2024-04-01 18:00', '조기마감');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (8, 17, '0_1.png', '', 1, '중앙부스', 'booth', '2024-04-01 10:00', '2024-04-01 18:00', '운영중');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (9, 18, '0_1.png', '', 1, '중앙부스', 'booth', '2024-04-01 10:00', '2024-04-01 18:00', '운영중');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (10, 19, '0_1.png', '', 1, '중앙부스', 'booth', '2024-04-01 10:00', '2024-04-01 18:00', '조기마감');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (11, 20, '20_1.jpeg', '', 1, '중앙부스', 'booth', '2024-04-01 10:00', '2024-04-01 17:00', '일시중지');

-- -- 부스 동아리 day2
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (12, 1, '1_1.png', '', 1, '중앙부스', 'booth', '2024-04-02 10:00', '2024-04-02 18:00', '운영중');
-- INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (13, 4, '0_1.png', '', 1, '중앙부스', 'booth', '2024-04-02 10:00', '2024-04-02 18:00', '운영중');
-- 삭제
-- INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (14, 5, '5_1.png', '', 1, '중앙부스', 'booth', '2024-04-02 11:00', '2024-04-02 16:00', '운영중');
-- 삭제
-- INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (15, 7, '1_1.png', '', 1, '체육관', 'booth', '2024-04-02 10:00', '2024-04-02 18:00', '운영중');
-- INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (16, 9, '1_1.png', '', 1, '중앙부스', 'booth', '2024-04-02 10:00', '2024-04-02 18:00', '운영중');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (17, 12, '12_1.png', '12.jpg', 1, '중앙부스', 'booth', '2024-04-02 10:00', '2024-04-02 18:00', '운영중');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (18, 14, '14_1.png', '', 1, '중앙부스', 'booth', '2024-04-02 10:00', '2024-04-02 18:00', '운영중');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (19, 17, '0_1.png', '', 1, '중앙부스', 'booth', '2024-04-02 10:00', '2024-04-02 18:00', '운영중');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (20, 18, '0_1.png', '', 1, '중앙부스', 'booth', '2024-04-02 10:00', '2024-04-02 18:00', '운영중');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (21, 19, '0_1.png', '', 1, '중앙부스', 'booth', '2024-04-02 10:00', '2024-04-02 18:00', '운영중');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (22, 20, '20_1.jpeg', '', 1, '중앙부스', 'booth', '2024-04-02 10:00', '2024-04-02 17:00', '운영중');
--
-- -- 부스 동아리 day3
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (23, 2, '2_1.jpeg', '', 1, '연화홀', 'performance', '2024-04-03 18:00', '2024-04-03 21:00', '');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (24, 3, '1_1.png', 'fermata.jpg', 1, '연화홀', 'performance', '2024-04-03 18:00', '2024-04-03 21:00', '');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (25, 4, '1_1.png', 'phrase.jpg', 2, '연화홀', 'performance', '2024-04-03 18:00', '2024-04-03 21:00', '');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (26, 6, '6_1.png', 'new.jpeg', 2, '연화홀', 'performance', '2024-04-03 18:00', '2024-04-03 21:00', '');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (27, 21, '21_1.png', 'ego.jpeg', 2, '연화홀', 'performance', '2024-04-03 18:00', '2024-04-03 21:00', '');