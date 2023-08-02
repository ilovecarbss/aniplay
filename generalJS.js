//General js functions used by multiple sites

//Script for login form and signup form


  //login form script
  function Loginvalidate() {
    var name = document.getElementById("nameLog").value;
    var password = document.getElementById("passLog").value;

  //if username or password field empty, or password is shorter than 8 characters, output error
    if (name == "" || password == "") { 
      document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
      return false;
    }

    else if (password.length < 8) {
      document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
      return false;
    }

    else {
      confirm("Successfully logged in");
      return true;
    }
  }

  //handles signup form script
  function Signupvalidate() {
    var Simail = document.getElementById("emailSign").value;
    var Siname = document.getElementById("nameSign").value;
    var Sipassword = document.getElementById("passSign").value;

    if (Simail == "" || Siname == "" || Sipassword == "") {
      document.getElementById("errorsignMsg").innerHTML = "Please fill in the required fields"
      return false;
    }

    else if (Sipassword.length < 8) {
      document.getElementById("errorsignMsg").innerHTML = "Your password must include at least 8 characters"
      return false;
    }
    else {
      //reloads the page after user presses ok on alert
  confirm("Successfully signed up")
      return true;
  
    }
  }
  


//popup open/close functions
function openPop() {
document.getElementById("loginPop").style.display = "block";
}
function closePop() {
document.getElementById("loginPop").style.display = "none";
}
function SignupPop() {
document.getElementById("SignPop").style.display = "block";
}
function closeSignPop() {
document.getElementById("SignPop").style.display = "none";
}


//changes the pictures and url of the trending now section of main page
function chgTrendimg1(){
  document.getElementById("trendimg").src="pictures/suzume.jpg";
  var link = document.getElementById("trendurl");
        link.setAttribute("href", "Videoplayers/SUZUME/suzume.html");
        return false;
}
function chgTrendimg2(){
  document.getElementById("trendimg").src="pictures/narutoshippuden.jpg";
  var link = document.getElementById("trendurl");
        link.setAttribute("href", "Videoplayers/NARUTOSHIPPUDEN/narutoE1.html");
        return false;
}

function chgTrendimg3(){
  document.getElementById("trendimg").src="pictures/tokyorevengers.jpg";
  var link = document.getElementById("trendurl");
        link.setAttribute("href", "Videoplayers/TOKYOREVENGERS/tokyoE1.html");
        return false;
}

function chgTrendimg4(){
  document.getElementById("trendimg").src="pictures/chainsaw_man.png";
  var link = document.getElementById("trendurl");
        link.setAttribute("href", "Videoplayers/CHAINSAW/chainE1.html");
        return false;
}

function chgTrendimg5(){
  document.getElementById("trendimg").src="pictures/re_zero.jpg";
  var link = document.getElementById("trendurl");
        link.setAttribute("href", "Videoplayers/REZER/rze1.html");
        return false;
}

// functions for leaderboard
// Function to handle the button click
function handleButtonClick(button) {
  // Toggle the 'active' class to change the background color
  button.classList.toggle('active');
}

function handleButtonClick(rank) {
  // Replace this with your desired logic when the button is clicked
  console.log("Button clicked for rank:", rank);
}




