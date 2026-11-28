'use strict';
const dreamSearch=document.getElementById('dream-search');
const dreamQuery=document.getElementById('dream-query');
const dreamResults=document.getElementById('dream-results');
const dreamEmpty=document.getElementById('dream-empty');
const dreamCards=[...document.querySelectorAll('[data-dream-card]')].map(card=>({card,terms:(card.textContent+' '+card.dataset.terms).toLowerCase().normalize('NFC')}));
function filterDreams(){
  const words=dreamQuery.value.toLowerCase().normalize('NFC').trim().split(/\s+/).filter(Boolean);
  let matches=0;
  for(const item of dreamCards){
    item.card.hidden=!words.every(word=>item.terms.includes(word));
    if(!item.card.hidden) matches++;
  }
  dreamResults.textContent=matches+' '+(matches===1?'guide':'guides');
  dreamEmpty.hidden=matches!==0;
}
dreamQuery.addEventListener('input',filterDreams);
dreamSearch.hidden=false;
filterDreams();
