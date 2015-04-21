//chapter 3, minimum

function smallerNumber(x, y) {
  if (y < x)
    return(y);
  else
    return(x);
}

console.log(smallerNumber(199, 100));

// recursion ***** Did not complete, these are my attempts.
// Cannot get it to run. Moving on. Unsure how to complete this problem.
function number(y) {
  if (y === 1)
    return false;
  else (y === 0)
    return true;

}
console.log(number(50));


// another attempt argueably worth logging. ( this is probably the 4th attempt for a solution.)
function number(y) {
  if (y === 0)
    return
 find(y - 2) ||
  else (y === 1)
      return
       find(y - 1);
}
 console.log(number(2));




// first attempt at creating a solution for Recursion problem. There is a syntax error that will not let the code execute, cannot find error. After working on this for quite some time, I reread the problem and realized I needed to go another direction altogether.

function numbers(e, o) {
if (e-2; e % === 0)
  return true;
else if (o-1; o % === 1)
  return false;
  }
console.log(numbers(50, 75));

//Bean Counting exercise

function countBs(string) {
  return countsCharacter(string, "B");
}

function countsCharacter(string, character) {
  var total = 0;
  for (var count = string.length - 1; count > -1; count--) {
    if (string.charAt(count) === character) {
      total += 1;
    }
  }
  return total;
}

console.log(countBs("BBC"));

console.log(countsCharacter("kakkerlak", "k"));
