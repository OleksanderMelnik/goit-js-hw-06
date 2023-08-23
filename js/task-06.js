const textInput = document.querySelector('#validation-input');

textInput.addEventListener('input', (event) => {
    const inputText = event.currentTarget.value.length;
    
    textInput.addEventListener("blur", () => {
        
    inputText === Number(textInput.dataset.length) ? textInput.id = 'validation-input-valid' : textInput.id = 'validation-input-invalid';
    
    });

});
    


    