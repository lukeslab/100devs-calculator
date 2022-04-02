// give ability to use keys to press buttons.
// keys shoud light up the key and enter text into window.
// enter should submit the equation.

// clicking with the mouse should also work.

const Calculator = {
  "availableKeys": ["1","2","3","4","5","6","7","8","9","0","*","/","-","+","=","."],
  "calcWindow": () => document.querySelector('.window-panel'),
  "+": (a,b) => +a + +b,
  "-": (a,b) => +a - +b,
  "*": (a,b) => +a * +b,
  "/": (a,b) => +a / +b,
}

// const allowedKeys = ["1","2","3","4","5","6","7","8","9","0","*","/","-","+","=","."]

// give ability to use keys
// let calcWindow = document.querySelector('.window-panel');

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
      // solve the equation
      const equation = Calculator.calcWindow().innerText.split('');
      const answer = Calculator[`${equation[1]}`](equation[0],equation[2])
      Calculator.calcWindow().innerText = answer;
    } else {
      Calculator.calcWindow().innerText += keyPressed;
    }
  }
})
