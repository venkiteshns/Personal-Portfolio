document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const name = document.getElementById("name");
  const email = document.getElementById("e-mail");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const error = document.getElementById("error");

  const nameRegex = /^[A-Za-z]+( [A-Za-z]+)*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //name validation
  function validateName() {
    name_text = name.value.trim();
    if (name_text === "") {
      error.innerText = "All Fields Are Required !";
      error.style.visibility = "visible";
      return false;
    }
    if (!nameRegex.test(name_text)) {
      error.innerText = "Only alphabets and spaces are allowded!";
      error.style.visibility = "visible";
      return false;
    }
    error.innerText = "";
    error.style.visibility = "hidden";
    return true;
  }

  //email validation
  function validateEmail() {
    email_text = email.value.trim();

    if (email_text === "") {
      error.innerText = "All Fields Are Required !";
      error.style.visibility = "visible";
      return false;
    }
    if (!emailRegex.test(email_text)) {
      error.innerText = "Please enter a valid email id !";
      error.style.visibility = "visible";
      return false;
    }
    error.innerText = "";
    error.style.visibility = "hidden";
    return true;
  }

  //Subject  validation
  function validatSubject() {
    subject_text = subject.value.trim();
    if (subject_text === "") {
      error.innerText = "All Fields Are Required !";
      error.style.visibility = "visible";
      return false;
    }
    error.innerText = "";
    error.style.visibility = "hidden";
    return true;
  }

  //Message validation
  function validatMessage() {
    message_text = message.value.trim();
    if (message_text === "") {
      error.innerText = "All Fields Are Required !";
      error.style.visibility = "visible";
      return false;
    }
    error.innerText = "";
    error.style.visibility = "hidden";
    return true;
  }

  name.addEventListener("blur", validateName);
  email.addEventListener("blur", validateEmail);
  subject.addEventListener("blur", validatSubject);
  message.addEventListener("blur", validatMessage);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const isValid =
      validateName() && validateEmail() && validatSubject() && validatMessage();

    if (!isValid) {
      console.log("isValid", isValid);
      return;
    }
    sendMail();
    console.log("Success", isValid);

    function sendMail() {
      let data = {
        Name: name.value,
        Email: email.value,
        Subject: subject.value,
        Message: message.value,
      };
      console.log(data);

      emailjs.send("service_s1w355q", "template_5ckjoep", data).then((res) => {
        // alert
          error.classList.remove("alert-danger");
          error.classList.add("alert-success");
          error.style.visibility = "visible";
          error.innerText = "FORM SUCCESFULLY SUBMITTED ";
        setTimeout(() => {
            location.href="contact.html";
        }, 1500)
      });
    }
  });
});
