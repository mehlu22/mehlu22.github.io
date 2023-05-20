function sendEmail(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Email content
  const subject = 'New Contact Form Submission';
  const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  // Construct the mailto URL
  const mailtoUrl = `mailto:mehlu22@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open the mailto URL in a new window or tab
  window.open(mailtoUrl);
}
