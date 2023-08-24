const textInput = document.querySelector('#name-input');
const textSpan = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
    
  const inputTextSpan = event.currentTarget.value;
    
  textSpan.textContent = inputTextSpan.trim() === '' ? 'Anonymous' : inputTextSpan;

  });