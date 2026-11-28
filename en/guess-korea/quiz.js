'use strict';
const GUIDE = 'https://commons.wikimedia.org/wiki/File:';
const items = [
 {id:'ge3mCCl4L3g', image:'wolji', alt:'A wooden pavilion with a curved tiled roof beside a large pond', prompt:'Which Gyeongju landmark is this?', choices:['Woljeonggyo Bridge','Donggung Palace and Wolji Pond','Gyeongju National Museum'], correct:1, ko:'동궁과 월지', fact:'Wolji was the pond of a secondary Silla palace. The traditional pavilions and their reflections make it a memorable evening stop.', file:'Donggung_Palace_01.jpg'},
 {id:'2AlFOWdVcgs', image:'observatory', alt:'A short, rounded stone tower with a small rectangular opening', prompt:'What was this stone tower built for?', choices:['Watching the night sky','Guarding a city gate','Storing grain'], correct:0, name:'Cheomseongdae Observatory', ko:'첨성대', fact:'Cheomseongdae is a stone observatory from the Silla kingdom. Its rounded body is built from courses of cut stone.', file:'Cheomseongdae_Observatory_01.jpg'},
 {id:'Sp_2kDOgL48', image:'pagoda', alt:'An ornate stone tower with stairs and railings in a temple courtyard', prompt:'Which pagoda stands in this courtyard?', choices:['Seokgatap Pagoda','Bunhwangsa Stone Pagoda','Dabotap Pagoda at Bulguksa Temple'], correct:2, ko:'불국사 다보탑', fact:'Bulguksa has two distinctive stone pagodas. Dabotap is the more ornate one, with stairways and carved railings.', file:'Dabotap_Pagoda_01.jpg'}
];
const expand = [
 ['vUHSV7IwTr4','gw','A close view of painted brackets beneath the roof of a monumental gate','This gate leads into Gyeongbokgung Palace. Which gate is it?',['Donhwamun Gate','Gwanghwamun Gate','Daehanmun Gate'],1,'광화문','This main gate of Gyeongbokgung opens toward Gwanghwamun Square. Step back into the square for a wider view.','Gwanghwamun_Close_Up_of_Roof_and_Title.jpg','Huntsmanleader','0','서울'],
 ['yKQWeuvLPIg','inj','A palace hall with a two-tiered tiled roof and decorative painted wood','Which palace contains Injeongjeon, the hall in this photo?',['Changdeokgung Palace','Deoksugung Palace','Changgyeonggung Palace'],0,'창덕궁 인정전','Injeongjeon is the main throne hall of Changdeokgung. Look for the raised stone terrace in front.','Injeongjeon_Hall_01.jpg','Bernard Gagnon','0','서울','Injeongjeon Hall, Changdeokgung'],
 ['iSCo3myxSl0','geun','A stately palace hall with a broad, layered roof','Which hall is the main throne hall of Gyeongbokgung?',['Gyeonghoeru Pavilion','Sujeongjeon Hall','Geunjeongjeon Hall'],2,'경복궁 근정전','Geunjeongjeon was the ceremonial center of Gyeongbokgung. The courtyard leads directly to its raised terrace.','Gyeongbokgung(palace)_Geunjeongjeon(hall).jpg','Brady Bellini','0','서울'],
 ['MAsaFxaxJ0w','heung','A tall tiled gatehouse above a stone base','This is the old east gate of Seoul. What is its formal name?',['Sungnyemun','Heunginjimun','Sukjeongmun'],1,'흥인지문','Heunginjimun is also called Dongdaemun. It connects to the story of the old Seoul City Wall.','Heunginjimun,_Seoul.jpg','Tristan Surtel','4.0','서울'],
 ['qafQf8bD1nA','sung','A timber gatehouse above an arched stone opening','Which landmark is also called Namdaemun, or Great South Gate?',['Sungnyemun','Gwanghuimun','Changuimun'],0,'숭례문','Sungnyemun was the main southern gate of the walled capital. Namdaemun Market is nearby, but the market is not the gate itself.','Sungnyemun_Gate,_front,_2013.jpg','DoulosCore at English Wikipedia','3.0','서울'],
 ['kzhI95cI6Y8','gam','Colorful houses stacked along a steep hillside','Which Busan neighborhood is pictured here?',['Huinnyeoul Culture Village','Jeonju Hanok Village','Gamcheon Culture Village'],2,'감천문화마을','Gamcheon’s painted homes and narrow lanes climb a Busan hillside. It is still a residential neighborhood, so explore quietly.','Gamcheon_Culture_Village.jpg','Bernard Gagnon','0','부산'],
 ['GfJKJPvdJiI','sea','An aerial view of a green crater rising from the coast','Which volcanic landmark rises off Jeju’s eastern shore?',['Seongsan Ilchulbong','Songaksan','Sanbangsan'],0,'성산일출봉','Seongsan Ilchulbong is a coastal volcanic tuff cone. The flat-looking top in the aerial view is its broad crater.','Seongsan_Ilchulbong_from_the_air.jpg','Korea.net / Korean Culture and Information Service','2.0','제주'],
 ['1YlR7ocRw2o','jeong','Several thin stone roofs stacked above one another','Where does this five-story stone pagoda stand?',['Bulguksa Temple','Jeongnimsa Temple Site','Bunhwangsa Temple'],1,'정림사지 오층석탑','The pagoda at Jeongnimsa Temple Site in Buyeo is a landmark of the Baekje period. Notice how each stone roof gets smaller as the tower rises.','Jeongnimsa_Temple_03.jpg','Bernard Gagnon','0','부여','Jeongnimsa Five-story Stone Pagoda'],
 ['FOvxnIRfRFg','buseok','Interlocking wooden brackets beneath a traditional roof','Which temple in Yeongju is home to Muryangsujeon Hall?',['Bongjeongsa Temple','Sudeoksa Temple','Buseoksa Temple'],2,'부석사 무량수전','Muryangsujeon is an old wooden hall at Buseoksa in Yeongju. Its interlocking wooden brackets are easier to see when you look up from beneath the eaves.','Muryangsujeon_at_Buseoksa_02.jpg','Bernard Gagnon','0','영주','Muryangsujeon Hall at Buseoksa']
];
items.push(...expand.map(([id,image,alt,prompt,choices,correct,ko,fact,file,author,license,city,name])=>({id,image,alt,prompt,choices,correct,ko,fact,file,author,license,city,name})));
const packs = {
 gyeongju:{name:'Historic Gyeongju', items:items.slice(0,3), guide:'gyeongju'},
 seoul:{name:'Palaces & Gates of Seoul', items:items.slice(3,8), guide:'seoul'},
 beyond:{name:'Beyond Seoul', items:items.slice(8,12), guide:'beyond'},
 all:{name:'Around Korea', items, guide:'all'}
};
const guides={
 gyeongju:['Plan two days in Gyeongju','https://ktrip-notes.blogspot.com/2026/11/gyeongju-in-2-days-easy-autumn.html'],
 seoul:['Plan your first Seoul stay','https://ktrip-notes.blogspot.com/2026/11/best-areas-to-stay-in-seoul-for-first.html'],
 beyond:['Read our Jeju family trip notes','https://ktrip-notes.blogspot.com/2026/11/hamdeok-beach-jeju-with-toddler-emerald.html'],
 all:['Browse the Korea travel guides','../travel/']
};
const byId = new Map(items.map(item=>[item.id,item]));
const query = new URL(location.href).searchParams;
const entries = query.getAll('set');
const incoming = entries[0]?.split(',') || [];
const selected = Object.hasOwn(packs,query.get('region')) ? query.get('region') : 'gyeongju';
const match = entries.length===1 && new Set(incoming).size===incoming.length && Object.keys(packs).find(key=>packs[key].items.length===incoming.length && incoming.every(id=>byId.has(id)&&packs[key].items.includes(byId.get(id))));
const pack = packs[match || selected];
const deck = match ? incoming.map(id=>byId.get(id)) : pack.items;
const at = id => document.getElementById(id);
const answerName = p => p.name || p.choices[p.correct];
let index = 0, answers = [];
const make = (tag,text)=>Object.assign(document.createElement(tag),{textContent:text});
function draw(focus=false) {
 const p=deck[index];
 at('quiz').hidden=false;at('results').hidden=true;
 at('progress').textContent='Photo '+(index+1)+' of '+deck.length;
 at('bar').style.width=((index+1)/deck.length*100)+'%';
 at('photo').alt=p.alt;at('photo').src='../assets/'+p.image+'.webp';
 at('question').textContent=p.prompt;
 at('reveal').hidden=true;at('feedback').textContent='';at('next').hidden=true;
 at('choices').replaceChildren(...p.choices.map((choice,i)=>{
  const button=make('button',choice);button.type='button';button.className='choice';
  button.addEventListener('click',()=>answer(i));return button;
 }));
 if(focus) at('question').focus();
}
function answer(i){
 if(answers.length!==index)return;
 const p=deck[index], correct=i===p.correct;
 answers.push(correct);
 [...at('choices').children].forEach((button,k)=>{
   button.disabled=true;
   if(k===p.correct)button.classList.add('correct');
   else if(k===i)button.classList.add('wrong');
 });
 at('verdict').textContent=(correct?'Correct: ':'Not quite. It’s ')+answerName(p)+' ('+p.ko+').';
 at('detail').textContent=p.fact;
 at('map').href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.ko+' '+(p.city||'경주'));
 at('credit').href=GUIDE+p.file;
 at('credit').textContent='Photo: '+(p.author||'Bernard Gagnon')+' (resized; display may crop)';
 at('license').href=p.license&&p.license!=='0'?'https://creativecommons.org/licenses/by-sa/'+p.license+'/':'https://creativecommons.org/publicdomain/zero/1.0/';
 at('license').textContent=p.license&&p.license!=='0'?'CC BY-SA '+p.license:'CC0 1.0';
 at('reveal').hidden=false;at('feedback').textContent=at('verdict').textContent;
 at('next').textContent=index+1===deck.length?'See my score':'Next photo';at('next').hidden=false;at('next').focus();
}
function result(){
 at('quiz').hidden=true;at('results').hidden=false;
 at('score').textContent=answers.filter(Boolean).length+' / '+deck.length;
 at('summary').replaceChildren(...deck.map((p,i)=>make('li',(answers[i]?'Correct: ':'Missed: ')+answerName(p))));
 at('sharing').textContent='';at('share-url').hidden=true;at('result-title').focus();
}
function link(){
 const url=new URL(location.pathname,location.origin);
 url.searchParams.set('set',deck.map(p=>p.id).join(','));
 return url.href;
}
at('next').addEventListener('click',()=>{if(answers.length!==index+1)return;if(++index===deck.length)result();else draw(true);});
at('reset').addEventListener('click',()=>{index=0;answers=[];draw(true);});
at('share').addEventListener('click',async()=>{
 const url=link(), title='Guess Where in Korea: '+pack.name;
 if(navigator.share) try {await navigator.share({title,text:'Can you guess the same '+deck.length+' places?',url});return;} catch(error){if(error.name==='AbortError')return;}
 try {await navigator.clipboard.writeText(url);at('sharing').textContent='Challenge link copied.';} catch {
  const field=at('share-url');field.value=url;field.hidden=false;field.focus();field.select();at('sharing').textContent='Copy this link to send the exact same photos.';
 }
});
at('edition').textContent=pack.name+' · '+deck.length+' photos';
at('result-title').textContent=pack.name+': your score';
const [guideText,guideUrl]=guides[pack.guide];
at('trip-link').textContent=guideText+' →';at('trip-link').href=guideUrl;
for(const a of document.querySelectorAll('[data-pack]')) if(packs[a.dataset.pack]===pack) a.setAttribute('aria-current','page');
draw();
