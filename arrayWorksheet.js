//Part 1
let arr = ["apple", "banana", "cherry"];

//value [1] is banana
console.log(arr[1]);

console.log(arr.length);

//Part 2
arr.push("orange");
for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

arr.pop();
for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

arr.push("strawberry");
arr.push("blueberry");
arr.pop();
// Will print apple, banana, cherry, strawberry
for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log(arr.length);

//Part 3
for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for(i = 0; i < arr.length; i++){
    arr[i].toUpperCase();
    console.log(arr[i]);
}

var count = 0;
for(i = 0; i < arr.length; i++){
    if(arr[i] == "apple"){
        count++;
    }
}
console.log(count);

//Part 4
let cart = [];
cart.push();
cart.push();
cart.push();
for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
cart.pop();
for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log(arr.length);

let numbers = [1, 2, 3, 4, 5];
for(i = 0; i < arr.length; i++){
    cart.push(numbers[i]);
    cart.pop(numbers[i]);
}
for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//Part 5
let array1 = ["a", "b", "c", "d"];
let array2= ["red", "green", "blue"];