function fizzBuzz(count: number): Array<string> {
  let outputArray: Array<string> = [];

  for (let i = 1; i <= count; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    if (output === "") output += i.toString();

    outputArray.push(output);
  }

  return outputArray;
}

console.log(fizzBuzz(100))
console.log(fizzBuzz(15))
