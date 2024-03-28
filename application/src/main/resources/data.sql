-- TYPE 데이터
INSERT INTO type (field) VALUES ('공연');
INSERT INTO type (field) VALUES ('체육');
INSERT INTO type (field) VALUES ('취미');
INSERT INTO type (field) VALUES ('종교');
INSERT INTO type (field) VALUES ('기타');
INSERT INTO type (field) VALUES ('학회');

-- 동아리
INSERT INTO club (club_id, club_name, type_id) VALUES (1, '총동연', 6);

INSERT INTO club (club_id, club_name, type_id) VALUES (2, '루시우스', 1);
INSERT INTO club (club_id, club_name, type_id) VALUES (3, '페르마타', 1);
INSERT INTO club (club_id, club_name, type_id) VALUES (4, '프레이즈', 1);
INSERT INTO club (club_id, club_name, type_id) VALUES (5, 'OST', 1);
INSERT INTO club (club_id, club_name, type_id) VALUES (6, '뉴를리', 1);

INSERT INTO club (club_id, club_name, type_id) VALUES (7, '스핀', 2);

INSERT INTO club (club_id, club_name, type_id) VALUES (12, '해시태그', 3);
INSERT INTO club (club_id, club_name, type_id) VALUES (14, '보드홀릭', 3);

INSERT INTO club (club_id, club_name, type_id) VALUES (17, 'CCC', 4);
INSERT INTO club (club_id, club_name, type_id) VALUES (18, 'JDM', 4);

INSERT INTO club (club_id, club_name, type_id) VALUES (19, 'GHOST', 5);
INSERT INTO club (club_id, club_name, type_id) VALUES (20, 'ROTC', 5);

INSERT INTO club (club_id, club_name, type_id) VALUES (21, 'EGO', 1);

-- 동아리 속성
INSERT INTO property (club_id, image_url, icon_url) VALUES (1, '1_2.jpeg', '1_1.jpg');
INSERT INTO property (club_id, image_url, icon_url) VALUES (2, '2_2.jpeg', '2_1.jpeg');
INSERT INTO property (club_id, image_url, icon_url) VALUES (3, '3_2.jpeg', '3_1.jpeg');
INSERT INTO property (club_id, image_url, icon_url) VALUES (4, '4_2.jpeg', '4_1.png');
INSERT INTO property (club_id, image_url, icon_url) VALUES (5, '5_2.jpeg', '5_1.png');
INSERT INTO property (club_id, image_url, icon_url) VALUES (6, '6_2.jpeg', '6_1.png');
INSERT INTO property (club_id, image_url, icon_url) VALUES (7, '6_2.jpeg', '6_2.jpeg');
INSERT INTO property (club_id, image_url, icon_url) VALUES (12, '12_2.jpg', '12_1.png');
INSERT INTO property (club_id, image_url, icon_url) VALUES (14, '14_2.jpg', '14_1.png');
INSERT INTO property (club_id, image_url, icon_url) VALUES (17, '17_2.jpeg', '17_1.jpeg');
INSERT INTO property (club_id, image_url, icon_url) VALUES (18, '18_2.jpeg', '18_1.png');
INSERT INTO property (club_id, image_url, icon_url) VALUES (19, '19_2.png', '19_1.jpeg');
INSERT INTO property (club_id, image_url, icon_url) VALUES (20, '20_2.png', '20_1.jpeg');
INSERT INTO property (club_id, image_url, icon_url) VALUES (21, '21_2.jpeg', '21_1.png');

-- 동아리 태그
INSERT INTO tags (club_id, tag) VALUES (1, '축제 협회'), (1, '안내 부스');
INSERT INTO tags (club_id, tag) VALUES (2, '대학응원단'), (2, '루시우스');
INSERT INTO tags (club_id, tag) VALUES (3, '어쿠스틱'), (3, '밴드_동아리');
INSERT INTO tags (club_id, tag) VALUES (4, '청춘'), (4, '밴드부');
INSERT INTO tags (club_id, tag) VALUES (5, '연극'), (5, '뮤지컬');
INSERT INTO tags (club_id, tag) VALUES (6, '댄스동아리'), (6, '뉴를리');
INSERT INTO tags (club_id, tag) VALUES (7, '없'), (7, '없');
INSERT INTO tags (club_id, tag) VALUES (12, '사진'), (12, '출사');
INSERT INTO tags (club_id, tag) VALUES (14, '보드게임'), (14, '모두 모여라!');
INSERT INTO tags (club_id, tag) VALUES (17, '사랑해갓찾은너'), (17, '즐거움_가득');
INSERT INTO tags (club_id, tag) VALUES (18, '가족_공동체'), (18, '기독교_동아리');
INSERT INTO tags (club_id, tag) VALUES (19, '낭만 한스푼'), (19, '감성 한스푼');
INSERT INTO tags (club_id, tag) VALUES (20, '사격게임'), (20, '학군단');
INSERT INTO tags (club_id, tag) VALUES (21, '힙합'), (21, '공연');

