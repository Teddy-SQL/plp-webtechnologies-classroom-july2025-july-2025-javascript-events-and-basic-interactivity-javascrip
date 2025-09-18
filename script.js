// -------------------------------
// Section 1: Event Handling for Buttons
// -------------------------------
const dynamicText = document.getElementById("dynamicText");
const changeTextBtn = document.getElementById("changeTextBtn");
const toggleColorBtn = document.getElementById("toggleColorBtn");

// Event: Change text content when button is clicked
changeTextBtn.addEventListener("click", () => {
  dynamicText.textContent = "The text has been changed!";
});

// Event: Toggle color on text
toggleColorBtn.addEventListener("click", () => {
  dynamicText.style.color =
    dynamicText.style.color === "red" ? "black" : "red";
});

// -------------------------------
// Section 2: Custom Interactive Feature (Number Generator)
// -------------------------------
const generateNumbersBtn = document.getElementById("generateNumbersBtn");
const numberList = document.getElementById("numberList");

// Event: Generate numbers dynamically and append to list
generateNumbersBtn.addEventListener("click", () => {
  numberList.innerHTML = ""; // Clear existing numbers
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = "Number " + i;
    numberList.appendChild(li);
  }
});

// -------------------------------
// Section 3: Custom Form Validation
// -------------------------------
const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  feedback.textContent = ""; // Reset feedback

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("messageInput").value.trim();

  let valid = true;
  let errors = [];

  // Validate name
  if (name.length < 2) {
    valid = false;
    errors.push("Name must be at least 2 characters long.");
  }

  // Validate email (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    valid = false;
    errors.push("Please enter a valid email address.");
  }

  // Validate message
  if (message.length < 10) {
    valid = false;
    errors.push("Message must be at least 10 characters long.");
  }

  // Display feedback
  if (valid) {
    feedback.style.color = "green";
    feedback.textContent = "Form submitted successfully!";
    contactForm.reset();
  } else {
    feedback.style.color = "red";
    feedback.textContent = errors.join(" ");
  }
});
