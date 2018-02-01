var container = document.getElementById('container')

      var buttonNum = document.getElementsByClassName('buttonNum');
      var equals = document.getElementsByClassName('equals');
      var operator = document.getElementsByClassName('operator');
      var buttonClear = document.getElementsByClassName('buttonClear');
      var operator = document.getElementsByClassName('operator');
      var operator = document.getElementsByClassName('operator');
      var display = document.getElementById('display');


function init() {
  for (var i = 0; i < buttonNum.length; i++) {
    var button = buttonNum[i];
    button.addEventListener("click" , function(event) {
      var number = event.target.innerHTML;
      displayText(number);
      saveNumber(number);
    });
  };

  for (var i = 0; i < operatorButtons.length; i++) {
    var button = operatorButtons[i];
    button.addEventListener("click", function(event) {
      displayText(event.target.innerHTML);
      operator = event.target.innerHTML;
    });
  };
  calculateButton.addEventListener("click", function() {
    var answer = calculate(firstNumber, secondNumber, operator);
    displayText(answer);
  });
  clearButton.addEventListener("click", reset);
}
function displayText(text) {
  return display.innerHTML = text;
}
function saveNumber(number) {
  parsedNumber = parseFloat(number);
  if(!firstNumber) {
    return firstNumber = parsedNumber;
  } else {
    return secondNumber = parsedNumber;
  }
  }

function calculator(firstNum, second, operator) {
  console.log(firstNumber, operator, secondNumber);

  switch(operator) {
    case "+":
      return firstNum + secondNum;
    case(""-"")

  }
}












// // Append a click handler on the button
//  btn.addEventListener("click", function (event) {
//    if (operator)


// // Perform operation
//    switch (operator) {
//      case "plus":
//        resultNum = oldNum + theNum;
//        break;
//
//      case "minus":
//        resultNum = oldNum - theNum;
//        break;
//
//      case "times":
//        resultNum = oldNum * theNum;
//        break;
//
//      case "divided by":
//        resultNum = oldNum / theNum;
//        break;
