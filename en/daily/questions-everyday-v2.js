'use strict';
// Keep this published v2 question order stable for dated share links.
const everyday_v2 = [
 [
  "At a hotel desk, what are you saying with 예약했어요?",
  "I made a reservation",
  "I have checked out",
  "I paid in cash",
  "예약 is a reservation. 예약했어요 means you already booked; have the name on the booking ready.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=70599&nation=eng"
 ],
 [
  "What do you get if you ask a cashier for 영수증?",
  "A receipt",
  "A shopping bag",
  "A price tag",
  "영수증 is a receipt, not a bill waiting to be paid. Say 영수증 주세요 to ask for one.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=68406&nation=eng"
 ],
 [
  "An item on a touchscreen menu is marked 품절. What happened?",
  "It sold out",
  "It is the staff pick",
  "It has a shorter wait",
  "품절 means there is no stock left. At a kiosk, choose a different item if your first choice is marked 품절.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=88465&nation=eng"
 ],
 [
  "A shop notice says 월요일 휴무. What should you expect?",
  "Closed on Mondays",
  "Open only in the morning",
  "Open later on Mondays",
  "휴무 indicates time off or a day a business is closed. 월요일 means Monday, so plan your visit for another day.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=88431&nation=eng"
 ],
 [
  "A museum listing says 입장 무료. What does it say about entry?",
  "Admission is free",
  "Booking is required",
  "Children only",
  "무료 means free of charge. The opposite is 유료, meaning there is a charge.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=15324&nation=eng"
 ],
 [
  "A sign in a guesthouse hallway says 금연. What is prohibited?",
  "Smoking",
  "Eating",
  "Taking photographs",
  "금연 means no smoking in this context. You may also see 금연 구역, a nonsmoking area.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=60641&nation=eng"
 ],
 [
  "You left an umbrella on a bus. What does 분실물 mean on the operator’s website?",
  "Lost property",
  "Items for sale",
  "Unclaimed refunds",
  "분실물 means something that was lost. Look for 분실물 센터, a lost-property office, and note the route and approximate time.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=60211&nation=eng"
 ],
 [
  "On a late-night timetable, what is 막차?",
  "The last service",
  "The first service",
  "An express service",
  "막차 means the last bus or train for a route or direction. Check the time for your own stop, not just the route’s departure point.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=50034&nation=eng"
 ],
 [
  "A map says 버스 정류장. What is marked?",
  "A bus stop",
  "A taxi stand",
  "A subway platform",
  "정류장 is a stop. 버스 정류장 is the place where you wait for a bus, not necessarily a bus terminal.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=62519&nation=eng"
 ],
 [
  "At an attraction, what do you find at the 매표소?",
  "A ticket office",
  "An information board",
  "A cloakroom",
  "매표소 has the words for selling and tickets. Follow that sign if you need a ticket before entering.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=55219&nation=eng"
 ],
 [
  "A market stall says 현금만. Which payment does the sign mean?",
  "Cash only",
  "Card only",
  "Exact change only",
  "현금 means cash, and 만 means only. 현금만 되나요? is a way to check whether cash is the only option.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=73071&nation=eng"
 ],
 [
  "What are you asking about if you say 환불이 되나요? after a purchase?",
  "Whether you can get a refund",
  "Whether you can pay in installments",
  "Whether there is a discount",
  "환불 means getting your money back. The question asks what is possible; it does not imply that refunds are guaranteed.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=89036&nation=eng"
 ],
 [
  "Two friends ask to pay 따로 at a cafe. What are they requesting?",
  "To pay separately",
  "To pay later",
  "To pay in advance",
  "따로 means separately. 따로 계산할 수 있을까요? asks whether you can pay separately; check with the cashier first.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=49672&nation=eng"
 ],
 [
  "What are you asking with 천천히 말씀해 주세요?",
  "Please speak slowly",
  "Please write it down",
  "Please show me the map",
  "천천히 means slowly. The full phrase is a polite way to ask someone to speak at a slower pace.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=26902&nation=eng"
 ],
 [
  "A navigation message says 좌회전. What should you do?",
  "Turn left",
  "Turn right",
  "Continue straight",
  "좌회전 is a left turn. 좌 means left here, and the corresponding right turn is 우회전.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=90786&nation=eng"
 ],
 [
  "Someone says 신호등에서 만나자 when suggesting a meeting spot. Where?",
  "At the traffic light",
  "At the ticket office",
  "At the station entrance",
  "신호등 means a traffic light. -에서 marks where the meeting happens; agree which corner if the intersection is large.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=66279&nation=eng"
 ],
 [
  "You are struggling with a kiosk. What are you asking with 좀 도와주실 수 있나요?",
  "Could you help me?",
  "May I go first?",
  "Could you wait here?",
  "도와 is a form of 돕다, meaning to help. Adding 좀 makes this request sound a little less abrupt.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=17203&nation=eng"
 ],
 [
  "What does 잠깐만요 usually ask someone to do?",
  "Wait a moment",
  "Come closer",
  "Go ahead",
  "잠깐 means a short while, and 잠깐만요 politely asks for just a moment. Use it when you need a second to check something.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=57312&nation=eng"
 ],
 [
  "On a cafe’s sign, which information does 영업시간 introduce?",
  "Opening hours",
  "Holiday prices",
  "Recommended drinks",
  "영업시간 tells you when a business operates. If a kitchen lists a separate last-order time, check that too.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=21937&nation=eng"
 ],
 [
  "A station notice says 계단을 이용해 주세요. Which route is it asking you to take?",
  "The stairs",
  "The elevator",
  "The escalator",
  "계단 means stairs and 이용해 주세요 means please use. If you need an elevator, look for 엘리베이터 instead.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=23937&nation=eng"
 ]
];