-- 동아리 모달
INSERT INTO modal (club_id, contents, title, location_url) values (1, '안녕하세요👋, \n 2024 동아리 홍보제 주관 \n 강릉원주대 *총동아리연합회 ''EUM''*입니다! \n \n 새학기를 맞아 원주캠퍼스에 어떤 동아리들이 있는지 궁금한 새내기 또는 재학생분들을 위해 원주캠퍼스의 다양한 동아리들을 두 눈으로 확인해보고 직접 체험해 볼 수 있는 기회를 마련했습니다!📣 \n \n ‼️즐겁고 안전하게 이번 *2024 동아리 홍보제*를 즐겨주시면 감사하겠습니다! \n \n *📅 동아리홍보제 일시:* \n 2024년 4월 1일~ 3일 (총 3일) \n  *동아리 부스:* 4월 1일~ 2일 10:00~18:00 \n  *동아리 공연:* 4월 3일 18:00 \n \n *📍동아리부스장소:* 보건복지대학1호관 W5 건물 앞 \n *📍동아리공연장소:* 대학본부 W3 연화홀 \n * 📣자세한 내용은 부스 배치도를 확인해주세요 \n \n *🎪 행사 내용:* \n *동아리부스체험:* 각동아리들의 부스를 다양하게 체험해보며 자신과맞는 동아리를 찾아보세요! \n *동아리공연:* 공연 분과 동아리들의 멋진 무대와 공연을 즐겨보세요! \n \n *🎪 부스 내용:* \n 저희 총동아리연합회 이음도 부스를 준비했습니다! \n \n *👥 참여 방법:* \n 총동연 부스에서 도장판을 받으신 후 각자 원하시는 동아리 부스를 참여한 다음 도장을 받아오시면 다양한 🎁선물을 드립니다! \n \n 총동연 도장을 받기 위해서는 저희가 준비한 2가지 중 하나에 참여해야 합니다! \n \n *1. 로고 맞추기:* 총동연이 준비한 로고를 보시고 둘 중에 올바른 로고를 고르시면 총동연 부스 도장을 찍어드립니다! \n \n *2. 총동연 홈페이지 응원문구 메모지 달기:* 홈페이지에 들어가셔서 메인화면에 총동연 또는 이번 동아리 홍보제 응원 글을 남겨주시면 총동연 부스 도장을 찍어드립니다 \n \n 📣 모든 도장을 찍으신 후 응모함에 넣어주시면 4월 3일 동아리 공연에서 직접 추첨하여 다양한 상품을 증정해드릴 예정입니다! \n \n * 👀자세한 내용은 총동연 인스타를 확인해주세요 \n \n *🎁 특별 이벤트: ⭐동아리홍보제 축제응원문구 메모지 이벤트⭐* \n 동아리 홍보제 홈페이지에 들어가서 메인화면의 응원문구 메모지를 작성해주시면 자동응모❕ \n \n 추첨은 4월 3일 5시에 추첨할 예정이며 당첨자는 총동연 인스타를 통해 공지할 예정입니다 \n *@gwnu_eum_wonju* \n \n *👋감사합니다!*', '⭐총동아리연합회 EUM ⭐️', '1_map.png');
INSERT INTO modal (club_id, contents, title) values (2, '안녕하세요! 👋 \n 치어리딩 동아리 *''루시우스''* 입니다! \n \n 이번에 신입단원과 함께 한 페이지가 될 수 있게 곡을 치어리딩으로 변화시켜 준비했습니다! \n \n 부족한 점이 있을 수도 있겠지만 24년도 첫 무대인 만큼 많은 호응과 격려, 관심 부탁드립니다 ✨ \n \n  공연 일정은 아래 *🗓️행사 일정*을 참고해주세요! \n \n  감사합니다 👋 ', '🎈 치어리딩 루시우스 공연 많관부 🤍');
INSERT INTO modal (club_id, contents, title) values (3, '안녕하세요! \n 어쿠스틱 밴드동아리 *''페르마타''*입니다 🪇 \n \n 이번 공연은 새롭게 동아리에 들어오신 *신입 부원*분들과 함께 \n 🎤*다양한 곡*들을 준비했습니다! \n \n 📣페르마타의 분위기가 잔뜩 들어간 곡들을 열심히 준비했으니, \n \n *많은 관심과 호응 부탁드립니다!🥰*', '🪇어쿠스틱 밴드동아리 페르마타🪇');
INSERT INTO modal (club_id, contents, title) values (4, '안녕하세요! 국립강릉원주대학교 밴드부 \n *''프레이즈''*입니다! \n \n 이번 동아리 홍보제에서 많은 부원들이 다채로운 곡들을 준비했습니다! \n \n 부디 오셔서 자리를 ✨빛내주시면 감사하겠습니다! \n \n *많은 관심과 격려 부탁드립니다🤭*', '🎸밴드');
INSERT INTO modal (club_id, contents, title, location_url) values (5, '연극동아리 *O.S.T* 부스에서는 \n ‼️*오징어게임 의상*과 가오나시 \n ‼️*추억의 옛날 교복*등을 입어보실 수 있습니다! \n \n 부스에 잠깐 들러👋 *실제 공연의상*👕도 구경 해보고 \n 직접 체험해 보면서 O.S.T의 분위기를 느껴보는건 어떨까요?😍', '👕O.S.T와 함께하는 코스프레 체험👖', '5_map.png');
INSERT INTO modal (club_id, contents, title) values (6, '안녕하세요.👋 \n 강릉원주대학교 원주캠퍼스 댄스동아리 *''뉴를리''* 입니다. \n \n 저희가 이번 2024 동아리 홍보제에서 총 *2곡*을 준비했는데요! \n \n 부족하더라도 열심히 준비했으니까 \n *많은 관심 부탁드립니다!❤️‍🔥* \n \n *‼️포스터는 ''뉴를리''를 참고해주세요!*', '💫댄스동아리 뉴를리 공연💫');
INSERT INTO modal (club_id, contents, title) values (7, '없', '없');
INSERT INTO modal (club_id, contents, title, location_url) values (12, '안녕하세요! 사진 동아리 *''해시태그''*입니다! \n \n *🎈행사 내용* \n 해시태그가 찍은 학교 속 사진과 같은 장소를 찾아 \n 📸사진을 찍어오기! \n \n 학교 예시 사진은 부스에서 보실 수 있습니다! \n \n 찍어오신 *사진 & 사진첩의 원하는 사진을 인화*해 드립니다!', '📸 순간포착 학교에 이런곳이?!', '12_map.png');
INSERT INTO modal (club_id, contents, title, location_url) values (14, '안녕하세요! \n 강릉원주대학교 동아리 *''보드홀릭''*입니다! \n \n 저희 동아리 부스 행사에 참여하셔서 준비한 게임 \n *🕹️복불복 꼬치의 달인* \n *🕹악어 룰렛* \n *🕹카지노 블랙잭* \n 체험하고 가세요! \n \n *🍯 꿀잼* 보장합니다! \n 감사합니다. 👋', '🎲 보드홀릭 🧩', '14_map.png');
INSERT INTO modal (club_id, contents, title, location_url) values (17, '안녕하세요👋, \n 저희는 기독교 중앙동아리 *''CCC''*입니다💛 \n \n CCC 부스는 *오전 10시*부터 *오후 17시*까지 \n 4️⃣번 부스에서 진행됩니다☺️\n \n 저희 CCC는 방문하시는 모든 분들께 솜사탕을 나눠드리려 합니다. \n \n 간단한 설명을 듣고 설문지를 작성해주시는 분들에게는 \n 솜사탕을 하나 더 드리려고 하니 많은 관심 부탁드립니다🥰 \n \n 📣넉넉히 수량을 준비해두었으나, *조기소진*될 수 있으니 \n 일찍 방문해주시면 더 좋을 것 같습니다✨️\n \n *솜사탕 드시고 달콤한 하루 보내세요🤍*', '달디달고 달디달고 달디단 솜사탕🫧', '17_map.png');
INSERT INTO modal (club_id, contents, title, location_url) values (18, '📫JDM 활동 전시회에 여러분을 초대합니다. \n \n 안녕하세요 강릉원주대학교 동아리 *''JDM''*입니다. \n \n 말씀 묵상과 기도회, 예배 등의 신앙 활동과 더불어 식교제, MT, 아웃팅, 축구 모임 등의다양하고 재미있는 교제 활동을 해나가고 있는 *JDM*🎉. \n \n 👀궁금하지 않나요? \n \n 활동 전시회와 더불어 어릴적 🧸문방구에서 뽑기 좀 해본 사람은 안다는 추억의 🎁선물 뽑기도 함께 준비되어 있다는 점! \n \n 오셔서 구경하시고 어마어마한 *선물*도 받아가세요🎁', '📫JDM 활동 전시회📫', '18_map.png');
INSERT INTO modal (club_id, contents, title, location_url) values (19, '안녕하세요!👋 \n 자동차공학과 학과동아리 *''GHOST''*입니다. \n \n *2024년도 동아리 홍보제*를 맞아 저희 고스트에서 재밌는 🕹️게임을 하나 준비했습니다! \n \n 실제 레이싱 트랙을 간접 체험하며 강릉원주대학생 학우분들끼리 질주하는 *🏁심레이싱 대회 개최!!* \n \n *✔️친구들과 서로 경쟁해서 레이싱도 즐겨보세요!* \n 데일리 타임어택 중 가장 빠른 학우분 TOP3한테 드리는 🎁특별상품까지!! \n \n 강릉원주대 슈퍼 레이서가 될 수 있는 단 한번의 기회!! 면허가 없어도! 장롱이여도 모두 OK! \n \n *✔️이용방법* \n 실제 오리지널 서킷 3랩을 주행하게 됩니다. \n 롤링스타트를 시작으로 1랩은 트랙을 익혀보시고 2번째 3번째 랩타임 중 \n 가장 빠른 랩타임을 측정하여 명예의 전당 타임어택에 기재됩니다. \n 차량은 동아리 측에서 선정한 차량을 동일하게 탑승하며 실력의 편차를 줄이고자 오토미션을 적용하였습니다. \n \n 무리한 트랙이탈을 하여 의도적인 기록감축은 패널티 처리 및 DNF(실격)처리 되오니 안전운전 부탁드려요!‼️ \n \n 또한 기기에 무리한 힘을 가하시거나 충격을 줄 경우 저희가 준비한 장비에 큰 손상이 올 수 있으니 \n *🚘매너운전* 부탁드릴게요 !!', '🚘부릉부릉! 나도 자동차 레이서!', '19_map.png');
INSERT INTO modal (club_id, contents, title, location_url) values (20, '안녕하세요! 🎯 \n *ROTC* 사격부스에서 여러분을 초대합니다! \n \n 군인이라는 딱딱한 이미지를 벗어던지고, 친근하게 다가가기 위해 준비했어요. \n \n *사격 체험과 함께 다양한 상품도 준비되어 있으니까 친구들과 잊지 못할 추억을 만들어 보세요! 🌟* \n \n 여러분의 많은 참여를 기다리고 있습니다! 사격부스에서 새로운 경험을 통해 즐거운 시간을 보내세요! 🌈 \n \n 👋 감사합니다.', '🎈ROTC 사격 게임🔫', '20_map.png');
INSERT INTO modal (club_id, contents, title) values (21, '📣 안녕하세요! \n \n 강릉원주대학교 힙합동아리 *''EGO''*의 홍보제 공연 정보를 알려드립니다. \n \n *✔️ 공연 상세 정보* \n 1️⃣공연 일시 : 4월 3일 (수) \n 2️⃣공연 장소 : 연화홀 \n 3️⃣공연 곡 목록: \n *🎤be! - sokodomo* \n *🎤밤에 들어갈게 – GIRIBOY* \n *🎤윈윈 – Huh* \n *🎤흔들리며 피는 꽃 – Clloud* \n \n 포스터는 일정란에 EGO 포스터도 참고해 주세요! ', '🎤EGO');

