let outer = () => {
  let a = 10;
  let b = 100;

  let inner = () => {
    let a = 20; 
    console.log("a = " + a + " b = " + b);

    a++
    b++
  }    
  // return just a definition of inner function
  // if we returned with parantheses we would execute it
  return inner
}

// execute outer function which returns inner function
let x = outer()
let y = outer()

// now each inner function has a closure
// execute inner function
console.log(x())
// execute inner function
console.log(x())
// execute inner function
console.log(x())

// execute inner function
console.log(y())
