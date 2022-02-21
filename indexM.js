$(".choose").slideUp();


$(".options").on("click", function(){
  //$(".choose").fadeToggle();
  $(".choose").slideToggle();
});


const email = document.querySelector('input[type="email"]');

email.addEventListener('focus', function(event){
  event.target.style.background = 'pink';
});

email.addEventListener('blur', function(event){
  event.target.style.background = '';
});

function Users(name){
  this.name=name;
}

function promptMe(){
  let person =prompt("Please write your name (or whatever you want us to call you) here: ");
  if(person=="" || person==" "){
    alert("You entered empty value, how are we supposed to call you? Try again, please!");
  }
  else if(person===null){
    alert("Why did you click cancel?");
  }
  else{
    user1=new Users(person);
    alert(user1.name+", the creators of this website which are: Nazerke, Aru, Aida saying THANK YOU for visiting our website!");
  }
}


//SNIPPETS


function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
// function myFunction() {
//   for(var i=0; i<document.querySelectorAll(".myPopup").length; i++){
//      document.querySelectorAll(".myPopup")[i].classList.toggle("show");
//   }
// }
