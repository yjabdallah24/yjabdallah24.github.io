// Contact form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const fields = [
    { input: "fullName", wrapper: "nameField" },
    { input: "email", wrapper: "emailField" },
    { input: "country", wrapper: "countryField" },
    { input: "comments", wrapper: "commentsField" },
  ];

  function isValidEmail(value) {
    // simple, practical email pattern
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let allValid = true;

    fields.forEach(function (field) {
      const inputEl = document.getElementById(field.input);
      const wrapperEl = document.getElementById(field.wrapper);
      const value = inputEl.value.trim();

      let fieldValid = value.length > 0;
      if (field.input === "email" && fieldValid) {
        fieldValid = isValidEmail(value);
      }

      if (fieldValid) {
        wrapperEl.classList.remove("error");
      } else {
        wrapperEl.classList.add("error");
        allValid = false;
      }
    });

    if (!allValid) {
      return;
    }

    alert("Thank you! Your message was submitted successfully.");
    form.reset();
  });
});
