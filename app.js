

let inputname = document.querySelector("#inputname");
let inputemail = document.querySelector("#inputemail");
let inputage = document.querySelector("#inputage");
let inputnum = document.querySelector("#inputnum");

const nameRegex = /^[A-Za-z\s]{2,50}$/;
const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
const ageRegex = /^(1[01][0-9]|120|[1-9][0-9]?)$/;
const phoneRegex = /^(\+?\d{1,3})?[-\s]?\d{10}$/;


function submit(){
if(nameRegex.test(inputname.value) && emailRegex.test(inputemail.value) && ageRegex.test(inputage.value) && phoneRegex.test(inputnum.value)){
return Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
} 
else{ 
return   Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
}
}