-- 동아리 모달 이미지
INSERT INTO modal_image (club_id, url) values (1, '1_2.jpg'), (1, '1_3.jpeg'), (1, '1_4.jpeg');
INSERT INTO modal_image (club_id, url) values (2, '2_1.jpeg'), (2, '2_2.jpeg'), (2, '2_3.jpeg');
INSERT INTO modal_image (club_id, url) values (3, '3_1.jpeg'), (3, '3_2.jpeg'), (3, '3_3.jpeg'), (3, '3_4.jpeg'), (3, '3_5.jpeg');
INSERT INTO modal_image (club_id, url) values (4, '4_1.jpeg');
INSERT INTO modal_image (club_id, url) values (5, '5_1.jpeg'), (5, '5_2.jpeg'), (5, '5_3.jpeg'), (5, '5_4.png');
INSERT INTO modal_image (club_id, url) values (6, '6_1.jpeg'), (6, '6_2.jpeg');
INSERT INTO modal_image (club_id, url) values (7, '1_1.JPG');
INSERT INTO modal_image (club_id, url) values (12, '12_1.jpg'), (12, '12_2.jpeg'), (12, '12_3.jpeg'), (12, '12_4.jpeg'), (12, '12_5.jpeg');
INSERT INTO modal_image (club_id, url) values (14, '14_1.jpg');
INSERT INTO modal_image (club_id, url) values (17, '17_1.png'), (17, '17_2.png'), (17, '17_3.png');
INSERT INTO modal_image (club_id, url) values (18, '18_1.jpeg'), (18, '18_2.jpeg'), (18, '18_3.jpeg'), (18, '18_4.jpeg'), (18, '18_5.jpeg');
INSERT INTO modal_image (club_id, url) values (19, '19_1.jpeg'), (19, '19_2.jpeg'), (19, '19_3.jpeg'), (19, '19_4.jpeg'), (19, '19_5.jpeg');
INSERT INTO modal_image (club_id, url) values (20, '20_1.jpeg'), (20, '20_2.jpeg'), (20, '20_3.jpeg');
INSERT INTO modal_image (club_id, url) values (21, '21_1.jpeg'), (21, '21_2.jpeg'), (21, '21_3.jpeg');

