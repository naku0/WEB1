const reg = /\d/;
const input = document.querySelector('input[type="text"]');
const inputFilter = (event) => {
    let symbol = String.fromCharCode(event.keyCode);
    if(!reg.test(symbol)) {
        event.preventDefault();
    }
};

input.addEventListener('keypress', inputFilter);
