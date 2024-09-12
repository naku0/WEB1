const url = "/api/";

function submitForm(event) {
    event.preventDefault();
    const x = document.querySelector('input[type="radio"]:checked');
    const y = document.getElementById("y");
    const r = document.getElementById("r");
    if (!x) {
    } else {
        if (((-3)<=y.value && y.value<=5) && (1<=r.value&& r.value<=4)) {
            sendData(x, y, r);
        }else{
            y.classList.add("wrong");
            r.classList.add("wrong");
        }
    }
}



function sendData(x, y, r) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            x: x,
            y: y,
            r: r,
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        });
}