-- 동아리 좋아요 수
INSERT INTO initial_likes(club_id, initial_likes) values (1, 0);
INSERT INTO initial_likes(club_id, initial_likes) values (2, 0);
INSERT INTO initial_likes(club_id, initial_likes) values (3, 0);
INSERT INTO initial_likes(club_id, initial_likes) values (4, 0);
INSERT INTO initial_likes(club_id, initial_likes) values (5, 0);
INSERT INTO initial_likes(club_id, initial_likes) values (6, 0);
INSERT INTO initial_likes(club_id, initial_likes) values (7, 0);
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
INSERT INTO join_table(club_id, icon_image, title) values (1, '1.jpg', '2024년도 총동아리연합회 \n 🎉신입생 모집 안내🎉');
INSERT INTO join_table(club_id, icon_image, title) values (2, '2.jpeg', '17기 치어리딩 동아리 \n 📣루시우스📣 단원모집');
INSERT INTO join_table(club_id, icon_image, title) values (6, '6.png', '💫댄스동아리 NEWLY 💫 \n 📣신입부원 오디션 공고');
INSERT INTO join_table(club_id, icon_image, title) values (7, '7.png', '2024년도 새학기 농구동아리 \n 🏀''스핀'' 부원 모집');
INSERT INTO join_table(club_id, icon_image, title) values (17, '17.jpeg', '샬롬☝️✨ \n 중앙동아리 CCC 부원 모집');
INSERT INTO join_table(club_id, icon_image, title) values (18, '18.png', '✨JDM✨ \n 📣신입 부원 모집');
INSERT INTO join_table(club_id, icon_image, title) values (19, '19.jpeg', '🚘2024년도 GHOST 동아리🚘 \n 🙋🏻신입생 모집');
INSERT INTO join_table(club_id, icon_image, title) values (20, '20.jpeg', '📣2024 학군사관 후보생 \n 65기, 66기 모집');

