alert ('Welcome to me portfolio');

function validateForm() {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  return true;
}

