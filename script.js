//To find an element present in an array or not

// var array = [1, 2, 3, 4, 5];
// var isArray = false;

// for (var i = 0; i < array.length; i++) {
//   if (array[i] === 5) {
//     var isArray = true;
//   }
// }
// if (isArray) {
//   console.log("Present in array");
// } else {
//   console.log("Not Present in an array");
// }

// //To find an even number & odd number

// for (var i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     console.log(`even number:${array[i]}`); //2,4
//   } else {
//     console.log(`odd number:${array[i]}`); //1,3,5
//   }
// }

// //To remove duplicate elements in an array

// var array = [1, 1, 2, 2, 3, 4, 3];
// let newArray = []; //Initial it will be -1

// for (i = 0; i < array.length; i++) {
//   if (newArray.indexOf(array[i]) == -1) {
//     //it will push element which matches index -1
//     newArray.push(array[i]);
//   }
// }
// console.log(newArray); //[1,2,3,4]

// //To find first and last value in an array

// var array = [1, 2, 3, 4, 5];
// let first = null;
// let last = null;

// for (let i = 0; i < array.length; i++) {
//   if (i === 0) {
//     first = array[i];
//   }
//   if (i === array.length - 1) {
//     //,i=4,array.length-5-1=4,4=4,this will become 4
//     last = array[i];
//   }
// }

// console.log("First Element:", first); // 1
// console.log("Last Element:", last); //5

// let first = array[0]
// let last = array [array.length-1]

// //To remove duplicate element next to each other

// var array = [1, 1, 2, 2, 3, 4, 3];

// const uniqueArr = [array[0]];

// for (let i = 1; i < array.length; i++) {
//   if (array[i] !== array[i - 1]) {
//     //array[2] !== array[2-1],array[2] !== array[1],2!==1
//     uniqueArr.push(array[i]);
//   }
// }

// console.log(uniqueArr); //[1,2,3,4,3]

// //To sort an array in ascending

// var array = [5, 3, 2, 4, 1];

// for (i = 0; i < array.length; i++) {
//   for (j = i + 1; j < array.length; j++) {
//     if (array[i] > array[j]) {
//       //i=5,j=3
//       let temp = array[i]; //temp=5
//       array[i] = array[j]; //i=3
//       array[j] = temp; //j=5
//     }
//   }
// }
// console.log(array);

// //To sort an array in descending

// for (i = 0; i < array.length; i++) {
//   for (j = i + 1; j < array.length; j++) {
//     if (array[i] < array[j]) {
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   }
// }
// console.log(array);

// //To check palindrome or not

// var array = [1, 2, 3, 1];
// var isPalindrome = true;

// for (i = 0; i < array.length / 2; i++) {
//   if (array[i] !== array[array.length - i - 1]) {
//     isPalindrome = false;
//   }
// }

// console.log(isPalindrome);

const median = (a, b) => {
  let concat = a.concat(b);
  let sort = concat.sort((a, b) => a - b);
  const half = Math.floor(sort.length / 2); //2
  if (sort.length % 2) {
    return sort[half];
  } else {
    return (sort[half] + sort[half - 1]) / 2;
  }
};

console.log(median([1, 3], [2, 4]));
