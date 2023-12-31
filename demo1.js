//1. Count the Occurrences:
function countOccurrences(text) {
    const words = text.split(' ');
    const wordCount = new Map();
  
    words.forEach(word => {
      wordCount.set(word, (wordCount.get(word) || 0) + 1);
    });
  
    return wordCount;
  }
  
  // Example usage:
  const text = "Hello world hello world";
  const result = countOccurrences(text);
  console.log("Word Occurrences:", result);
//  2. Only Unique Items:
function removeDuplicates(numbers) {
    return [...new Set(numbers)];
  }
  
  // Example usage:
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  const uniqueNumbers = removeDuplicates(numbers);
  console.log("Unique Numbers:", uniqueNumbers);
  // Swap the Values:

  function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
  }
  
  // Example usage:
  let a = 5, b = 10;
  const swappedValues = swapValues(a, b);
  console.log("Swapped Values:", swappedValues);

  
  //4. Access Random Elements:
  function accessRandomElements(array) {
    const [first, second, , , last] = array;
    return [first, second, last];
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 5];
  const resultArray = accessRandomElements(inputArray);
  console.log("Random Elements:", resultArray);

  
  //Min and Max Values:
  function findMinMaxValues(numbers) {
    return {
      max: Math.max(...numbers),
      min: Math.min(...numbers)
    };
  }
  
  // Example usage:
  const inputNumbers = [5, 2, 7, 1, 9];
  const resultMinMax = findMinMaxValues(inputNumbers);
  console.log("Min and Max Values:", resultMinMax);

  //Nested Objects:

  function extractNameAndStreet(person) {
    const { name, address: { street } } = person;
    return { name, street };
  }
  
  // Example usage:
  const personObject = {
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "Cityville"
    }
  };
  const resultExtracted = extractNameAndStreet(personObject);
  console.log("Extracted Values:", resultExtracted);
  