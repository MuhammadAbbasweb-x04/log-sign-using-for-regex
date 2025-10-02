

let inputname = document.querySelector("#username");
let inputemail = document.querySelector("#email");
let inputage = document.querySelector("#age");
let inputphone = document.querySelector("#phone");
let form  = document.querySelector("form");


const regexFullName = /^([A-Z][a-z]+)(\s[A-Z][a-z]+)*$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexAge = /^(?:1[0-1][0-9]|12[0-9]|[1-9][0-9]?|0?[1-9])$/;
const regexPhone = /^(?:\+?92\s?|0)?3\d{2}\s?\d{7}$/;

function submit(){
if(regexFullName.test(inputname.value)){ 
 return Swal.fire({
   title: "Good job!",
   text: "You clicked the button!",
   icon: "success"

})
}
else if(regexEmail.test(inputemail.value)){
 return Swal.fire({
   title: "Good job!",
   text: "You clicked the button!",
   icon: "success"

})
}
else if(regexAge.test(inputage.value)){
 return Swal.fire({
   title: "Good job!",
   text: "You clicked the button!",
   icon: "success"

})
}
else if(regexPhone.test(inputphone.value)){
 return Swal.fire({
   title: "Good job!",
   text: "You clicked the button!",
   icon: "success"

})
}
else{
 return Swal.fire({
   icon: "error",
   title: "Oops...",
   text: "Something went wrong!",
   footer: '<a href="#">Why do I have this issue?</a>'
});



}
}















// function submit(){
// if(regexFullName.test(inputname.value) && regexEmail.test(inputemail.value) && regexAge.test(inputage.value) && regexPhone.test(inputphone.value)){
// return Swal.fire({
//   title: "Good job!",
//   text: "You clicked the button!",
//   icon: "success"
// });
// }
// else{
// return Swal.fire({
//   icon: "error",
//   title: "Oops...",
//   text: "Something went wrong!",
//   footer: '<a href="#">Why do I have this issue?</a>'
// });
// }
// }