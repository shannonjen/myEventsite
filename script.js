
var myButton = document.querySelector("#myButton")
myButton.addEventListener("click", function(){
  console.log("You clicked the button")
  var num1 = document.querySelector("#box1").value
  var num2 = document.querySelector("#box2").value
  var sum = parseInt(num1) + parseInt(num2);
  document.querySelector("#answer").innerHTML = sum;
})
