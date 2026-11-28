'use strict';
// Keep this published v2 question order stable for dated share links.
const culture_v2 = [
 [
  "What does Jeongwol Daeboreum mark in the Korean lunar calendar?",
  "The first full moon of the year",
  "The first new moon of summer",
  "The last full moon before winter",
  "Jeongwol Daeboreum falls on the 15th day of the first lunar month. Look up that year's date rather than assuming it falls on January 15 on your calendar.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=1566965"
 ],
 [
  "Which dish is traditionally associated with Dongji, the winter solstice?",
  "Red bean porridge",
  "Pine-nut porridge",
  "Pumpkin porridge",
  "Dongji patjuk is red bean porridge with small rice-dough balls. If you try it, look for the round white dumplings called saealsim.",
  "https://folkency.nfm.go.kr/en/topic/detail/3649"
 ],
 [
  "Which event does South Korea commemorate on March 1?",
  "The 1919 Declaration of Independence",
  "The 1945 liberation from Japanese rule",
  "The proclamation of the republic in 1948",
  "March 1 remembers the 1919 declaration made under Japanese colonial rule. Do not confuse it with Liberation Day in August, which recalls the end of that rule in 1945.",
  "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140038"
 ],
 [
  "What do people carry in the Yeondeunghoe spring procession?",
  "Lanterns",
  "Kites",
  "Ceremonial fans",
  "Yeondeunghoe grew from celebrations of the Buddha's birthday and now welcomes the general public. Look for lotus-shaped lanterns hanging above the streets as well as the ones people carry.",
  "https://ich.unesco.org/en/RL/yeondeunghoe-lantern-lighting-festival-in-the-republic-of-korea-00882"
 ],
 [
  "What do players toss in yunnori, a traditional Korean board game?",
  "Four wooden sticks",
  "Two six-sided dice",
  "Three bronze coins",
  "The way the four sticks land determines how far a piece moves. Watch for all four rounded sides facing up: that result, mo, moves a piece five spaces.",
  "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=1567033"
 ],
 [
  "Which pairing typically performs a pansori story?",
  "A singer and a drummer",
  "Two zither players",
  "A flutist and a masked dancer",
  "One vocalist tells a story with a drummer. Even if you do not follow the Korean, listen for the shift between speech and singing and watch how the singer uses gestures.",
  "https://ich.unesco.org/en/RL/pansori-epic-chant-00070"
 ],
 [
  "In talchum, what can the audience do as the masked drama unfolds?",
  "Cheer or call out in response",
  "Choose the performers' masks by vote",
  "Play the final scene themselves",
  "Audience reactions are part of talchum, a tradition that brings together dance, music and theatre. Listen for how cheers and jeers punctuate the jokes.",
  "https://ich.unesco.org/en/decisions/17.com/7.b.22"
 ],
 [
  "What makes a traditional jultagi performance more than a balancing act?",
  "The rope walker banters with a clown below",
  "An archer shoots at a target from the rope",
  "Two walkers race on parallel ropes",
  "A jultagi walker trades jokes with a clown on the ground while musicians accompany the act. Watch both the figure on the rope and the performer below.",
  "https://ich.unesco.org/en/RL/jultagi-tightrope-walking-00448"
 ],
 [
  "Why is a Joseon moon jar called a moon jar?",
  "Its pale, rounded body recalls a full moon",
  "Its rim is carved with twelve crescent shapes",
  "It was made only during lunar eclipses",
  "Moon jars are large, rounded examples of late Joseon white porcelain. Instead of searching for a painted moon, step back and take in the silhouette of the whole jar.",
  "https://www.museum.go.kr/ENG/contents/E0401000000.do?relicRecommendId=519669&schM=view"
 ],
 [
  "How did Goryeo potters make the contrasting patterns on sanggam celadon?",
  "They filled cut patterns with clay of contrasting colors",
  "They painted designs on top of finished glaze",
  "They wrapped the vessels in patterned cloth",
  "Sanggam is an inlay technique. Look closely at the white and dark details: they are set into the body of the vessel, not brushed over a finished glaze.",
  "https://www.museum.go.kr/ENG/contents/E0202010000.do?exhiSpThemId=3581&listType=&menuId=current&schM=view"
 ],
 [
  "Why were paintings of tigers sometimes displayed in Joseon Korea?",
  "To ward off harmful spirits",
  "To indicate that a house sold medicines",
  "To record official hunting licenses",
  "The National Museum of Korea describes a protective role that tiger paintings sometimes played. In its painting of a stalking tiger, notice how the animal fills the space without the usual background elements.",
  "https://vcm.museum.go.kr/ENG/contents/E0403000000.do?relicId=2492&schM=view&searchId=represent"
 ],
 [
  "Which printing technique was used for the surviving 1377 volume of Jikji?",
  "Movable metal type",
  "Carved woodblock pages",
  "Lithography on stone",
  "Jikji was printed in Cheongju in the late Goryeo period. Think of reusable individual characters, not one carved block for a whole page.",
  "https://www.unesco.org/en/memory-world/baegun-hwasang-chorok-buljo-jikji-simche-yojeol-volii-second-volume-anthology-great-buddhist-priests"
 ],
 [
  "What can you look up in the Joseon Uigwe?",
  "How a royal ceremony was organized",
  "How to translate a foreign merchant's diary",
  "How provincial farmers priced their crops",
  "Uigwe documented and prescribed important state and royal events. Try the National Museum of Korea's royal wedding example to see how a record breaks a ceremony into specific stages.",
  "https://www.museum.go.kr/uigwe/intro/intro?introType=1_1&lang=en"
 ],
 [
  "What are the buildings called Janggyeong Panjeon at Haeinsa designed to hold?",
  "Wooden printing blocks for Buddhist scriptures",
  "Bronze bells from provincial temples",
  "Ceramic offerings from royal tombs",
  "Haeinsa holds the Tripitaka Koreana woodblocks. Look for the storage buildings' window openings, whose placement and size help air circulate around the blocks.",
  "https://whc.unesco.org/en/list/737"
 ],
 [
  "What were the prehistoric dolmens of Gochang, Hwasun and Ganghwa used for?",
  "Burials",
  "Grinding grain",
  "Marking a coastal trade route",
  "These megalithic tombs were built with large stone slabs. At a dolmen site, compare a raised capstone on upright supports with examples that sit much lower to the ground.",
  "https://whc.unesco.org/en/list/977/"
 ],
 [
  "Which city is enclosed in part by the walls of Hwaseong Fortress?",
  "Suwon",
  "Jeonju",
  "Gyeongju",
  "King Jeongjo built this late-Joseon fortress in Suwon. Trace the wall on a map and notice how it bends with the terrain rather than forming a simple rectangle.",
  "https://whc.unesco.org/en/list/817/"
 ],
 [
  "What was a silk bojagi traditionally used to do?",
  "Wrap belongings or gifts",
  "Hold water for washing",
  "Mark the start of a board game",
  "A bojagi is a wrapping cloth. Some versions use pieced fabric; the Smithsonian also documents using such cloths to cover food on a tray or table.",
  "https://www.si.edu/object/wrapping-cloth-bojagi%3Anmnhanthropology_8343143"
 ],
 [
  "Which plant provides the fiber for Hansan mosi?",
  "Ramie",
  "Flax",
  "Cotton",
  "Hansan weavers process ramie stems into yarn and weave it into fine cloth. If you see a weaving demonstration, look for the loom and remember that preparing the fiber comes well before it.",
  "https://ich.unesco.org/en/RL/weaving-of-mosi-fine-ramie-in-the-hansan-region-00453?RL=00453"
 ],
 [
  "Which traditional skill is associated with a daemokjang?",
  "Carpentry for wooden buildings",
  "Casting large bronze bells",
  "Glazing ceramic roof tiles",
  "Daemokjang refers to traditional wooden architecture and the master carpenters who build it. When you visit a traditional building, look up at the joints where beams meet.",
  "https://ich.unesco.org/en/decisions/5.COM/6.36"
 ],
 [
  "Who are honored in the royal ancestral ritual at Seoul's Jongmyo Shrine?",
  "Ancestors of the Joseon royal family",
  "Founders of the Goryeo kingdom",
  "Celebrated painters from the Silla kingdom",
  "This Confucian rite combines offerings with music and dance. In a recording, watch the dancers form rows while traditional instruments play.",
  "https://ich.unesco.org/doc/src/01857-EN.pdf"
 ]
];
