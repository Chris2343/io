// Get references to the buttons
const adminButton = document.getElementById("admin-btn");
const salesButton = document.getElementById("sales-btn");

// Add click event listeners to the buttons
adminButton.addEventListener("click", () => {
    // Redirect to the admin page (you can replace "admin.html" with your actual admin page URL)
    window.location.href = "login.html";
});

salesButton.addEventListener("click", () => {
    // Redirect to the sales page (you can replace "sales.html" with your actual sales page URL)
    window.location.href = "saleslogin.html";
});
