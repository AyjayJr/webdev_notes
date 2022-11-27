// Simple todo list console application to practice fundamentals of JS

let input;
let newItem;
let deleteIndex;
let deletedItem;
const todo = [];

while (input !== "quit") {
   input = prompt("What would you like to do?");
   if (input === "new") {
      newItem = todo.push(prompt("Enter new todo item."));
      console.log(`${todo[newItem-1]} added to the list.`);
   } else if (input === "list") {
      console.log("***********");
      for (let i = 0; i < todo.length; i++) {
         console.log(`${i}: ${todo[i]}`);
      }
      console.log("***********");
   } else if (input === "delete") {
      deleteIndex = prompt("Enter the number of the item you would like to delete.");
      deletedItem = todo.splice(deleteIndex, 1);
      console.log(`${deletedItem} has been removed from the list.`);
   }
}

console.log("OK, YOU QUIT THE APP!");