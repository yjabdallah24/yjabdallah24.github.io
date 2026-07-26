// Validate the contact form before submitting

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var country = document.getElementById("country").value;
  var comments = document.getElementById("comments").value;

  if (fullName === "" || email === "" || country === "" || comments === "") {
    alert("Please fill in all fields before submitting.");
    return;
  }

  alert("Thank you! Your message was submitted successfully.");
  document.getElementById("contactForm").reset();
});
