
let userInput = document.querySelector('.userInput');
let computeBtn = document.querySelector('#computeBtn');
let clearBtn = document.querySelector('#clearBtn');
// let output = document.querySelector('.output');
let steps = document.querySelector('#steps');
let result = document.querySelector('#result');
let difference = "";
let smallNum = "";
let largeNum = "";

result.style.display= 'none';
userInput.focus();

const kapConst = (num) => {
  let numArray = num.toString().split("");
  let bigArray = numArray.sort(function(a,b){
    return b - a;
  });
 
  let smallArray = numArray.slice().sort(function(a,b){
    return a - b;
  });

  largeNum = parseInt(bigArray.join(''));
  smallNum  = parseInt(smallArray.join(''));

  difference = largeNum- smallNum;
  return difference;
  } 

const checkDuplicates = (a) => {
    let counts = [];
      var a = userInput.value;
    for(let i = 0; i < a.length; i++) {
        if(counts[a[i]] === undefined) {
            counts[a[i]] = 1;
        } else {
              alert("Please enter a number with non-identical digits");
              throw new Error("");
        }
    }
    return false;
}

computeBtn.addEventListener("click", function(){
  let counter = 1;
  let userVal = userInput.value;

  checkDuplicates();
  if(userVal > 0 && userVal.length === 4){
   
    kapConst(userVal);

    while (difference !== 6174) {
      kapConst(difference); 
      
      counter++; 
   }
    result.style.display = 'block';
    steps.textContent = counter;  
} else {
      alert("Please enter a four digits number!");
      userInput.value = "";
      result.style.disply = 'none';
  }
})

clearBtn.addEventListener("click", function(){
  userInput.value = "";
  result.style.display = 'none';
  userInput.focus();
})