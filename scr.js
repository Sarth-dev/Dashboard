// function groupAnagrams(words) {
//     const map = new Map();
  
//     for (const word of words) {
//       // Sort the characters in the word to get the anagram key
//       const sortedWord = word.split('').sort().join('');
      
//       // Check if the sorted word is already a key in the map
//       if (!map.has(sortedWord)) {
//         map.set(sortedWord, []); // Initialize with an empty array if not present
//       }
      
//       // Append the original word to the array corresponding to the sorted key
//       map.get(sortedWord).push(word);
//     }
  
//     // Convert the values of the map to an array of arrays
//     return Array.from(map.values());
//   }
  
//   // Example usage
//   const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
//   console.log(groupAnagrams(input));




// function isBalanced(str) {
//     // Stack to keep track of opening brackets
//     const stack = [];
    
//     // Map of opening brackets to closing brackets
//     const bracketMap = {
//       '(': ')',
//       '{': '}',
//       '[': ']'
//     };
    
//     // Iterate over each character in the string
//     for (const char of str) {
//       if (bracketMap[char]) {
//         // If the character is an opening bracket, push it onto the stack
//         stack.push(char);
//       } else if (Object.values(bracketMap).includes(char)) {
//         // If the character is a closing bracket
//         if (stack.length === 0) {
//           // Stack is empty but closing bracket found, not balanced
//           return false;
//         }
        
//         // Check if the top of the stack matches the corresponding opening bracket
//         const lastOpening = stack.pop();
//         if (bracketMap[lastOpening] !== char) {
//           // Mismatched brackets
//           return false;
//         }
//       }
//     }
    
//     // If the stack is empty, all brackets are matched; otherwise, they are not
//     return stack.length === 0;
//   }
  
//   // Example usage
//   console.log(isBalanced("((()))")); // true
//   console.log(isBalanced("(()"));    // false
//   console.log(isBalanced("[{}]"));   // true
//   console.log(isBalanced("[{]"));    // false
//   console.log(isBalanced(""));       // true (empty string is balanced)





  function extractUniqueNumbers(arr) {
  const uniqueNumbers = new Set();

  function flattenAndExtract(arr) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        // Recursively flatten arrays
        flattenAndExtract(item);
      } else if (typeof item === 'number') {
        // Add numbers to the set (ensures uniqueness)
        uniqueNumbers.add(item);
      }
    }
  }

  // Start the recursive process
  flattenAndExtract(arr);

  // Convert the set to an array and return it
  return Array.from(uniqueNumbers);
}

// Example usage
const nestedArray = [1, [2, 3], [2, [4, 5, [6]]], 1];
console.log(extractUniqueNumbers(nestedArray)); // [1, 2, 3, 4, 5, 6]
