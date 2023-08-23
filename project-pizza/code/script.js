// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const person = prompt ("Please enter your name")

alert (
  `Welcome ${person}`
)

// Step 2 - Food choice
// Your code goes here
const Food = prompt ("What's your craving today: 1 - Pizza  2 - Pasta  3- Salad Please enter the number of your choice!")

let selectedFood ="";



//If the choice is 1, it is pizza
//If the choice is 2, it is Pasta
//If the choice is 3, it is Salad
if (Food === "1") {
 selectedFood ="Pizza";
}
else if (Food === "2") {
  selectedFood ="Pasta";
}
else if (Food ==="3") {
  selectedFood ="Salad";
}
else {
  alert ("Invalid choice. Please select a valid number.");
  Process.exit(1);
}
alert (
  `You chosen ${selectedFood}`
)


// Step 3 - Subtype choice
// Your code goes here Ask the user to inser subtype based on choice of food.
let subtype  = "";
let subtypeName = ""; //Store name for the subtypes pizza, pasta and salad

switch (selectedFood) {
  case "Pizza":
    subtype = prompt ('Select the type of pizza you want: 1 - Margherita 2 - Veggie 3 - Nutella Please enter the number of your choice:');
    subtypeName = ["Margherita", "Veggie", "Nutella"];
    break;
    case "Pasta":
      subtype = prompt ('Select the type of pizza you want: 1 - Shrimp 2 - Veggie 3 - Elf style Please enter the number of your choice:');
      subtypeName = ["Shrimp", "Veggie", "Elf style"];
      break;
      case "Salad":
        subtype = prompt ('Select the type of pizza you want: 1 - Shrimp 2 - Greek 3 - Tomato Please enter the number of your choice:');
        subtypeName = ["Shrimp", "Greek", "Tomato"];
        break;
}


// Step 4 - Age
// Your code goes here
let age = prompt ('Type your age in numbers')
if (age >=18) {
  console.log ("The price is 150 SEK");
}
else {
  console-log("The price is 100 SEK");
}

alert (
  `You ordered ${Food} ${subtype} for the amount of ${age}`
)

let confirmation = 
prompt ("Place your order")

// Step 5 - Order confirmation
// Your code goes here


