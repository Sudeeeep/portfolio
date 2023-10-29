import "dotenv/config";
import * as bootstrap from "bootstrap";

const form = document.querySelector("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

emailjs.init(process.env.PUBLIC_KEY);

form.addEventListener("submit", (e) => {
  sendEmail(e);
  resetForm();
});

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .send(process.env.SERVICE_KEY, process.env.TEMPLATE_KEY, {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      message: message.value,
      subject: subject.value,
    })
    .then(
      function (response) {
        alert("Email sent successfully!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
}

function resetForm() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
}