-- 가입 경로 ( 네이버, 구글, 카카오, 인스타 )
INSERT INTO join_paths(club_id, path) values (1, true), (1, false), (1, false), (1, true);
INSERT INTO join_paths(club_id, path) values (2, false), (2, false), (2, true), (2, true);
INSERT INTO join_paths(club_id, path) values (6, false), (6, false), (6, true), (6, false);
INSERT INTO join_paths(club_id, path) values (7, false), (7, false), (7, true), (7, false);
INSERT INTO join_paths(club_id, path) values (17, false), (17, true), (17, true), (17, true);
INSERT INTO join_paths(club_id, path) values (18, true), (18, false), (18, false), (18, true);
INSERT INTO join_paths(club_id, path) values (19, false), (19, false), (19, true), (19, false);
INSERT INTO join_paths(club_id, path) values (20, false), (20, false), (20, true), (20, true);

-- 가입 기한
INSERT INTO term(club_id, end_date) values (1, '2025-01-01');
INSERT INTO term(club_id, end_date) values (2, '2025-01-01');
INSERT INTO term(club_id, end_date) values (6, '2025-01-01');
INSERT INTO term(club_id, end_date) values (7, '2025-01-01');
INSERT INTO term(club_id, end_date) values (17, '2025-01-01');
INSERT INTO term(club_id, end_date) values (18, '2025-01-01');
INSERT INTO term(club_id, end_date) values (19, '2024-04-03');
INSERT INTO term(club_id, end_date) values (20, '2024-04-26');

