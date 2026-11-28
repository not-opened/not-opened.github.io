'use strict';
const $=id=>document.getElementById(id);
const VERSION='1';
const EPOCH=Date.UTC(2026,10,28)/86400000;
const STORE='notopened-en-daily-v1';
const dayNum=ts=>Math.floor(ts/86400000);
const key=n=>new Date(n*86400000).toISOString().slice(0,10);
const current=()=>dayNum(Date.now()+9*3600000);
function decode(s){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(s||''))return null;
 const n=dayNum(Date.parse(s+'T00:00:00Z'));
 return Number.isFinite(n)&&key(n)===s?n:null;
}
const addr=new URL(location.href), arrived=addr.searchParams.get('v')===VERSION?decode(addr.searchParams.get('day')):null;
const openDay=current(), chosen=arrived!==null&&arrived>=EPOCH&&arrived<=openDay?arrived:Math.max(EPOCH,openDay);
const mod=(a,b)=>(a%b+b)%b;
const offset=chosen-EPOCH;
// Choose a different question in every category each day. The alignment between
// the 12-photo and 10-text cycles repeats after 60 days.
const landmark=photos[mod(offset,photos.length)];
const deck=[{category:'Landmark photo',prompt:landmark.prompt,choices:landmark.choices,correct:landmark.correct,
 label:(landmark.name||landmark.choices[landmark.correct])+' ('+landmark.ko+')',description:landmark.fact,photo:landmark,
 reference:'https://commons.wikimedia.org/wiki/File:'+landmark.file},...banks.map(({category,items},i)=>{
  const item=items[mod(offset+[0,2,4,6][i],items.length)];
  const [prompt,first,second,third,description,reference]=item;
  const options=[first, second, third];
  const turn=mod(offset+i,options.length);
  return {category,prompt,choices:options.slice(turn).concat(options.slice(0,turn)),correct:mod(-turn,options.length),label:first,description,reference};
 })];
const nice=new Intl.DateTimeFormat('en',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'});
function records(){
 try{
  const data=JSON.parse(localStorage.getItem(STORE)||'{}');
  if(!data||typeof data!=='object'||Array.isArray(data))return {};
  return Object.fromEntries(Object.entries(data).filter(([k,v])=>{
   const n=decode(k);return n!==null&&n>=EPOCH&&n<=current()&&n>=current()-400&&Number.isInteger(v)&&v>=0&&v<=5;
  }));
 }catch{return {};}
}
function updateBanner(){
 const today=current(), data=records();
 let n=Object.hasOwn(data,key(today))?today:today-1;
 let run=0;while(Object.hasOwn(data,key(n))){run++;n--;}
 $('banner').hidden=false;
 $('day').textContent=nice.format(new Date(chosen*86400000))+(chosen===today?' · Today in Korea':' · Archived challenge');
 const best=chosen===today&&Object.hasOwn(data,key(today))?' · Best today: '+data[key(today)]+'/5':'';
 $('streak').textContent=(run?run+'-day streak':'Play daily to build a streak')+best;
 $('today').hidden=chosen===today;
}
function saveScore(value){
 if(chosen!==current())return;
 const data=records();const p=key(chosen);
 try {localStorage.setItem(STORE,JSON.stringify({...data,[p]:Math.max(data[p]??0,value)}));}catch{}
 updateBanner();
}
const el=(tag,text)=>Object.assign(document.createElement(tag),{textContent:text});
let i=0,answers=[];
function draw(moveFocus=false){
 const q=deck[i];
 $('round').hidden=false;$('results').hidden=true;$('reveal').hidden=true;$('next').hidden=true;
 $('feedback').textContent='';$('count').textContent='Question '+(i+1)+' of '+deck.length;
 $('meter').style.width=((i+1)/deck.length*100)+'%';
 $('category').textContent=q.category;$('question').textContent=q.prompt;
 $('image').hidden=!q.photo;
 if(q.photo){$('image').src='../assets/'+q.photo.image+'.webp';$('image').alt=q.photo.alt;}
 else {$('image').removeAttribute('src');$('image').alt='';}
 $('choices').replaceChildren(...q.choices.map((label,k)=>{
  const button=el('button',label);button.type='button';button.className='choice';button.addEventListener('click',()=>answer(k));return button;
 }));
 if(moveFocus)$('question').focus();
}
function answer(k){
 if(answers.length!==i)return;
 const q=deck[i],right=k===q.correct;answers.push(right);
 [...$('choices').children].forEach((b,n)=>{b.disabled=true;if(n===q.correct)b.classList.add('correct');else if(n===k)b.classList.add('wrong');});
 $('verdict').textContent=(right?'Correct: ':'Not quite. The answer is ')+q.label+'.';
 $('explanation').textContent=q.description;$('reference').href=q.reference;
 $('reference').textContent=q.photo?'Photo: '+(q.photo.author||'Bernard Gagnon')+' (resized; display may crop)':'Source / further reading';
 const lic=q.photo?.license;
 $('image-license').hidden=!q.photo;
 if(q.photo){
  $('image-license').href=lic&&lic!=='0'?'https://creativecommons.org/licenses/by-sa/'+lic+'/':'https://creativecommons.org/publicdomain/zero/1.0/';
  $('image-license').textContent=lic&&lic!=='0'?'CC BY-SA '+lic:'CC0 1.0';
 }
 $('reveal').hidden=false;$('feedback').textContent=$('verdict').textContent;
 $('next').textContent=i+1===deck.length?'See my score':'Next question';$('next').hidden=false;$('next').focus();
}
function result(){
 const score=answers.filter(Boolean).length;saveScore(score);
 $('round').hidden=true;$('results').hidden=false;
 $('score').textContent=score+' / '+deck.length;
 $('breakdown').replaceChildren(...deck.map((q,k)=>el('li',q.category+' · '+(answers[k]?'Correct':'Missed')+' · '+q.label)));
 $('share-status').textContent='';$('share-url').hidden=true;$('result-title').focus();
}
$('next').addEventListener('click',()=>{if(answers.length!==i+1)return;if(++i===deck.length)result();else draw(true);});
$('replay').addEventListener('click',()=>{i=0;answers=[];draw(true);});
$('share').addEventListener('click',async()=>{
 const u=new URL(location.pathname,location.origin);u.searchParams.set('day',key(chosen));u.searchParams.set('v',VERSION);
 const url=u.href, title='Daily Korea Quiz';
 if(navigator.share)try{await navigator.share({title,text:'Can you beat my score on the same five questions?',url});return;}catch(e){if(e.name==='AbortError')return;}
 try{await navigator.clipboard.writeText(url);$('share-status').textContent='Challenge link copied.';}
 catch{const f=$('share-url');f.value=url;f.hidden=false;f.focus();f.select();$('share-status').textContent='Copy this link to send the exact same quiz.';}
});
window.addEventListener('pageshow',updateBanner);
updateBanner();draw();
