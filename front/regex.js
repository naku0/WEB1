const regY = /^\d$/;
const regR = /^[1-4](\.\d)?$/;
const inputY = document.getElementById('y');
const inputR = document.getElementById('r');
const inputFilter = (event, regex) => {
    let symbol = String.fromCharCode(event.keyCode);
    if(!regex.test(symbol)) {
        event.preventDefault();
    }
};
inputY.addEventListener('keypress', (event)=>(inputFilter(event, regY)));
inputR.addEventListener('keypress', (event)=>(inputFilter(event, regR)));
