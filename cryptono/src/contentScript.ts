console.log('Cryptono content script loaded');

// Basic autofill functionality
const autofillFields = () => {
  const passwordFields = document.querySelectorAll('input[type="password"]');
  // Add your autofill logic here
}

document.addEventListener('DOMContentLoaded', autofillFields);