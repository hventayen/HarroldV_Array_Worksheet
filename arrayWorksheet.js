//Part 1
console.log("Array Creation");
let arr = ["apple", "banana", "cherry"];

console.log("Accessing Array Elements");
//value [1] is banana
console.log(arr[1]);

console.log("Using length");
console.log(arr.length);

//Part 2
console.log("Using push");
arr.push("orange");
for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log("Using pop");
arr.pop();
for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log("Challenge");
arr.push("strawberry");
arr.push("blueberry");
arr.pop();
// Will print apple, banana, cherry, strawberry
for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log(arr.length);

//Part 3
console.log("Using a for Loop");
for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log("Using a for Loop");
for(i = 0; i < arr.length; i++){
    arr[i].toUpperCase();
    console.log(arr[i]);
}
console.log("Counting Specific Items");
var count = 0;
for(i = 0; i < arr.length; i++){
    if(arr[i] == "apple"){
        count++;
    }
}
console.log(count);

//Part 4
console.log("Build a Shopping Cart");
let cart = [];
cart.push("eggs");
cart.push("bacon");
cart.push("cheese");
for(i = 0; i < cart.length; i++){
    console.log(cart[i]);
}
cart.pop();
for(i = 0; i < cart.length; i++){
    console.log(cart[i]);
}
console.log(cart.length);
console.log("Reverse the Order");
let numbers = [1, 2, 3, 4, 5];
for(i = 0; i < numbers.length; i++){
    cart.push(numbers[i]);
    cart.pop(numbers[i]);
}
for(i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

//Part 5
let array1 = ["a", "b", "c", "d"];
let array2= ["red", "green", "blue"];
if(array1.length > array2.length){
    console.log("array 1 is greater");
} else {
    console.log("array 2 is greater");
}

//Part 6
const array = [10, 20, 30, 40, 50, 60];
for(i = 0; i < array.length; i++){
    if(i % 2 == 0){
        console.log(array[i]);
    }
}

//Part 7
let students = ["Alice", "Bob", "Charlie"];
let subjects = ["Math", "Science"];
for(i = 0; i < students.length; i++){
    for(j = 0; j < subjects.length; j++){
        console.log(students[i] + " - " + subjects[j]);
    }
}
/*
A nested for loop works with an inner loop and an outer loop. 
The outer loop will increment through every student and inner loop 
will increment through every subject. This will ensure that every 
combination of student & subject is paired.
*/