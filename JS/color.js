const h1 = document.querySelector('h1');
const btn = document.querySelector('button');
const div = document.querySelector('div');

div.style.textAlign = 'center';
div.style.marginTop = '40vh';
btn.addEventListener('click', function() {
   const bg = document.querySelector('body');
   const color = makeRandomColor();
   bg.style.backgroundColor = color;
   h1.innerText = color;
});

function makeRandomColor(max = 255) {
   const r = Math.round(Math.random() * max);
   const g = Math.round(Math.random() * max);
   const b = Math.round(Math.random() * max);
   return `rgb(${r},${g},${b})`;
}