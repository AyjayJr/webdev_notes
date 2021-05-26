const h1 = document.querySelector('h1');
const btn = document.querySelector('button');
const div = document.querySelector('div');

div.style.textAlign = 'center';
btn.addEventListener('click', function() {
   const bg = document.querySelector('body');
   const randomColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
   bg.style.backgroundColor = randomColor;
   h1.innerText = randomColor;
});

function randomNum(max = 255) {
   return Math.round(Math.random() * max);
}