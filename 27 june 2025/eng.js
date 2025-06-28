// let email = "example@domain.com";
// let pattern = /^[\w.-]+@[\w.-]+\.\w+$/;
// if (pattern.test(email)) {
//   console.log("Valid email");
// } else {
//   console.log("Invalid email");
// }





// let text = "123456";
// let pattern = /^\d+$/;
// if (pattern.test(text)) {
//   console.log("Contains only digits");
// } else {
//   console.log("Contains non-digit characters");
// }





// let cs="76500"
// let pattern= /^\d{5}$/;
// if (pattern.test(cs)){
//     console.log("valid post")

// }else{
//     console.log("not valid")
// }





// let cs="7650012345"
// let pattern= /^[6-9]\d{9}$/;
// if (pattern.test(cs)){
//     console.log("phone")
// }else{
//     console.log("wrong")
// }





// let cs="7650012345@Balaji"
// let pattern= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
// if (pattern.test(cs)){
//     console.log("password")
// }else{
//     console.log("wrong")
// }





// const text = "Hello there!";
// const result = text.match(/^Hello/);
// if (result) {
//   console.log(" Starts with 'Hello'");
// } else {
//   console.log(" Does not start with 'Hello'");
// }




// const text = "example.com";
// const result = text.match(/\.com$/);
// if (result) {
//   console.log("Ends with .com");
// } else {
//   console.log("Does not end with .com");
// }





// const sentence = "The Quick Brown Fox Jumps Over the Lazy Dog";
// const matches = sentence.match(/\b[A-Z][a-z]*\b/g);
// console.log(matches);





// const messy = "This   sentence    has   too  many    spaces.";
// const cleanedText = messy.replace(/\s+/g, ' ');
// console.log(cleanedText);





// function checkk(dateStr) {
//   const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/;
//   return regex.test(dateStr);
// }
// console.log(checkk("25-12-2025")); 
// console.log(checkk("31-04-2025")); 
// console.log(checkk("99-99-9999")); 