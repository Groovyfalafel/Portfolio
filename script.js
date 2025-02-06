// script.js

// 1. Initialize EmailJS with your Public Key
window.onload = function() {
    emailjs.init("8wff83ZfDlgDCfIwA");
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // 2. Send the form data using EmailJS
      emailjs.sendForm("service_yqylj81", "template_grj6c4b", "#contactForm", "8wff83ZfDlgDCfIwA")
        .then(
          function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Your message has been sent!");
            form.reset(); // Reset the form
          },
          function(error) {
            console.log("FAILED...", error);
            alert("Oops, something went wrong... Please try again later.");
          }
        );
    });
  });
  