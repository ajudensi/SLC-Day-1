# SLC-Day-1
Solutions to tasks for my self-learning clinic day one.

[![Build Status](https://travis-ci.org/ajudensi/SLC-Day-1.svg?branch=master)](https://travis-ci.org/ajudensi/SLC-Day-1)

##Tasks
### dataTypes
Write a function called *dataTypes*  to compare and return results, based on the argument supplied to the function. Follow through the test to produce the perfect function that accounts for all expectations.
For strings, return its length.
For null or undefined return string 'no value'
For booleans return the boolean
For numbers return a string showing how it compares to hundred e.g. For 67 return 'less than 100' for 4034 return 'more than 100' or equal to 100 as the case may be
For arrays return the 3rd index, or undefined if it doesn't exist.
For functions call the function and pass in true as an argument and return it.

### getPrimes
Write a *getPrimes*  function that takes an integer value n as argument and generates prime numbers from 0 to n with asymptotic analysis.
The generated prime numbers should be in an array.
If no prime number is obtainable for the input, return an empty array.
Your logic should be as efficient as possible (with minimal iterations).
Your code should also address edge cases (invalid input, negative input value, or zero as input).
Please write your own Jasmine tests with at least 5 test cases.

### OOP
You are to create a Car class that can be used to instantiate various vehicles.
It takes in arguments that depict the type, model, and name of the vehicle, provided they are set.
Let the test guide you to building your Car boiler-plate.
I challenge you to CREATE YOUR OWN OOP IMPLEMENTATION AND WRITE YOUR OWN TESTS.

## To run tests

```javascript
npm run datatypes
```
```javascript
npm run getprimes
```
```javascript
npm run oop
```
