'use strict';
const GUIDE = 'https://commons.wikimedia.org/wiki/File:';
const items = [
 {id:'ge3mCCl4L3g', image:'wolji', alt:'A wooden pavilion with a curved tiled roof beside a large pond', prompt:'Which Gyeongju landmark is this?', choices:['Woljeonggyo Bridge','Donggung Palace and Wolji Pond','Gyeongju National Museum'], correct:1, ko:'동궁과 월지', fact:'Wolji was the pond of a secondary Silla palace. The traditional pavilions and their reflections make it a memorable evening stop.', file:'Donggung_Palace_01.jpg'},
 {id:'2AlFOWdVcgs', image:'observatory', alt:'A short, rounded stone tower with a small rectangular opening', prompt:'What was this stone tower built for?', choices:['Watching the night sky','Guarding a city gate','Storing grain'], correct:0, name:'Cheomseongdae Observatory', ko:'첨성대', fact:'Cheomseongdae is a stone observatory from the Silla kingdom. Its rounded body is built from courses of cut stone.', file:'Cheomseongdae_Observatory_01.jpg'},
 {id:'Sp_2kDOgL48', image:'pagoda', alt:'An ornate stone tower with stairs and railings in a temple courtyard', prompt:'Which pagoda stands in this courtyard?', choices:['Seokgatap Pagoda','Bunhwangsa Stone Pagoda','Dabotap Pagoda at Bulguksa Temple'], correct:2, ko:'불국사 다보탑', fact:'Bulguksa has two distinctive stone pagodas. Dabotap is the more ornate one, with stairways and carved railings.', file:'Dabotap_Pagoda_01.jpg'}
];
const byId = new Map(items.map(item=>[item.id,item]));
const entries = new URL(location.href).searchParams.getAll('set');
const incoming = entries[0]?.split(',') || [];
const deck = entries.length === 1 && incoming.length === items.length && new Set(incoming).size === items.length && incoming.every(id=>byId.has(id)) ? incoming.map(id=>byId.get(id)) : items;
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
 at('map').href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.ko+' 경주');
 at('credit').href=GUIDE+p.file;
 at('credit').textContent='Photo: Bernard Gagnon, CC0';
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
 const url=link(), title='Guess Where in Korea: Gyeongju';
 if(navigator.share) try {await navigator.share({title,text:'Can you guess the same three places?',url});return;} catch(error){if(error.name==='AbortError')return;}
 try {await navigator.clipboard.writeText(url);at('sharing').textContent='Challenge link copied.';} catch {
  const field=at('share-url');field.value=url;field.hidden=false;field.focus();field.select();at('sharing').textContent='Copy this link to send the exact same photos.';
 }
});
draw();
