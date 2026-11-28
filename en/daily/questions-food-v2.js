'use strict';
// Keep this published v2 question order stable for dated share links.
const food_v2 = [
 [
  "A barbecue menu lists a price per 1인분. What is that price for?",
  "One serving",
  "One table",
  "One grill refill",
  "Inbun measures portions per person. A price per 1인분 is not the total for your group; check whether the restaurant has a minimum order.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=70759&nation=eng"
 ],
 [
  "Which menu item should you order for a plain bowl of rice with your stew?",
  "공깃밥 (gonggitbap)",
  "만둣국 (mandutguk)",
  "칼국수 (kalguksu)",
  "Gonggitbap is rice served in a bowl. Look for it among the add-ons if rice is not already included with your stew.",
  "https://krdict.korean.go.kr/m/eng/searchResultView?ParaWordNo=600046&nation=eng&nationCode=6"
 ],
 [
  "A sign by a restaurant’s water dispenser says 셀프. What should you do?",
  "Get your own water",
  "Wait for a server to bring water",
  "Ask the cashier to open the dispenser",
  "Selpeu is short for self-service. At the water station, fill a cup yourself rather than waiting at the table.",
  "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=74834"
 ],
 [
  "What are you adding to a stew if you order 라면 사리 (ramyeon sari)?",
  "An extra portion of ramen noodles",
  "A separate bowl of ramen soup",
  "Extra seasoning for the broth",
  "Sari is an add-on. Ramyeon sari gives you noodles to cook in the dish you ordered, not a separate bowl of soup.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=231545"
 ],
 [
  "What is usually tucked inside the chicken in samgyetang?",
  "Glutinous rice",
  "Glass noodles",
  "Chopped cabbage",
  "Samgyetang is a ginseng chicken soup. Open the chicken to find the glutinous rice, then stir a little of it into the broth.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=904&vcontsId=221334"
 ],
 [
  "What makes the chilled broth in kongguksu creamy?",
  "Ground soybeans",
  "Coconut milk",
  "Mashed potatoes",
  "Kongguksu gets its creamy texture from soybeans. Taste the cold broth before adding any salt or sugar.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=1591808"
 ],
 [
  "You want cold noodles served in plenty of broth. Which menu option fits?",
  "Mulnaengmyeon",
  "Bibimnaengmyeon",
  "Hot kalguksu",
  "The mul version of naengmyeon comes in chilled broth. Bibimnaengmyeon is tossed with a spicy sauce instead.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=219&vcontsId=1591808"
 ],
 [
  "What does kal in kalguksu refer to?",
  "The knife used to cut the noodles",
  "The pot used to heat the broth",
  "The clams in the soup",
  "Kal means knife. It describes how the noodles are cut, not the broth flavor: clam and other versions can all be kalguksu.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=221280"
 ],
 [
  "What gives sundubu jjigae its name?",
  "Soft tofu",
  "Soybean sprouts",
  "Thinly sliced fish cake",
  "Sundubu is soft tofu. The stock and other ingredients can include meat or seafood, so check the broth if you avoid either.",
  "https://english.visitkorea.or.kr/public/asis/upload/Muslim-friendly_restaurants.pdf"
 ],
 [
  "Which meat is the main ingredient in dakgalbi?",
  "Chicken",
  "Beef short ribs",
  "Pork belly",
  "Dak means chicken. Dakgalbi is typically stir-fried with vegetables and a spicy sauce, often on a wide pan at the table.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?dataSetId=12&menuSn=745&vcontsId=1595365"
 ],
 [
  "Which stew is known for including sausage and ham?",
  "Budae jjigae",
  "Sundubu jjigae",
  "Gamjatang",
  "Often called army stew, budae jjigae typically combines sausage or ham with ingredients such as kimchi and noodles in a shared pot.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?dataSetId=12&menuSn=745&vcontsId=1595365"
 ],
 [
  "Which soup is traditionally eaten on Lunar New Year in Korea?",
  "Tteokguk",
  "Samgyetang",
  "Gamjatang",
  "Tteokguk is soup with sliced rice cakes. It is a traditional Seollal dish, and the thin slices are easy to spot in the broth.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=231916"
 ],
 [
  "How is the crab in ganjang gejang prepared?",
  "Marinated in soy sauce",
  "Breaded and deep-fried",
  "Boiled in chili broth",
  "Ganjang means soy sauce. This is a marinated crab dish, not a cooked crab stew; it is commonly eaten with rice.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=904&vcontsId=221242"
 ],
 [
  "In gamjatang, what is the main meat ingredient?",
  "Pork backbone",
  "Beef brisket",
  "Chicken thighs",
  "Gamjatang can contain potatoes, but it is a stew made with pork bones. Look for meat on the bones rather than boneless slices.",
  "https://english.visitkorea.or.kr/svc/thingsToDo/foodTrip/special_view.do?vcontsId=182651"
 ],
 [
  "Which dish serves simmered pork slices with cabbage wraps or kimchi seasoning?",
  "Bossam",
  "Dakgalbi",
  "Samgyetang",
  "Bossam is served in slices rather than cooked by you at the table. Try a bite of the pork together with the cabbage or radish side.",
  "https://english.visitkorea.or.kr/svc/sp/food/ext/special_view.do?menuSn=913&vcontsId=178536"
 ],
 [
  "A stall sells fish-shaped bungeoppang. What is a traditional filling?",
  "Sweet red bean paste",
  "Seasoned minced fish",
  "Pickled radish",
  "The fish shape comes from the baking mold. Sweet red bean paste is classic, and custard is another filling you may see.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=219&vcontsId=1595642"
 ],
 [
  "A street stall serves eomuk skewers in hot broth. What is on the skewers?",
  "Fish cakes",
  "Rice cakes",
  "Grilled squid",
  "Eomuk is a fish cake made with ground fish. At a street stall, you may see it simmering on long sticks in broth.",
  "https://english.visitkorea.or.kr/svc/sp/food/ext/special_view.do?menuSn=913&vcontsId=178994"
 ],
 [
  "If you order samgyeopsal at a barbecue restaurant, which cut are you ordering?",
  "Pork belly",
  "Beef short ribs",
  "Pork shoulder",
  "Samgyeopsal is pork belly, often grilled at the table. Look for alternating layers of meat and fat in a slice.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=181&vcontsId=178546"
 ],
 [
  "What kind of seasoning is doenjang?",
  "Fermented soybean paste",
  "Red chili paste",
  "Toasted sesame oil",
  "Doenjang is a savory fermented soybean paste. Do not confuse it with gochujang, the red chili paste.",
  "https://www.hansik.or.kr/magazines/list/magazineDetail/30/3008?menuSn=429"
 ],
 [
  "Which topping does the pat in patbingsu point to?",
  "Red beans",
  "Mango",
  "Ground sesame",
  "Patbingsu is shaved ice topped with red beans. Other bingsu flavors can omit the beans, so look for pat if you want the classic topping.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=179939"
 ]
];
