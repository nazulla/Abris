function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Choose the best picture which is related to you. ") {
    x.innerHTML = "Finish your picture and send it to our email. Wait the result in our page in few days!"
  } else {
    x.innerHTML = "Choose the best picture which is related to you. ";
  }
}
