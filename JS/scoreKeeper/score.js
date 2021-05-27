const btnP1 = document.querySelector('#btn-p1'); // Player 1
const btnP2 = document.querySelector('#btn-p2'); // Player 2
const scoreP1 = document.querySelector('#score-p1'); // P1 Score
const scoreP2 = document.querySelector('#score-p2'); // P2 Score 
const playTo = document.querySelector('#playto'); // Score to win selection
const reset = document.querySelector('#btn-reset'); // Reset button
let goal = playTo.options[playTo.selectedIndex].value; // Score to win

// Update score to win when selection changes
playTo.addEventListener('change', () => {
   goal = playTo.options[playTo.selectedIndex].value;
})

// Update P1 score when button is clicked
btnP1.addEventListener('click', () => {
   scoreP1.innerText++;
   // Disable buttons when score is reached
   if (scoreP1.innerText == goal) {
      btnP1.setAttribute('disabled', true);
      btnP2.setAttribute('disabled', true);
   }
})

// Update P2 score when button is clicked
btnP2.addEventListener('click', () => {
   scoreP2.innerText++;
   // Disable buttons when score is reached
   if (scoreP2.innerText == goal) {
      btnP1.setAttribute('disabled', true);
      btnP2.setAttribute('disabled', true);
   }
})

// Reset score and enable buttons when reset is clicked
reset.addEventListener('click', () => {
   scoreP1.innerText = '0';
   scoreP2.innerText = '0';
   btnP1.removeAttribute('disabled');
   btnP2.removeAttribute('disabled');
})