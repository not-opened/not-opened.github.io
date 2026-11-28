'use strict';
// Keep this published v2 question order stable for dated share links.
const travel_v2 = [
 [
  "Which Seoul airport is a common starting point for domestic flights to Jeju?",
  "Gimpo International Airport",
  "Gimhae International Airport",
  "Daegu International Airport",
  "Gimpo is the Seoul airport used for many flights to Jeju; Gimhae serves Busan. Read the airport name on the booking before planning your ride.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=483&vcontsId=140669"
 ],
 [
  "What is Seoul’s Ttareungi service?",
  "Public bike rental",
  "An express airport bus",
  "A subway accessibility service",
  "Ttareungi is Seoul’s bike-share system. Find a rental location in the Seoul Bike app before heading to the river.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140662"
 ],
 [
  "If you left your headphones on the plane at Incheon, whom should you contact first?",
  "Your airline",
  "The airport railroad operator",
  "The city tourist office",
  "Incheon’s airport lost-and-found office covers the terminal, while airlines handle things left aboard. Have your flight number and seat number handy.",
  "https://business.airport.kr/ap_en/1549/subview.do"
 ],
 [
  "Which station is the Seoul departure point for SRT services to Busan or Mokpo?",
  "Suseo Station",
  "Seoul Station",
  "Yongsan Station",
  "SRT departs from Suseo in Seoul. Check the station name and service on your ticket before heading out.",
  "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?menuSn=470&vcontsId=140656"
 ],
 [
  "Which Korea Tourism Organization tool narrates the history of attractions?",
  "Odii",
  "KORAIL+",
  "Seoul Bike",
  "Odii is an audio guide for major sights. Look up the site in advance to see whether a narration is available in your language.",
  "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=198570"
 ],
 [
  "Which South Korean city has an international passenger ferry terminal for sailings to Japan?",
  "Busan",
  "Daejeon",
  "Gyeongju",
  "Busan’s international passenger terminal serves ferry routes to Japan. Check the operator’s route and current schedule before you plan around one.",
  "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140653"
 ],
 [
  "What can the T-luggage service help you do while you sightsee?",
  "Store bags at participating locations",
  "Reserve a train seat",
  "Rent a city bike",
  "T-luggage offers storage and delivery. Check which location accepts your suitcase size and whether you need a reservation.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=654&vcontsId=200418"
 ],
 [
  "What is an Incheon Airport Limousine route?",
  "An airport bus route",
  "A nonstop airport rail service",
  "A prearranged private car only",
  "Airport Limousine services use buses. Look up the route number and the stop nearest your accommodation rather than choosing by destination district alone.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=177&vcontsId=140654"
 ],
 [
  "Which rail line is named for and runs to an East Coast city from Seoul?",
  "Gangneung Line",
  "Honam Line",
  "Gyeongbu Line",
  "The Gangneung Line runs east to Gangneung. Check your exact departure station and which stops your selected train serves.",
  "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?menuSn=470&vcontsId=140656"
 ],
 [
  "What kind of routes does the Jeju Olle network offer?",
  "Walking trails",
  "Roads reserved for rental cars",
  "Ferry routes between islands",
  "Olle is a walking trail network on Jeju. Pick a numbered route and save its start and finish points before setting out.",
  "https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=1566935"
 ],
 [
  "Which pair of apps does the Korea Tourism Organization list for local directions?",
  "NAVER Map and KakaoMap",
  "Papago and Odii",
  "KORAIL+ and Seoul Bike",
  "NAVER Map and KakaoMap can show public transit and walking directions. Save your hotel’s exact address in Korean for a more precise search.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?dataSetId=299&menuSn=745&vcontsId=1594983"
 ],
 [
  "What should you keep for a general tourist tax refund on an eligible purchase?",
  "The tax-refund voucher",
  "Only the store’s shopping bag",
  "Your last subway receipt",
  "Ask the participating shop whether it issues a refund voucher, and keep it with the receipt. Check the instructions for the method the shop uses.",
  "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=248765"
 ],
 [
  "What makes a Mugunghwa service useful for some smaller stops?",
  "It stops at some stations that express trains skip",
  "It takes luggage to your hotel separately",
  "It runs only as an overnight sleeper",
  "Mugunghwa trains call at some smaller stations bypassed by faster services. Search for the exact destination station instead of filtering for express trains.",
  "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?menuSn=470&vcontsId=140656"
 ],
 [
  "What should you check together before choosing a Korean national park hike?",
  "Weather, route and expected walking time",
  "Only the park’s name",
  "Only the distance to the nearest city",
  "A short distance can still be demanding. Choose a course you can finish in daylight and check the forecast and route before leaving.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=177&vcontsId=1594888"
 ],
 [
  "Which type of taxi is designed for travelers who need a driver who speaks a foreign language?",
  "An international taxi",
  "Any taxi with a black body",
  "Any taxi with a meter",
  "Seoul’s international taxi service is designed to help visitors communicate with drivers. If you book one, request the language you need.",
  "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140661"
 ],
 [
  "What may some ferries to Jeju carry in addition to passengers?",
  "Cars or motorcycles",
  "Only bicycles",
  "Railway carriages",
  "Some Jeju ferries carry passenger cars or motorcycles. Check the specific sailing and vehicle-booking requirements before going to the port.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=483&vcontsId=140669"
 ],
 [
  "What can you download from the official Korea Guides & Maps collection?",
  "Regional visitor maps and guidebooks",
  "Reserved train seat assignments",
  "Hotel room keys",
  "Download a regional map before leaving Wi-Fi so you can check the area offline and use your map app for live directions when connected.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=1591546"
 ],
 [
  "Which sightseeing option follows a route chosen to visit several city attractions?",
  "A city tour bus",
  "A train reserved for airport passengers",
  "An intercity overnight coach",
  "City tour bus routes group attractions into a sightseeing circuit. Check the operator’s stop list before choosing a route.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=481&vcontsId=140665"
 ],
 [
  "Which train-booking step lets you try to sit next to a companion?",
  "Choose available seats on the seat map",
  "Tap twice at the departure gate",
  "Pick any empty seat after boarding",
  "Where the booking system offers a seat map, select two available seats together and check both assignments before paying.",
  "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?menuSn=470&vcontsId=140656"
 ],
 [
  "Which number is for fire or ambulance emergencies within South Korea?",
  "119",
  "112",
  "1330",
  "Dial 119 in South Korea for fire or ambulance help. Give your exact location, such as a building name or a street address.",
  "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140042"
 ]
];