-- 가입 모달 내용
INSERT INTO join_modal(club_id, contents) values (1, '안녕하십니까, 제39대 총동아리연합회 ''EUM''입니다. \n \n 총동아리연합회 2024학년도 부원을 모집합니다.\n \n *📋모집 대상* \n-2024년 강릉원주대학교 원주캠퍼스 신입생 *[1학년]* \n \n *📆모집 기간* \n -1차 서류 접수 기간 : *📣상시 모집* \n -2차 대면 면접 : 추후 개별 연락 \n \n 1차 서류 지원서는 모집 공고에 첨부된 URL 통해 네이버 폼 및 인스타 DM 부탁드립니다!');
INSERT INTO join_modal(club_id, contents) values (2, '안녕하세요. \n *강릉원주대학교 원주캠퍼스 치어리딩 동아리 루시우스*입니다! \n 새학기를 맞이하여 24년도 17기 루시우스 신입단원을 모집합니다. \n 무대 경험이 없어도, 춤을 잘 추지 못해도 한번 쯤 치어리딩 해보고 싶으셨다면 모두 환영입니다 🤗 \n \n 저희 루시우스는 \n *1️⃣ 액션 치어리딩 연습합니다!* \n *2️⃣ 기본 동작 알려드립니다!* \n *3️⃣ 안무는 같이 연습합니다!* \n \n - 지원 방법은 포스터에 기재된 방법대로 지원하시면 됩니다. \n *🙅🏻‍♀️면접 & 오디션은 따로 없습니다🙅🏻‍♀️* \n \n 루시우스에서 같이 좋은 추억 만들어 가셨으면 좋겠습니다. 🫶🏻 \n 많은 지원 부탁드립니다. \n 인스타: gwnu.lucius \n \n *17기 루시우스 🌙*');
INSERT INTO join_modal(club_id, contents) values (6, '*📣2024년을 맞아 <NEWLY>의 새로운 멤버를 모집합니다.* \n \n *⭐️모집대상:* 강릉원주대학교 원주캠퍼스 전학년 여학우 \n *⭐️모집인원:* 7명 \n *⭐️지원방법:* \n 안무영상 1~3분 이내 \n 카카오톡 오픈채팅 링크로 제출 \n (이름/학번/학과 + 지원영상) \n \n *👀NEWLY에게 가장 많았던 문의 답변👀* \n \n *Q. 연습은 언제 하나요?* \n A. NEWLY는 학우들의 개인 시간을 존중하여 정기적인 연습보다는 자유롭게 시간을 조율하여 연습시간을 가집니다. 하여 강제적인 정기연습일정은 잡지 않습니다.\n \n *Q. 춤을 잘 못하는데 들어가도 되나요?* \n A. 다양한 장점을 가진 분들이 동아리를 구성하고 있습니다. 오히려 동아리에 들어와 춤을 배우며 실력이 늘고 있으니, 큰 부담은 가지지 않으셔도 됩니다. \n \n *Q. 어떤 춤(장르)을 주로 추시나요?* \n A. 고정된 장르보다는 다양한 장르를 도전하고 경험하는 과정 중에 있습니다. 팀원들의 의견을 가장 우선으로 두고 선호하는 방향에 따라 진행되고 있습니다. \n \n *Q. 동아리 회비는 얼마인가요?* \n A. NEWLY는 동아리 회비를 걷지 않고 있습니다.공연을 준비할 때 개개인에게 경제적인 부담을 주지 않기 위함이며 공연 참여/미참여가 자유롭게 진행되기 때문에 정기적인 동아리 회비는 형평성에 의해 운영되지 않습니다. \n \n ❤️자유로운 분위기를 추구하며 팀원 내의 친목도모와 발전을 위하는 *<NEWLY>*입니다.❤️ \n \n 이외의 다른 문의사항은 *아래의 오픈채팅 링크*로 들어오시면 보다 빠르고 자세한 답변을 받으실 수 있습니다.');
INSERT INTO join_modal(club_id, contents) values (7, '안녕하세요. *''스핀''*입니다 \n *🏀새학기를 맞아 새로운 부원을 모집하려 하고 있습니다. \n \n *✔️활동* \n 1️⃣교내 5:5, 3:3 경기 \n 2️⃣타대학 농구동아리 교류전 \n 3️⃣기본기 연습 \n 4️⃣대학교 동아리 대회 \n 등등 위와 같이 활동하고 있습니다. \n \n *✔️지원 자격* \n 1️⃣주 1회 이상 꾸준하게 활동 가능한 분 \n 2️⃣농구에 관심이 있는 분 \n 3️⃣숨을 쉴 수 있는 분 \n 4️⃣매니저 하실 분 \n \n *✔️지원 방법* \n 문자로 학과 학번 이름 입력 후 문자바랍니다! \n *문자지원: 010-3554-6792*');
INSERT INTO join_modal(club_id, contents) values (17, '안녕하세요! \n 기독교 중앙동아리 *''CCC''*입니다!! \n \n *CCC*는 *Campus Crusade for Christ*의 약자로, \n 전국 *300*여 개 대학에서 *2만*여명 의 학생들이  \n 함께하고 있는 *⭐️연합 동아리⭐️*입니다! \n \n 원주에는 현재 7개 대학교에, 100여 명의 학생들이 활동하고 있습니다☺️ \n \n *☎️지원자격*  \n ✔️ 하나님에 대해 알고싶은 강릉원주대 재학생 및 신입생 누구든지! *상 시 모 집* 중입니다!❤️ \n ✔️ 즐겁고 설레는 학교 생활을 하고 싶은 분 모두~✨✨❤️ \n \n 궁금한 점이 있거나 동아리 지원하고 싶으신 분들은  \n 아래 번호로 편하게 연락주세요!! \n  \n ⬇️ \n  \n *✔️대표* : 010-4765-8007 *(사회복지학과 21 이온유)* \n ✔️*동방 위치* : W11 219호 \n  \n CCC는 신입생 및 재학생들의 즐거운 학교 생활을 위해  \n 늘 기도하겠습니다! 🙏 \n  \n *‼️CCC는 학교에서 인정한 건강한 기독교 동아리로, 이단 및 신천지왜 무관함을 밝힙니다‼️*');
INSERT INTO join_modal(club_id, contents) values (18, '여러분 안녕하세요! \n 강릉원주대학교 원주캠퍼스 중앙동아리 *''JDM''*입니다! \n \n JDM은 *예수 제자 운동(Jesus Disciple Movement)* \n 줄임말로 마태복음 28장 19-20절에 예수님께서 제자들에게 남기신 *''만인을 그리스도의 제자로 삼으라''*는 명령을 비전으로 삼아 만들어졌습니다. \n \n JDM은 국내외 총 *300* 여개의 캠퍼스에서 운동을 진행하고 있으며 *복음전파, 제자훈련, 세계선교*를 중심으로 사역하는 *학원복음화 협의회에 가입된 건전한 선교 단체입니다.* \n \n JDM에서는 소그룹, Q.T, 기도회, 채플, 사경회, 여름/겨울 집회, 비전트립 등등 다양한 활동들로 채워나가고 있습니다.😁 \n \n ✔️ 캠퍼스 생활 신앙생활을 지키고 싶은 사람❤ \n ✔️ 캠퍼스 생활 믿음의 동역자가 필요한 사람❤ \n ✔️ 기독교에 관심이 있는 사람❤ \n ✔️ 그리스도의 제자가 되고 싶은 사람❤ \n ✔️ 그 밖에 관심있는 누구나❤ \n \n JDM이 궁금하거나 문의사항이 있으시면 가입신청서 및 \n 아래의 *대표 번호*로 연락주시면 감사하겠습니다 😀 \n \n 2024년 함께할 당신을 기다립니다😊 \n \n *✅️대표:* 정민규(전기공학과 22학번) \n *✅️HP:* 010-4269-0332 \n *✅️인스타 ID:* jdm_gwnu');
INSERT INTO join_modal(club_id, contents) values (19, '안녕하세요!👋 \n 강릉원주대학교 원주캠퍼스 자작자동차 동아리 *''GHOST''*입니다. \n \n 동아리 홍보제에 앞서 저희와 함께할 *신입부원*을 찾습니다!✨ \n \n 내가 자동차에 관심이 있다!!👋 \n 혹은 설계에 조금이라도 관심이 있다!!👋 \n 운전하나는 내가 한 실력한다!!👋 \n 고스트와 함께 낭만있고 즐거운 추억을 만들어보고 싶다!😏 \n 정비를 쫌 알거나 아니면 배워보고 싶다!!👋 등등 \n \n *섀시 설계, 서스펜션, 파워트레인, 브레이크, 에어로* 파트에서 각자가 희망하는 분야에 있어 낭만 가득하고 열정 넘치는 전문성을 키우고 싶으신 강릉원주대 재학생 누구든 📣지원가능합니다!! \n \n 부서별 관심분야 or 재능있는분야에 아래 카카오톡으로 지원해주시면 양식 보내드리겠습니다.‼️ \n \n 양식에 맞게끔 자유롭게 기재해주세요! \n 1차 합격자 선발 후 면접 일정을 안내해드릴게요! \n \n *✔️모집 기간 :* 4월 1일 ~ 4월 3일 18:00시까지! \n *많은 관심 부탁!!드립니다.🎉* \n \n *회장 정의환:* 010-5374-9224 \n *부회장 김진토:* 010-2527-3560');
INSERT INTO join_modal(club_id, contents) values (20, '*📣2024년 학군사관 후보생 65기, 66기를 모집합니다.📣* \n \n *👉모집 기간:* 24. 03. 04(월)~''24. 04. 26(금) \n *👉지원 자격:* 1, 2학년 재/휴학생이라면 누구나 가능! \n *👉지원 방법:* 육군학생군사학교 홈페이지 (www.armyofficer.mil.kr)에 지원서 제출선발 \n \n *👉 세부 일정* \n *신체검사:* 3월 4일(월)~ 7월 5일(금) \n *인성검사:* 4월 29일(월)~ 5월 10일(금) \n *가서류, 체력인증서 제출:* 5월 1일(수) ~ 7월 31일(수) \n *AI면접:* 5월 13일(월)~ 6월 7일(금) \n *신원조사:* 5월 16일(목)~ 6월 7일(금) \n *합격자 발표:* 9월 13일(금) \n \n *😳학군사관 후보생 혜택!* \n 1. 강릉원주대 163학군단 사관후보생 기숙사 우선제공 혜택 보장 \n 2. 미 TEXAS A&M 대학 어학연수 선발 기회제공 \n 3. 다양한 국·내외 전사적지 탐방 프로그램 지원 \n 4. 단기 복무장교 장려금 지급 1200만원(2024년 기준), 매년 증진 예정 \n 5. 2년간 매월 부교재비 지원 (2년간 총 163만원) \n 6. 학기 중 학군생활지원금 지급(월 18만원) \n 7. 매학기 우수후보생 장학금 지급 \n 8. 학군사관 후보생증 발급을 통해 군마트(px) 및 육군 휴양시설 이용가능 및 문화 공연 등 협약된 업체 할인 혜택 \n \n 궁금한 것이 있으시다면 인스타그램 DM 또는 카카오톡 오픈채팅 방을 통해 연락해주시면, 친절하고 자세하게 답변해 드리겠습니다! \n \n *📞지원문의* \n *학군단 행정실 : 033-640-2650*');

