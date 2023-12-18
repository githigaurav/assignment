# Js Assignment 4
### Create the Example for Logical Operators

```
    const username="admin"
    const password="admin"

    if(username ==="admin" && password==="admin"){
        console.log("Login Successfully")
    }else{
        console.log("Invalid username or password")
    }
```

### Difference between “ == “ and “ === “ operators ?
 " == " operator know as loose equality chekc it just check only value not data type on the other hand " === " operator know as strict equality check which check value and data type both. 

### How many operators do we have in JS ?
Javascript has several types of operator including Arthmetic , Assignment , Comparision , Logical , Bitwise , Ternary etc operator.


### What is use of parseInt in js?
It is built in javascript function that use to convert string to and integer value.


### Take input from user and find the odd and even number.
```
let userInput = prompt("Please provide a number");

// Check if input is valid number 
if(isNaN(userInput) || userInput === "" || userInput <= 0) {
  alert("Input can't be empty, zero or negative");
}
else {

  userInput = Number(userInput);

  if(userInput % 2 === 0) {
    alert("Number is even");
  }
  else { 
    alert("Number is odd");
  }
}
```


