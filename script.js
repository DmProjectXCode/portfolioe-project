// Toggle theme between light and dark mode
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Change icon based on mode
  const icon = body.classList.contains("dark-mode") ? "fa-moon" : "fa-sun";
  toggleBtn.innerHTML = `<i class="fas ${icon}"></i>`;
});

// Redirect to thank you page after form submission
function redirectToThankYouPage() {
  event.preventDefault(); // Prevent the form from refreshing the page
  window.location.href = "thank-you.html"; // Redirect to thank you page
}
