'use strict';
// Keep this published v2 photo order stable for dated share links.
const photosA_v2 = [
 {
  "id": "daily2-namsan",
  "image": "daily2-namsan",
  "alt": "A wooded city skyline with a low mountain and a slender mast on its summit",
  "prompt": "Which wooded mountain is crowned by a needle-like observation tower in central Seoul?",
  "choices": [
   "Namsan",
   "Bukhansan",
   "Gwanaksan"
  ],
  "correct": 0,
  "ko": "남산",
  "fact": "Namsan rises over central Seoul. Its summit is home to N Seoul Tower; the lower Seoul Tower Plaza and the upper observatory are different parts of the complex.",
  "file": "Namsan_Tower.jpg",
  "author": "Café Bene",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
  "city": "서울",
  "name": "Namsan",
  "factUrl": "https://english.visitseoul.net/attractions/N-Seoul-Tower/ENP000036"
 },
 {
  "id": "daily2-bukchon",
  "image": "daily2-bukchon",
  "alt": "A paved lane climbing between two rows of tiled roofs, patterned brick walls and wooden eaves",
  "prompt": "Which Seoul neighborhood preserves residential lanes like this one between two royal palaces?",
  "choices": [
   "Ikseon-dong Hanok Street",
   "Bukchon Hanok Village",
   "Namsangol Hanok Village"
  ],
  "correct": 1,
  "ko": "북촌한옥마을",
  "fact": "Bukchon sits between Gyeongbokgung and Changdeokgung. It is a lived-in neighborhood, so speak quietly, keep out of private doorways and check signs for visitor restrictions.",
  "file": "Bukchon-ro_11-gil_street_with_hanok_houses_in_Bukchon_Hanok_Village_Seoul.jpg",
  "author": "Basile Morin",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
  "city": "서울",
  "name": "Bukchon Hanok Village",
  "factUrl": "https://english.visitseoul.net/attractions/Bukchon%20Hanok%20Village_/263"
 },
 {
  "id": "daily2-cheonggyecheon",
  "image": "daily2-cheonggyecheon",
  "alt": "A stone arch bridge above an urban channel with stepped banks and office towers",
  "prompt": "Which Seoul stream has pedestrian paths below street level like the ones in this picture?",
  "choices": [
   "Seongbukcheon",
   "Yangjaecheon",
   "Cheonggyecheon"
  ],
  "correct": 2,
  "ko": "청계천",
  "fact": "Start at Cheonggye Plaza and follow the lower path beside the water. Stone bridges and steps frame the view back up to the city.",
  "file": "Cheonggyecheon,_Seoul_-_Cheonggyecheon2321.jpg",
  "author": "lumoplank",
  "license": "CC0",
  "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
  "city": "서울",
  "name": "Cheonggyecheon",
  "factUrl": "https://english.visitseoul.net/editorspicks/2026-Cheonggyecheon/ENNazl2lr"
 },
 {
  "id": "daily2-myeongdong",
  "image": "daily2-myeongdong",
  "alt": "A Gothic church facade with red brick, pointed arches and a narrow central spire",
  "prompt": "Which Seoul cathedral is known for its red-brick Gothic facade?",
  "choices": [
   "Myeongdong Cathedral",
   "Seoul Anglican Cathedral",
   "Jeondong Cathedral"
  ],
  "correct": 0,
  "ko": "명동성당",
  "fact": "Myeongdong Cathedral was completed in 1898. After taking in the brick arches out front, look behind the church for St. Mary’s Garden.",
  "file": "Myeongdong_Cathedral_front.jpg",
  "author": "Tristan Surtel",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
  "city": "서울",
  "name": "Myeongdong Cathedral",
  "factUrl": "https://english.visitseoul.net/attractions/Myeongdong-Cathedral/ENP004036"
 },
 {
  "id": "daily2-culturestation",
  "image": "daily2-culturestation",
  "alt": "Tall stone columns and an arched window over the entrance of a historic brick building",
  "prompt": "What is the name of the cultural venue in the former Seoul railway station?",
  "choices": [
   "Seoul Museum of History",
   "Culture Station Seoul 284",
   "Dongdaemun Design Plaza"
  ],
  "correct": 1,
  "ko": "문화역서울284",
  "fact": "The former railway station reopened as an arts and culture venue in 2011. For train departures, look for the separate modern station building next door.",
  "file": "Seoul_Station_Building_1925_front_20240219.jpg",
  "author": "Sean Young (@assanges)",
  "license": "CC BY 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
  "city": "서울",
  "name": "Culture Station Seoul 284",
  "factUrl": "https://www.seoul284.org/eng"
 },
 {
  "id": "daily2-seoul-library",
  "image": "daily2-seoul-library",
  "alt": "A gray stone civic building with tall rectangular windows and a broad entrance",
  "prompt": "The former Seoul City Hall is shown here. What is the old building used for now?",
  "choices": [
   "A railway museum",
   "A hotel",
   "Seoul Metropolitan Library"
  ],
  "correct": 2,
  "ko": "서울도서관",
  "fact": "The old Seoul City Hall was converted to the Seoul Metropolitan Library. The restored mayor’s office is inside the old building, not in the modern glass City Hall.",
  "file": "Seoul_City_Hall_01.jpg",
  "author": "SJ Yang",
  "license": "CC BY-SA 2.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
  "city": "서울",
  "name": "Seoul Metropolitan Library",
  "factUrl": "https://english.seoul.go.kr/city-hall/overview-city-hall/3-seoul-metropolitan-library/"
 },
 {
  "id": "daily2-bosingak",
  "image": "daily2-bosingak",
  "alt": "A large bronze bell with a green patina and raised decorative bands",
  "prompt": "Which historic bell used to mark the hours in Seoul’s Jongno district?",
  "choices": [
   "Bosingak Bronze Bell",
   "The Bell of King Seongdeok",
   "The Bell of Sangwonsa"
  ],
  "correct": 0,
  "ko": "옛 보신각 동종",
  "fact": "The 1468 bronze bell once announced the city curfew. The original now stands at the National Museum of Korea; the bell at Bosingak Pavilion is a replacement.",
  "file": "Bosingak_Bell,_Joseon_Dynasty,_1468_(17843788522).jpg",
  "author": "Gary Todd",
  "license": "CC0",
  "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
  "city": "서울",
  "name": "Old Bosingak Bronze Bell",
  "factUrl": "https://www.museum.go.kr/ENG/contents/E0403000000.do?relicId=4325&schM=view&searchId=represent"
 },
 {
  "id": "daily2-jongmyo",
  "image": "daily2-jongmyo",
  "alt": "A long red timber building under a tiled roof, beside a grassy courtyard",
  "prompt": "At which Confucian royal shrine is this long timber building?",
  "choices": [
   "Sajikdan Altar",
   "Jongmyo Shrine",
   "Seolleung Royal Tomb"
  ],
  "correct": 1,
  "ko": "종묘",
  "fact": "Jongmyo housed ancestral tablets of Joseon royalty. Its main shrine is called Jeongjeon; look for its long, restrained roofline inside the complex.",
  "file": "Jongmyo_Shrine_06.jpg",
  "author": "Bernard Gagnon",
  "license": "CC0",
  "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
  "city": "서울",
  "name": "Jongmyo Shrine",
  "factUrl": "https://whc.unesco.org/en/list/738"
 },
 {
  "id": "daily2-namhansanseong",
  "image": "daily2-namhansanseong",
  "alt": "A tiled gatehouse on a stone wall, flanked by wooded slopes",
  "prompt": "Which Gyeonggi fortress served as a planned refuge for the Joseon capital?",
  "choices": [
   "Suwon Hwaseong Fortress",
   "Namhansanseong",
   "Haemieupseong Fortress"
  ],
  "correct": 1,
  "ko": "남한산성",
  "fact": "Built as a mountain stronghold and emergency capital, Namhansanseong follows a steep ridge. The photo shows its South Gate, one of the entry points through the walls.",
  "file": "남한산성_남문.jpg",
  "author": "Jocelyndurrey",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
  "city": "광주시",
  "name": "Namhansanseong South Gate",
  "factUrl": "https://whc.unesco.org/en/list/1439"
 }
];
const photosB_v2 = [
 {
  "id": "daily2-paldalmun",
  "image": "daily2-paldalmun",
  "alt": "A two-tier timber gate over a stone arch on a curved defensive wall",
  "prompt": "Which fortress gate is shown here?",
  "choices": [
   "Janganmun Gate",
   "Paldalmun Gate",
   "Hwaseomun Gate"
  ],
  "correct": 1,
  "ko": "팔달문",
  "fact": "This is the south gate of Suwon’s Hwaseong Fortress. The curved stone wall in front protected the main entrance.",
  "file": "Paldalmun_hwaseong_suwon.JPG",
  "author": "Kbarends",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
  "city": "수원",
  "name": "Paldalmun Gate",
  "factUrl": "https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=108767"
 },
 {
  "id": "daily2-jeongbang",
  "image": "daily2-jeongbang",
  "alt": "A waterfall plunging from a dark cliff to a rocky shore",
  "prompt": "Which Jeju waterfall is this?",
  "choices": [
   "Cheonjeyeon Falls",
   "Cheonjiyeon Falls",
   "Jeongbang Falls"
  ],
  "correct": 2,
  "ko": "정방폭포",
  "fact": "The falls reach the sea at Seogwipo. Look for the coastal rocks at the foot of the cliff rather than an inland pool.",
  "file": "Jeongbang.jpg",
  "author": "Lcarrion88",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
  "city": "서귀포",
  "name": "Jeongbang Falls",
  "factUrl": "https://english.visitkorea.or.kr/svc/whereToGo/hdrdslt/hdrdsltView.do?crsSn=289607"
 },
 {
  "id": "daily2-jeonju-hanok",
  "image": "daily2-jeonju-hanok",
  "alt": "Curved tile roofs clustered on a slope, with hills in the distance",
  "prompt": "Which neighborhood is known for this cluster of traditional roofs?",
  "choices": [
   "Jeonju Hanok Village",
   "Hahoe Folk Village",
   "Yangdong Folk Village"
  ],
  "correct": 0,
  "ko": "전주 한옥마을",
  "fact": "A view from uphill makes the layered roof ridges stand out. Down in the lanes, everyday shops and homes sit close to the historic buildings.",
  "file": "Jeonju-_Part_I_-_Jeonju3120.jpg",
  "author": "lumoplank",
  "license": "CC0 1.0",
  "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
  "city": "전주",
  "name": "Jeonju Hanok Village",
  "factUrl": "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=110848"
 },
 {
  "id": "daily2-suncheon-bay",
  "image": "daily2-suncheon-bay",
  "alt": "A winding tidal channel between green marsh and exposed mud",
  "prompt": "Which wetland is this?",
  "choices": [
   "Upo Wetland",
   "Suncheon Bay Wetland",
   "Sorae Marsh"
  ],
  "correct": 1,
  "ko": "순천만습지",
  "fact": "Suncheon Bay is tidal, so the amount of exposed mud changes throughout the day. From above, the winding channels are especially easy to see.",
  "file": "Suncheon_Ecological_Bay-_순천만습지.jpg",
  "author": "Joycekim77",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
  "city": "순천",
  "name": "Suncheon Bay Wetland",
  "factUrl": "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=96951"
 },
 {
  "id": "daily2-juknokwon",
  "image": "daily2-juknokwon",
  "alt": "Slender stalks and dense leaves arching toward a bright patch of sky",
  "prompt": "Which bamboo garden is this?",
  "choices": [
   "Juknokwon, Damyang",
   "Taehwagang Bamboo Grove, Ulsan",
   "Ahopsan Forest, Busan"
  ],
  "correct": 0,
  "ko": "죽녹원",
  "fact": "Juknokwon has a network of shaded walking trails beneath the bamboo. Looking up shows how the thin trunks converge overhead.",
  "file": "Bamboo_forest_in_Damyang_South_Korea_2015-05-06(5).jpg",
  "author": "Mar del Este",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
  "city": "담양",
  "name": "Juknokwon, Damyang",
  "factUrl": "https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=93987"
 },
 {
  "id": "daily2-ojukheon",
  "image": "daily2-ojukheon",
  "alt": "A low wooden house with a wide curved tile roof above a courtyard",
  "prompt": "Which historic house is pictured here?",
  "choices": [
   "Unhyeongung",
   "Seongyojang",
   "Ojukheon House"
  ],
  "correct": 2,
  "ko": "오죽헌",
  "fact": "This early Joseon house is the birthplace of the scholar Yi I, whose portrait is on South Korea’s 5,000-won note.",
  "file": "Dogilrobot_ojukheon.jpg",
  "author": "DogilRobot",
  "license": "CC0 1.0",
  "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
  "city": "강릉",
  "name": "Ojukheon House",
  "factUrl": "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=224461"
 },
 {
  "id": "daily2-ulsanbawi",
  "image": "daily2-ulsanbawi",
  "alt": "Pale rock peaks rising behind dark trees against a blue sky",
  "prompt": "Which rock formation is shown here?",
  "choices": [
   "Ulsanbawi Rock",
   "Biseondae Rock",
   "Maisan’s Twin Peaks"
  ],
  "correct": 0,
  "ko": "설악산 울산바위",
  "fact": "The pale ridge is an exposed granite formation in Seoraksan National Park. You can see the ridge from below without climbing to its summit.",
  "file": "Ulsanbawi_Rock.jpg",
  "author": "Lcarrion88",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
  "city": "속초",
  "name": "Ulsanbawi Rock",
  "factUrl": "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=351&vcontsId=110952"
 },
 {
  "id": "daily2-gijang-shore",
  "image": "daily2-gijang-shore",
  "alt": "Foamy waves wash over jagged rocks at the shoreline",
  "prompt": "This rock-strewn shore is below a seaside temple in northeast Busan. Which spot is it?",
  "choices": [
   "Taejongdae cliffs",
   "Shore below Haedong Yonggungsa",
   "Dadaepo Beach"
  ],
  "correct": 1,
  "ko": "해동용궁사 앞 기장 해안",
  "fact": "This rocky shoreline lies below Haedong Yonggungsa in Gijang. You can watch waves break over the rocks from the established paths.",
  "file": "Haedong_Yonggungsa_Temple,_Busan_-_HaedongYonggungsa2706.jpg",
  "author": "lumoplank",
  "license": "CC0 1.0",
  "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
  "city": "부산",
  "name": "Shore below Haedong Yonggungsa",
  "cropped": true,
  "factUrl": "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=225799"
 },
 {
  "id": "daily2-namhae-geumsan",
  "image": "daily2-namhae-geumsan",
  "alt": "Green ridges slope toward a hazy sea dotted with small islands",
  "prompt": "Which mountain on the south coast overlooks these islands?",
  "choices": [
   "Daedunsan in Wanju",
   "Wolchulsan in Yeongam",
   "Geumsan on Namhae Island"
  ],
  "correct": 2,
  "ko": "남해 금산",
  "fact": "This view looks down from the area around Boriam Hermitage on Geumsan. Look for overlapping green ridges and small South Sea islands on a clear day.",
  "file": "Boriam.jpg",
  "author": "Pediagaller",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
  "city": "남해",
  "name": "Geumsan on Namhae Island",
  "cropped": true,
  "factUrl": "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=73013"
 }
];