-- 가입 모달 이미지
INSERT INTO join_modal_image(club_id, url) values (1, '1_1.jpg'), (1, '1_2.jpeg'), (1, '1_3.jpeg');
INSERT INTO join_modal_image(club_id, url) values (2, '2_1.jpeg'), (2, '2_2.jpeg'), (2, '2_3.jpeg'), (2, '2_4.jpeg');
INSERT INTO join_modal_image(club_id, url) values (6, '6_1.jpeg'), (6, '6_2.jpeg'), (6, '6_3.jpeg');
INSERT INTO join_modal_image(club_id, url) values (7, '7_1.jpeg');
INSERT INTO join_modal_image(club_id, url) values (17, '17_1.png'), (17, '17_2.png'), (17, '17_3.png');
INSERT INTO join_modal_image(club_id, url) values (18, '18_1.jpeg');
INSERT INTO join_modal_image(club_id, url) values (19, '19_1.jpeg'), (19, '19_2.jpeg'), (19, '19_3.jpeg');
INSERT INTO join_modal_image(club_id, url) values (20, '20_1.png'), (20, '20_2.jpeg'), (20, '20_3.jpeg');

-- 가입 모달 Url
INSERT INTO join_paths_url(club_id, url) values (1, 'https://form.naver.com/response/JEMUf_nDTieSnZ3QUEJr8w'), (1, 'false'), (1, 'false'), (1, 'https://www.instagram.com/gwnu_eum_wonju?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==');
INSERT INTO join_paths_url(club_id, url) values (2, 'false'), (2, 'false'), (2, 'https://open.kakao.com/o/suF9FQ6f'), (2, 'https://www.instagram.com/gwnu.lucius?igsh=YXJkemI4MGR6YzBx');
INSERT INTO join_paths_url(club_id, url) values (6, 'false'), (6, 'false'), (6, 'https://open.kakao.com/o/stCIT76f'), (6, 'false');
INSERT INTO join_paths_url(club_id, url) values (7, 'false'), (7, 'false'), (7, 'https://open.kakao.com/o/sRMxcHPe'), (7, 'false');
INSERT INTO join_paths_url(club_id, url) values (17, 'false'), (17, 'https://docs.google.com/forms/d/e/1FAIpQLSeF8k04RYHvAuYFcCMRywMcxnV4u1ECOEaUq3LBPco9B_1p4g/viewform'), (17, 'https://open.kakao.com/o/shfsWxPc'), (17, 'https://www.instagram.com/ccc_gwnu?igsh=dGVoOXk5azNibndu');
INSERT INTO join_paths_url(club_id, url) values (18, 'https://naver.me/G7ZOdikv'), (18, 'false'), (18, 'false'), (18, 'https://www.instagram.com/jdm_gwnu');
INSERT INTO join_paths_url(club_id, url) values (19, 'false'), (19, 'false'), (19, 'https://open.kakao.com/o/sm1BFvig'), (19, 'false');
INSERT INTO join_paths_url(club_id, url) values (20, 'false'), (20, 'false'), (20, 'https://open.kakao.com/o/g3Ii8A5e'), (20, 'https://instagram.com/gwnu_163rotc?');

