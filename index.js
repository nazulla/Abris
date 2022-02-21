for(var i = 0; i < document.querySelectorAll(".bb").length; i++)
{
  document.querySelectorAll(".bb")[i].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "N":
      var au1 = new Audio('au1.wav');
      au1.play();
        break;
      case "a":
      var au2 = new Audio('au2.wav');
      au2.play();
        break;
      case "t":
      var au3 = new Audio('au3.wav');
      au3.play();
        break;
      case "u":
      var au4 = new Audio('au4.wav');
      au4.play();
        break;
        case "r":
        var au5 = new Audio('au5.wav');
       au5.play();
          break;
          case "e":
          var au6 = new Audio('au6.wav');
          au6.play();
            break;
      case "A":
      var an1 = new Audio('an1.wav');
    an1.play();
        break;
      case "n":
      var an2 = new Audio('an2.wav');
      an2.play();
        break;
      case "i":
      var an3 = new Audio('an3.wav');
      an3.play();
        break;
      case "m":
      var an4 = new Audio('an4.wav');
      an4.play();
        break;
        case "a":
        var an5 = new Audio('an5.wav');
       an5.play();
          break;
          case "l":
          var an6 = new Audio('an6.wav');
          an6.play();
            break;
            case "s":
            var an7 = new Audio('an7.wav');
            an7.play();
              break;
      default:
    }
  });
};
