const fullname = document.getElementById("name");
const email = document.getElementById("email");
const linkedin = document.getElementById("linkedin");
const comments = document.getElementById("comments");
// get all inputs
const inputs = document.querySelectorAll("input, textarea");
const required = document.querySelectorAll(
  "input[required], textarea[required]"
);
// output fields
const erroroutput = document.getElementById("errors");

// temporary error message function
// have default time shown be 3 secs
function showErrorMsg(message, duration = 3000) {
  const messageVal = document.createElement("p");
  messageVal.textContent = message;
  erroroutput.appendChild(messageVal);

  setTimeout(() => {
    messageVal.style.opacity = "0";
    setTimeout(() => {
      messageVal.remove();
    }, 500);
  }, duration);
}

// want to make required field go red after input field interacted with if left empty
// first, if form is focused, remove any specialized invalid styling
inputs.forEach((field) => {
  field.addEventListener("focus", function () {
    if (!field.checkValidity()) {
      field.classList.add("invalid");
    } else {
      field.classList.remove("invalid");
    }
  });
  field.addEventListener("blur", function () {
    if (!field.checkValidity()) {
      field.classList.add("invalid");
    } else {
      field.classList.remove("invalid");
    }
    field.reportValidity();
  });
});

// applying warning styling and message in output section if improper char entered
required.forEach((field) => {
  field.addEventListener("input", function () {
    if (field.validity.patternMismatch) {
      showErrorMsg("Invalid character entered!");
      field.classList.add("invalid-entry");
    } else {
      field.classList.remove("invalid-entry");
    }
  });
});

// setting specific validity messages
email.addEventListener("input", (event) => {
  if (!email.checkValidity() && email.validity.typeMismatch) {
    email.setCustomValidity(
      "Enter in a proper email address of the form name@domain.com."
    );
  } else {
    email.setCustomValidity("");
  }
});

comments.addEventListener("input", (event) => {
  if (comments.value == "") {
    comments.setCustomValidity("A comment is required to submit this form.");
  } else {
    comments.classList.remove("invalid");
    comments.setCustomValidity("");
  }
});
