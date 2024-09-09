const url = "http://localhost:8080/";

function submitForm(event) {
    event.preventDefault();
    let x = document.querySelector('input[type="radio"]:checked');
    let y = document.getElementById("y").value;
    let r = document.getElementById("r").value;
    if (!x) {
        alert("hui")
    } else {
        sendData(x,y,r);
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