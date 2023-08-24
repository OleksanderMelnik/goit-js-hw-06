const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {

  event.preventDefault();
  const formData = {}; 

  for (const element of registerForm.elements) {
    if (element.name) {
      formData[element.name] = element.value;
    };
  };

    if (formData.email && formData.password) {
      console.log(formData);
      registerForm.reset();
    } else {
      alert ("Please fill in all the fields!");
    };

}
