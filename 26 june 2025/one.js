// var i= "hello"
// const c=i.split("").reverse().join("");
// console.log(c)


// var i= "hello"
// const c=i.split("").reverse().join("");
// if(i===c){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }


// let c = "hello i am goodness";
// let words = c.split(" ");
// let longest = "";

// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > longest.length) {
//     longest = words[i];
//   }
// }
// console.log(longest); 

// let c=[1, [2, [3, 4], 5], 6]
// const flat = c.flat(Infinity);
// console.log(flat);

// let v=[1, 2, 2, 3, 4, 4, 5]
// let d=[]
// for (let i of v){
//      if (!d.includes(i)) {
//     d.push(i);
//   }
// }
// console.log(d)


// c="listen"
// d="silent"
// let h=true
// if(c.length==d.length){
//      const sorted1 = c.split("").sort().join("");
//   const sorted2 = d.split("").sort().join("");

//   if (sorted1 === sorted2){
//     console.log("anagram")
//   }
//   else{
//     console.log("not anagram")
//   }
// }


// let c = "helloo i am";
// let d = c.split("");
// for (let i = 0; i < d.length; i++) {
//   if (d[i] === " " && i + 1 < d.length) {
//     d[i + 1] = d[i + 1].toUpperCase();
//   }
// }
// d[0] = d[0].toUpperCase(); 
// console.log(d.join(""));



// function groupBy(arr, prop) {
//   return arr.reduce((acc, obj) => {
//     const key = obj[prop];
//     if (!acc[key]) {
//       acc[key] = [];
//     }
//     acc[key].push(obj);
//     return acc;
//   }, {});
// }



// function customMap(array, callback) {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     result.push(callback(array[i], i, array));
//   }
//   return result;
// }
// console.log(customMap([1, 2, 3], x => x * 2))




// async function fetchData(url) {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("Data received:", data);
//     return data;
//   } catch (error) {
//     console.error("Failed to fetch data:", error.message);
//   }
// }
// await fetchData("https://api.example.com/users");





// function sumEvenNumbers(obj) {
//   let sum = 0;

//   for (const key in obj) {
//     const value = obj[key];

//     if (typeof value === 'object' && value !== null) {
//       sum += sumEvenNumbers(value);
//     } else if (typeof value === 'number' && value % 2 === 0) {
//       sum += value;
//     }
//   }
//   return sum;
// }
// const obj = {
//   a: 2,
//   b: { c: 4, d: 5 },
//   e: { f: { g: 6 }, h: 3 }
// };
// console.log(sumEvenNumbers(obj)); 





// function toCamelCase(str) {
//   return str.split('_').map((word, index) => {
//     return index === 0 ? word : word[0].toUpperCase() + word.slice(1);
//   }).join('');
// }
// console.log(toCamelCase("this_is_a_test"))




// function isValidEmail(email) {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email);
// }
// console.log(isValidEmail("test@example.com"))
// console.log(isValidEmail("invalid-email"))




// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log(`Hello, I'm ${this.name}`);
//   }
// }
// class Student extends Person {
//   constructor(name, subject) {
//     super(name); // call the parent constructor
//     this.subject = subject;
//   }
//   greet() {
//     console.log(`Hello, I'm ${this.name} and I study ${this.subject}`);
//   }
// }
// const student = new Student("Alice", "Math");
// student.greet()