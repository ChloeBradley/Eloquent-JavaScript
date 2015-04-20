//looping a triangle exercise page 39 Eloquent JavaScript

for (var loopTriangle = "#"; loopTriangle.length <=7; loopTriangle += "#") {
  console.log(loopTriangle)};


  //FizzBuzz exercise page 39
  var number = 1;
  while (number <= 100){
    console.log(print || number);
    number = number + 1;
    var print = "";
   if (number % 3 == 0)
     print = "Fizz";
    if (number % 5 == 0)
      print = "Buzz";
    if (number % 3 == 0 && number % 5 == 0)
    print = "FizzBuzz";
  }

  // chessBoard exercise pg 39

  var secondBoard = " # # # #\n # # # # "
var chessBoard = "# # # # #\n  # # # # "
console.log(chessBoard && secondBoard);

// this is clearly shit, I struggled with this problem for several hours and could not come up with a solid
// solution. This was probably the worst thing I came up with over all, but equally as inaccurate.
