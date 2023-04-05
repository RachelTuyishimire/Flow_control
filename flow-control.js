// Question one
// Write a function that accepts an array of 
// strings and console.logs each element using a for loop.
function arrayString(arr){
  for (let i=0; i<arr.length; i++){
    console.log(objects[i]);
  }

}
let objects = ["Book", "Pen", "Pencil", "Eraser", "Screen"];
arrayString(objects);


// Question two
// Write a function that accepts an array of numbers and uses the forEach() method to 
// console.log each number multiplied by 2.
function arrayNum(arr){
   num.forEach(num =>{console.log(num * 2)});

}
let num = [4, 6, 7, 2, 5, 8];
arrayNum(num)


// Question three
// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the 
// last two added by 5. Console the array with the new values
function numericArr(arr){
    for (let i=0; i<numb.length; i++){
        if (i ===4 ){
        console.log(numb[i]*8)
        }
        else{
            console.log(numb[i]+ 5)
        }
    }
}
let numb = [4, 8, 23, 67, 89, 10, 76, 5 ]
numericArr(numb)

// Question four
// Write a function that takes in the following array and use a while loop to iterate 
// and break when the item is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9];
function looping(arrNum){
    let i=0;
    while( i< arrNum.length){
        console.log (arrNum[i]);
        if (i===4){
        break;
    }
    i++
}
}
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
looping(arrNum)

// Question five
// Write a function that takes in a an array of strings and use a continue statement
//  when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']

function fruitArray(fruits){
    for (let i=0; i<fruits.length; i++){
        if (i===2){
            continue;
        }
        console.log (fruits[i]);
    }
}
let fruits = ["apple", "plum", "banana", "strawberries", "kiwi"]
fruitArray(fruits)

