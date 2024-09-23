const url = "/api/";

function submitForm(event) {
    event.preventDefault();
    const x = document.querySelector('input[type="radio"]:checked');
    const y = document.getElementById("y");
    const r = document.getElementById("r");
    if (!x) {
        createError("x не определен");
    } else {
        y.classList.remove("wrong");
        r.classList.remove("wrong");
        Promise.all([
            checkY(y),
            checkR(r)
        ]).then(() =>{
            sendData(x, y, r);
        }).catch((error) => {
            createError(error);
        });
    }
}

const checkY = (value) => {
    return new Promise((resolve, reject) => {
        if ((-3) > value.value || value.value > 5) {
            value.classList.add("wrong");
            reject("y вне допустимого радиуса");
        } else {
            resolve();
        }
    });
}

const checkR = (value) => {
    return new Promise((resolve, reject) => {
        if (1 > value.value || value.value > 4) {
            value.classList.add("wrong");
            reject("r вне допустимого радиуса")
        } else {
            resolve();
        }
    });
}

const createError = (message) =>{
    document.querySelectorAll(".error").forEach(el => el.remove());
    const error = document.createElement("p");
    error.className = "error";
    error.textContent = message;
    document.getElementById("coordInputs").prepend(error);
}

function sendData(x, y, r) {
    fetch(url, {
        "method": 'POST',
        "header": {
            'Content-Type': 'application/json'
        },
        "body": JSON.stringify(
            {
                x: parseInt(x.value),
                y: parseFloat(y.value),
                r: parseFloat(r.value)
            }
        )
    }).then(response => {
        response.json()
            .then(data => {
                addToTable(x.value, y.value, r.value, data.status, data.time, new Date().toLocaleTimeString());
                console.log("row added");
                drawDot(x.value, y.value, r.value, data.status);
                y.classList.remove("wrong");
                r.classList.remove("wrong");
            });
    });
}

function addToTable(x, y, r, status, time, data) {
    const tableBody = document.getElementById("table-body");
    const row = document.createElement("tr");
    row.className = "row";
    const xtd = document.createElement("td");
    xtd.className = "item";
    xtd.textContent = x;
    row.appendChild(xtd);
    const ytd = document.createElement("td");
    ytd.className = "item";
    ytd.textContent = y;
    row.appendChild(ytd);
    const rtd = document.createElement("td");
    rtd.className = "item";
    rtd.textContent = r;
    row.appendChild(rtd);
    const stattd = document.createElement("td");
    stattd.className = "item";
    stattd.textContent = status;
    row.appendChild(stattd);
    const timetd = document.createElement("td");
    timetd.className = "item";
    timetd.textContent = time;
    row.appendChild(timetd);
    const datatd = document.createElement("td");
    datatd.className = "item";
    datatd.textContent = data;
    row.appendChild(datatd);
    tableBody.prepend(row);
}

function drawDot(x, y, r, status) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const formula = (coord, radius) => (200 + (4 * coord * 40) / radius);
    ctx.beginPath();
    ctx.fillStyle = status ? '#A8E4A0' : '#EE204D';
    ctx.moveTo(200, 200);
    ctx.arc(formula(x, r), formula(-y, r), 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    console.log("dot has been drawn");
}