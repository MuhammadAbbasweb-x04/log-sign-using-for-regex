

let username = document.querySelector("#username");
let email = document.querySelector("email");
let age = document.querySelector("#age");
let phone = document.querySelector("#phone");


const regexFullName = /^([A-Z][a-z]+)(\s[A-Z][a-z]+)*$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexAge = /^(?:1[0-1][0-9]|12[0-9]|[1-9][0-9]?|0?[1-9])$/;
const regexPhone = /^(?:\+?92\s?|0)?3\d{2}\s?\d{7}$/;


function Submit(){
if(regexFullName.test(username.value) && regexEmail.test(email.value) && regexAge.test(age.value) && regexPhone.test(phone.value)){
return Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
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