// Sample user data for demonstration
const adminAccount = {
  username: "MineSkins",
  password: "Av6nivr123"
};

// Placeholder for logged-in user
let loggedInUser = null;

// Login function
function login(username, password) {
  if (username === adminAccount.username && password === adminAccount.password) {
    loggedInUser = {
      role: "admin",
      username: username
    };
    alert("Logged in as Admin!");
    showAdminPanel();
  } else {
    alert("Invalid username or password.");
  }
}

// Show admin panel for approving/rejecting skins
function showAdminPanel() {
  if (loggedInUser && loggedInUser.role === "admin") {
    const adminPanel = document.createElement("div");
    adminPanel.innerHTML = `
      <h2>Admin Panel</h2>
      <p>Approve or reject uploaded skins here.</p>
      <!-- Admin functionality can be added here -->
    `;
    document.body.appendChild(adminPanel);
  }
}

// Example usage of login function
document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector("#loginButton");
  if (loginButton) {
    loginButton.addEventListener("click", () => {
      const username = prompt("Enter username:");
      const password = prompt("Enter password:");
      login(username, password);
    });
  }
});
