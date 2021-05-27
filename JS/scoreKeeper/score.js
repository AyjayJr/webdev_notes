const btnP1 = document.querySelector('#btn-p1');
const btnP2 = document.querySelector('#btn-p2');
const scoreP1 = document.querySelector('#score-p1');
const scoreP2 = document.querySelector('#score-p2');
const playTo = document.querySelector('#playto');
const reset = document.querySelector('#btn-reset');

btnP1.addEventListener('click', () => {
   scoreP1.innerText++;

})

btnP2.addEventListener('click', () => {
   scoreP2.innerText++;
})

reset.addEventListener('click', () => {
   scoreP1.innerText = '0';
   scoreP2.innerText = '0';
})