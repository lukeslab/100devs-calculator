// give ability to use keys to press buttons.
// keys shoud light up the key and enter text into window.
// enter should submit the equation.

// clicking with the mouse should also work.

const Calculator = {
  "availableKeys": ["1","2","3","4","5","6","7","8","9","0","*","/","-","+","=","."],
  "calcWindow": () => document.querySelector('.window-panel'),
  "operations":{
    "+": (a,b) => +a + +b,
    "-": (a,b) => +a - +b,
    "*": (a,b) => +a * +b,
    "/": (a,b) => +a / +b,
  },
  "solve": () => {
    const operations = Object.keys(Calculator.operations)
    let equation = Calculator.calcWindow().innerText;
    let answer = '';

    for (operation in Calculator.operations) {
      if (equation.includes(operation)){
        equation = equation.split(`${operation}`)
        answer = Calculator.operations[operation](...equation)
        console.log(operation, equation, answer);
      }
      Calculator.calcWindow().innerText = answer;
    }
  }
}


window.addEventListener("keydown", function(e){
  e.preventDefault();
  const keyPressed = e.key === 'Enter' ? '=':e.key;
  const elemPressed = document.querySelector(`a[data-key="${keyPressed}"]`);

  if (Calculator.availableKeys.includes(keyPressed)){
    // light up the keys
    elemPressed.classList.toggle('button-pressed');
    setTimeout(
      () => elemPressed.classList.toggle('button-pressed'),
      100
    )

    // enter the key presses into window as strings.
    if (keyPressed === '='){
      Calculator.solve();
    } else {
      Calculator.calcWindow().innerText += keyPressed;
    }
  }
})
