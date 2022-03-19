var numberOfDrumButtons = document.querySelectorAll(".drum").length;
const question = ["What is your favourite sweet dish?","What is your favourite go to place?","What is Your favourite color?","What is your favourite dessert?","What is your High School teacher's name?","What is your favourite song?"];
const answer= ["Rasgulla","Kashmir","blue","ice cream","Kiran","Ek Onkar"];
var random;
for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    random = generate();

    var buttonInnerHTML = this.innerHTML;

    openForm();
    document.getElementById("ques").innerHTML=question[random];
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

/*document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});*/
function generate(){
  return Math.floor(Math.random() * 6);

}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function Validate(){
  var x = document.getElementById("ans").value;
  if(x===answer[random])
  alert("Access Granted");
  else
  alert("Access Denied");
}
function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
