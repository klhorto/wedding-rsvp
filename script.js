
var attempt = 3;

function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "a" && password == "b") {
    alert("Login Success");
    window.location = "google.com";
    return true;
  }
else {
  attempt --;
  alert("You have remaining "+attempt+" attempt;")
  if (attempt == 0){
    document.getElementById("username").disabled = true;
 document.getElementById("password").disabled = true;
  document.getElementById("submit").disabled = true;
    return false;
  }
}
}