-- 부스 동아리 day1
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (1, 1, '1_1.jpg', '', 1, '중앙부스', 'booth', '2024-04-01 10:00', '2024-04-01 18:00', '운영중');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (3, 5, '5_1.png', '', 1, '중앙부스', 'booth', '2024-04-01 11:00', '2024-04-01 14:00', '혼잡');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (6, 12, '12_1.png', '12.jpg', 1, '중앙부스', 'booth', '2024-04-01 10:00', '2024-04-01 18:00', '일시중지');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (7, 14, '14_1.png', '', 1, '중앙부스', 'booth', '2024-04-01 10:00', '2024-04-01 18:00', '조기마감');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (8, 17, '17_1.jpeg', 'ccc.jpeg', 1, '중앙부스', 'booth', '2024-04-01 10:00', '2024-04-01 17:00', '운영중');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (9, 18, '18_1.png', 'jdm.jpeg', 1, '중앙부스', 'booth', '2024-04-01 10:00', '2024-04-01 17:00', '운영중');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (10, 19, '19_1.jpeg', 'ghost.png', 1, '중앙부스', 'booth', '2024-04-01 10:00', '2024-04-01 17:00', '조기마감');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (11, 20, '20_1.jpeg', '', 1, '중앙부스', 'booth', '2024-04-01 10:00', '2024-04-01 17:00', '일시중지');

-- 부스 동아리 day2
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (12, 1, '1_1.jpg', '', 1, '중앙부스', 'booth', '2024-04-02 10:00', '2024-04-02 18:00', '운영중');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (17, 12, '12_1.png', '12.jpg', 1, '중앙부스', 'booth', '2024-04-02 10:00', '2024-04-02 18:00', '운영중');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (18, 14, '14_1.png', '', 1, '중앙부스', 'booth', '2024-04-02 10:00', '2024-04-02 18:00', '운영중');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (19, 17, '17_1.jpeg', 'ccc.jpeg', 1, '중앙부스', 'booth', '2024-04-02 10:00', '2024-04-01 17:00', '운영중');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (20, 18, '18_1.png', 'jdm.jpeg', 1, '중앙부스', 'booth', '2024-04-02 10:00', '2024-04-02 17:00', '운영중');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (21, 19, '19_1.jpeg', 'ghost.png', 1, '중앙부스', 'booth', '2024-04-02 10:00', '2024-04-02 17:00', '운영중');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (22, 20, '20_1.jpeg', '', 1, '중앙부스', 'booth', '2024-04-02 10:00', '2024-04-02 17:00', '운영중');

-- 부스 동아리 day3
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (23, 2, '2_1.jpeg', '', 1, '연화홀', 'performance', '2024-04-03 18:00', '2024-04-03 21:00', '');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (24, 3, '3_1.jpeg', '', 1, '연화홀', 'performance', '2024-04-03 18:00', '2024-04-03 21:00', '');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (25, 4, '4_1.png', 'ph.jpeg', 2, '연화홀', 'performance', '2024-04-03 18:00', '2024-04-03 21:00', '');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (26, 6, '6_1.png', 'new.jpeg', 2, '연화홀', 'performance', '2024-04-03 18:00', '2024-04-03 21:00', '');
INSERT INTO schedule(schedule_id, club_id, icon_url, image_url, part, location, category, event_time, event_end_time, status) values (27, 21, '21_1.png', 'ego.jpeg', 2, '연화홀', 'performance', '2024-04-03 18:00', '2024-04-03 21:00', '');