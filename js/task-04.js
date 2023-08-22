
const buttonDecrement = document.querySelector('[data-action = "decrement"]');
const buttonIncrement = document.querySelector('[data-action = "increment"]');
let spanValu = document.querySelector('#value');

let counterValue = 0;

const handleClickButtonDecrement = () => {
    return spanValu.textContent = counterValue -= 1;
};

const handleClickButtonIncrement = () => {
    return spanValu.textContent = counterValue += 1;
};


buttonDecrement.addEventListener ('click', handleClickButtonDecrement);
buttonIncrement.addEventListener('click', handleClickButtonIncrement);





