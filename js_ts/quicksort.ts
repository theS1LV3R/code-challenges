function isSorted(input: Array<number>) {
  if (!input) return false;
  if (input.length === 0 || input.length === 1) return true;

  let current = input[0];

  for (const currentIndex of input) {
    if (currentIndex >= current) {
      current = currentIndex;
      continue;
    } else {
      return false;
    }
  }
  return true;
}

/**
 * Quicksort an array
 *
 * @link https://idea-instructions.com/quick-sort/
 * @param {Array<number>} input An array with integers of `n` lenght, where no two integers are equal, and n >= 2;
 * @returns {Array<number>} The sorted array
 */
function quicksort(input: Array<number>): Array<number> {
  // Mini optimization to return the array immediately if it's already sorted
  if (isSorted(input)) return input;

  // Check if the input is only two numbers, because then there are only two combinations to check.
  // Its either sorted or not, and if it isn't sorted just return the reversed array (because it will be sorted)
  if (input.length === 2) {
    if (isSorted(input)) return input;
    else return input.reverse();
  }

  while (!isSorted(input)) {
    // Create two arrays that will be used for the numbers that are bigger and smaller than the random item we select
    let bigger: Array<number> = [];
    let smaller: Array<number> = [];

    // Math.floor(Math.random() * (max - min) + min);
    // Generate a random number between max and min
    // https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
    const int = Math.floor(Math.random() * (input.length - 0) + 0);

    input.forEach((value, index) => {
      // Skip the current number to make sure we dont check it against itself
      if (index === int) return;

      if (value > input[int]) {
        // If the current item is larger than the item we selected, add it to the "bigger" array
        bigger.push(value);
      } else {
        // Else add it to the "smaller" array
        smaller.push(value);
      }
    });

    // Sort the bigger and smaller arrays, we all love recursion right?
    bigger = quicksort(bigger);
    smaller = quicksort(smaller);

    // Reassemble the input to be correct
    input = [...smaller, input[int], ...bigger];
  }

  return input;
}

console.log(quicksort([0, 3, 1, 2]));
