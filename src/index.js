const form = document.querySelector("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  sendEmail(e);
  resetForm();
});

function sendEmail(e) {
  e.preventDefault();
  alert("email sent successfully");
}

function resetForm() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
}
