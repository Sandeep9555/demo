
//Reverse String with setTimeout():
let input = "Hello, World!";

function reverseString() {
  setTimeout(() => {
    let reversed = input.split('').reverse().join('');
    console.log("Reversed String:", reversed);
  }, 2000);
}

reverseString();

//Random Number Generator with Delay and Progress Indication:
let delayInSeconds = 3;
let timeRemaining = delayInSeconds;

function generateRandomNumber() {
  let interval = setInterval(() => {
    console.log(`Time remaining: ${timeRemaining} seconds`);
    timeRemaining--;

    if (timeRemaining < 0) {
      clearInterval(interval);
      let randomNumber = Math.floor(Math.random() * 100);
      console.log("Generated Random Number:", randomNumber);
    }
  }, 1000);
}

generateRandomNumber();
//Store's Inventory Price Conversion:
let storeInventory = {
    item1: 20,
    item2: 30,
    item3: 40
  };
  
  const exchangeRate = 80;
  
  let convertedPrices = Object.keys(storeInventory).reduce((acc, item) => {
    acc[item] = storeInventory[item] * exchangeRate;
    return acc;
  }, {});
  
  console.log("Converted Prices in Rupees:", convertedPrices);
//  Filtering and Capitalizing Books:
let books = [
    { title: 'Book1', author: 'Author1', year: 2015 },
    { title: 'Book2', author: 'Author2', year: 2005 },
    { title: 'Book3', author: 'Author3', year: 2012 }
  ];
  
  let filteredBooks = books
    .filter(book => book.year >= 2010)
    .map(book => ({ ...book, author: book.author.toUpperCase() }));
  
  console.log("Filtered and Capitalized Books:", filteredBooks);
//  URL Validation:
function validateURL(url) {
    const regex = /^(https?:\/\/)([a-zA-Z0-9._-]+)\.([a-zA-Z]{2,})$/;
    if (regex.test(url)) {
      console.log("Valid URL");
    } else {
      console.log("Invalid URL");
    }
  }
  
  validateURL("https://www.example.com");
  // LinkedIn Profile URL Validator:
  function validateLinkedInURL(url) {
    const regex = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    if (regex.test(url)) {
      console.log("Valid LinkedIn Profile URL");
    } else {
      console.log("Invalid LinkedIn Profile URL");
    }
  }
  
  validateLinkedInURL("https://www.linkedin.com/in/john_doe123");
  
  