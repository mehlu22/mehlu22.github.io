// Get the form element and add an event listener for form submission
const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

// Function to submit the form data
function submitForm(event) {
  event.preventDefault(); // prevent the default form submission

  // Get the values of the input fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Construct the email message
  const subject = `New message from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  // Send the email
  window.location.href = `mailto:mehlu22@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Reset the form
  form.reset();
}
