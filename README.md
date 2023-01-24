### Average Number
#### Average is the arithmetic mean, and is calculated by adding a group of numbers and then dividing by the count of those numbers. For example, the average of 2, 3, 3, 5, 7, and 10 is 30 divided by 6, which is 5.
---
#### Case1
```Javascript
const averageNumber=require("average-number")
console.log(averageNumber([5,4,3]))
Output:3
```
#### Case 2
```Javascript
const averageNumber=require("average-number")
console.log(averageNumber("string"))
Output:Invalid Input!
```
#### Case 3
```Javascript
const averageNumber=require("average-number")
console.log(averageNumber([]))
Output:Empty Array!
```
#### Case 4
```Javascript
const averageNumber=require("average-number")
console.log(averageNumber(["abc",1,2,3]))
Output:All values of the array should be numbers!
```

