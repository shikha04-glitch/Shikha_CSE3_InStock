let isLoggedIn = false;
function showLogin() {
  if (isLoggedIn) {
    logout();
  } else {
    document.getElementById("loginModal").style.display = "block";
  }
}

// CLOSE LOGIN MODAL
function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

// LOGIN SUBMIT FUNCTIONALITY
function submitLogin() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  if (user === "admin" && pass === "admin123") {
    isLoggedIn = true;
    alert("Login Successful!");
    closeLogin();
    document.querySelector(".login-btn").textContent = user + " (Logout)";
  } else {
    alert("Invalid credentials, try again!");
  }
}

// LOGOUT FUNCTIONALITY
function logout() {
  isLoggedIn = false;
  document.querySelector(".login-btn").textContent = "Login";
  alert("Logged out successfully!");
}

// SEARCH FUNCTIONALITY
function searchProduct() {
  var searchInput = document.getElementById("searchBar").value.toLowerCase();
  if (searchInput.length > 0) {
    alert("Searching for: " + searchInput);
    // You can implement actual search logic here (filtering product list)
  } else {
    alert("Please enter a product name to search.");
  }
}

// CATEGORY TAB SWITCHING

// HERO BUTTON FUNCTIONALITY
function stockUpNow() {
  alert("Redirecting to Stock Up section...");
  // You can implement actual redirection or dynamic content loading here.
}
