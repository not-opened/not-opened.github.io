'use strict';
const lessons=[
 {name:'The chariot (차)', task:'Move the green chariot straight ahead without jumping a piece.', actor:[4,6,'차','Chariot'], pieces:[[4,3,'卒','Red soldier',true]], choices:[
  {x:3,y:5, tip:'A chariot does not move diagonally out here on the open board.'},
  {x:4,y:4, ok:true, tip:'Two intersections straight ahead, with nothing in between. That is a legal chariot move.'},
  {x:4,y:2, tip:'The red soldier blocks the path. A chariot cannot jump over it.'}]},
 {name:'The horse (마)', task:'Which marked L-shaped move has an open first step?',actor:[4,5,'마','Horse'],pieces:[[4,4,'병','Green soldier']],choices:[
  {x:3,y:3,tip:'The first step upward is blocked by the green soldier.'},
  {x:5,y:3,tip:'This move also starts upward through the occupied point.'},
  {x:6,y:4,ok:true,tip:'One point right, then diagonally up-right. The first point is clear.'}]},
 {name:'The cannon (포)',task:'Capture a red soldier by jumping exactly one piece.',actor:[4,7,'포','Cannon'],pieces:[[4,5,'병','Green soldier'],[4,3,'卒','Red soldier',true],[6,7,'砲','Red cannon',true],[2,7,'卒','Red soldier',true]],choices:[
  {x:4,y:3,ok:true,tip:'The green soldier is the single screen. The cannon jumps it and captures the red soldier.'},
  {x:2,y:7,tip:'There is no screen between the cannon and that red soldier.'},
  {x:6,y:7,tip:'A cannon cannot capture another cannon, and there is no screen on this line.'}]},
 {name:'The general (궁)',task:'The general is at the lower palace center. Follow a marked diagonal without leaving the palace.',actor:[4,8,'궁','General'],pieces:[],choices:[
  {x:4,y:7,tip:'That one-step move is legal, but it is straight, not along a diagonal.'},
  {x:3,y:7,ok:true,tip:'The corner is connected to the center by the marked diagonal. The general stays inside its palace.'},
  {x:2,y:8,tip:'The general cannot leave the palace or move two points at once.'}]}
];
const by=id=>document.getElementById(id);
const letters='ABC';
const ns='http://www.w3.org/2000/svg';
function grid(){
 const svg=document.createElementNS(ns,'svg');svg.setAttribute('viewBox','0 0 900 1000');svg.setAttribute('aria-hidden','true');
 const add=(x1,y1,x2,y2,w=3)=>{
  const l=document.createElementNS(ns,'line');
  for(const [k,v] of Object.entries({x1:x1*100+50,x2:x2*100+50,y1:y1*100+50,y2:y2*100+50,stroke:'#795329','stroke-width':w}))l.setAttribute(k,v);
  svg.append(l);
 };
 for(let x=0;x<9;x++)add(x,0,x,9);
 for(let y=0;y<10;y++)add(0,y,8,y);
 for(const y of [0,7]){add(3,y,5,y+2,4);add(5,y,3,y+2,4);}
 return svg;
}
function position(el,x,y){
 el.style.setProperty('--x',((x+.5)/9*100)+'%');el.style.setProperty('--y',((y+.5)*10)+'%');
}
function piece([x,y,label,name,enemy],active){
 const p=document.createElement('span');p.textContent=label;p.className='piece'+(enemy?' enemy':'')+(active?' start':'');p.setAttribute('aria-label',name);p.setAttribute('role','img');position(p,x,y);return p;
}
function point(x,y){return 'file '+'abcdefghi'[x].toUpperCase()+', rank '+(10-y);}
let i=0,done=false;
function draw(focus){
 const lesson=lessons[i];done=false;
 by('finish').hidden=true;by('lesson').hidden=false;by('continue').hidden=true;
 by('coach').textContent='Choose A, B or C on the board or below.';
 by('count').textContent='Move '+(i+1)+' of '+lessons.length;
 by('meter').style.width=((i+1)/lessons.length*100)+'%';
 by('lesson-title').textContent=lesson.name;by('task').textContent=lesson.task;
 const board=by('board');board.replaceChildren(grid(),piece(lesson.actor,true),...lesson.pieces.map(p=>piece(p,false)));
 const buttons=by('pick-buttons');buttons.replaceChildren();
 lesson.choices.forEach((choice,j)=>{
  const t=document.createElement('button');t.type='button';t.className='target'+(lesson.pieces.some(p=>p[0]===choice.x&&p[1]===choice.y)?' occupied':'');t.textContent=letters[j];t.setAttribute('aria-label','Option '+letters[j]+', '+point(choice.x,choice.y));position(t,choice.x,choice.y);
  const below=document.createElement('button');below.type='button';below.className='button ghost';below.textContent=letters[j];below.setAttribute('aria-label','Choose '+letters[j]+', '+point(choice.x,choice.y));
  board.append(t);buttons.append(below);
  t.addEventListener('click',()=>attempt(j,t));below.addEventListener('click',()=>attempt(j,t));
 });
 if(focus)by('lesson-title').focus();
}
function attempt(j,target){
 if(done)return;
 const lesson=lessons[i], c=lesson.choices[j];
 by('coach').textContent=(c.ok?'Correct. ':'Try again. ')+c.tip;
 if(!c.ok){target.classList.add('no');return;}
 done=true;
 for(const b of document.querySelectorAll('#board button,#pick-buttons button'))b.disabled=true;
 const board=by('board');
 board.replaceChildren(grid(),...lesson.pieces.filter(p=>p[0]!==c.x||p[1]!==c.y).map(p=>piece(p,false)),piece([c.x,c.y,...lesson.actor.slice(2)],true));
 const more=by('continue');more.textContent=i+1===lessons.length?'Finish practice':'Next move';more.hidden=false;more.focus();
}
by('continue').addEventListener('click',()=>{
 if(!done)return;
 if(++i===lessons.length){by('lesson').hidden=true;by('finish').hidden=false;by('finish-title').focus();}
 else draw(true);
});
by('again').addEventListener('click',()=>{i=0;draw(true);});
draw(false);
