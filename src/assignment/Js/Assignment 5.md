# Js Assignment 5
### Add two Numbers
```
let a=10
let b=20
function  AddTwoNumbers(num1, num2){
    let result = num1 + num2
    console.log(result)
}

AddTwoNumbers(a,b)
```

###  Find if the conditions are obeyed or not?
```
let a = 5;
let b = 3;

function  Is_Valid(){
    if(a<10 && a>b){
        console.log("True")
    }
    else{
        console.log("False")
    }
}
Is_Valid();
```
### Check the conditions
1. if both are divisible by 10 console true.
2. if both are not divisible by 10 console false.
3. if one of them only is divisible by 10 console true.

```
let a = 12;
let b = 20;

function check(){

    if(a%10 == 0 || b%10 == 0){
        console.log("True")
    }
    else{
        console.log("False")
    }
}
check();
```

### Find the first digit of a 4 digit number

```
let num=1235
function Last_Digit(){
    let array=num.toString().split("")
    console.log(Number(array[array.length - 1]))
}
Last_Digit();
```

### Find the remainder

```
let a=2
let b=9
function Find_the_remainder(divisor,divident){
        let result = divident % divisor
        console.log(result) 
}
Find_the_remainder(a,b);

```

### Multiply two Numbers 

```
let a=2
let b=5
function  Multiply_two_number(num1, num2){
    let result =num1 * num2 
    console.log(result)
}

Multiply_two_number(a,b)
```

### Marks Calculator

```
let sub1=50
let sub2=20
let sub3=100


function Sum(sub1 ,sub2 , sub3){
    let result = sub1 + sub2 + sub3
    console.log(result)
    Average(result)
}

function Average(sum){
    let result = sum/3
    console.log(result)
}
Sum(sub1, sub2 , sub3)

```