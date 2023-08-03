//General js functions used by multiple sites

//Script for login form and signup
//login form script
// Pseudo-database for storing users
var users = [];
function Loginvalidate() {
  var name = document.getElementById("nameLog").value;
  var password = document.getElementById("passLog").value;

  // Check for empty fields first
  if (name == "" || password == "") {
    document.getElementById("errorMsg").innerHTML = "Please fill the required fields";
    return false;
  }

  // Check password length
  else if (password.length < 8) {
    document.getElementById("errorMsg").innerHTML = "Your password must include at least 8 characters";
    return false;
  }

  // Check against pseudo-database
  var user = users.find(user => user.name === name && user.password === password);

  if (!user) {
    document.getElementById("errorMsg").innerHTML = "Invalid username or password";
    return false;
  }

  else {
    // Change class name and inner HTML of header button
    document.getElementById("headerbutton").className = "postsignup-button";
    document.getElementById("headerbutton").innerHTML = name;

    // Hide login popup
    document.getElementById("loginPop").style.display = "none";

    // Show welcome message
    confirm("Welcome back, " + name + "!");
    return false;
  }
}

// Handles signup form script
function Signupvalidate() {
  var Simail = document.getElementById("emailSign").value;
  var Siname = document.getElementById("nameSign").value;
  var Sipassword = document.getElementById("passSign").value;

  if (Simail == "" || Siname == "" || Sipassword == "") {
    document.getElementById("errorsignMsg").innerHTML = "Please fill in the required fields";
    return false;
  }

  else if (Sipassword.length < 8) {
    document.getElementById("errorsignMsg").innerHTML = "Your password must include at least 8 characters";
    return false;
  }

  else {
    // Add user to pseudo-database
    users.push({ name: Siname, email: Simail, password: Sipassword });

    // Confirm signup
    confirm("Successfully signed up");
    return false;
  }
}
function toggleDisplay(element) {
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
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
  document.getElementById("trendimg").src="pictures/tokyorevengerscover.png";
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





//functions for the credits page
//function to open the contact form pop-up
function openContactForm() {
  document.getElementById("contactFormContainer").style.display = "block";
}

// Function to close the contact form pop-up
function closeContactForm() {
  document.getElementById("contactFormContainer").style.display = "none";
}

// Function to validate the form fields
function validateContactForm() {
  const name = document.getElementById("contactname").value;
  const email = document.getElementById("contactemail").value;
  const message = document.getElementById("contactmessage").value;

  // Simple email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if fields are not empty and email format is valid
  if (name.trim() === "" || email.trim() === "" || message.trim() === "" || !emailPattern.test(email)) {
      confirm("Please fill in all fields with valid information.");
      return false; 
  }

  // If validation passes, close the contact form
  closeContactForm();
  alert("Message sent!");
  return true; // Allow form submission
}
