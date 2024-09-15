const url = "/api/";

function submitForm(event) {
    event.preventDefault();
    const x = document.querySelector('input[type="radio"]:checked');
    const y = document.getElementById("y");
    const r = document.getElementById("r");
    if (!x) {
    } else {
        if (((-3)<=y.value && y.value<=5) && (1<=r.value&& r.value<=4)) {
            sendData(x,y,r);
        }else{
            y.classList.add("wrong");
            r.classList.add("wrong");
        }
    }
}



function sendData(x, y, r) {
    fetch(url, {
        "method": 'POST',
        "header":{
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
                addToTable(x.value,y.value,r.value,data.status,data.time,new Date().toLocaleTimeString());
                drawDot(data.x, data.y, data.r, data.status);
                console.log("row added");
                console.log("dot has been drawn");
                y.classList.remove("wrong");
                r.classList.remove("wrong");
            });
    });
}
function addToTable(x, y, r, status, time, data){
    const tableBody = document.getElementById("table-body");
    const row = document.createElement("tr");
    row.className = "row";
    const xtd = document.createElement("td");
    xtd.className ="item";
    xtd.textContent =x;
    row.appendChild(xtd);
    const ytd = document.createElement("td");
    ytd.className ="item";
    ytd.textContent =y;
    row.appendChild(ytd);
    const rtd = document.createElement("td");
    rtd.className ="item";
    rtd.textContent =r;
    row.appendChild(rtd);
    const stattd = document.createElement("td");
    stattd.className ="item";
    stattd.textContent =status;
    row.appendChild(stattd);
    const timetd = document.createElement("td");
    timetd.className ="item";
    timetd.textContent =time;
    row.appendChild(timetd);
    const datatd = document.createElement("td");
    datatd.className ="item";
    datatd.textContent =data;
    row.appendChild(datatd);
    tableBody.prepend(row);
}

function drawDot(x, y, r, status) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    console.log("dot has been drawn");
    const formula = (coord, radius) => (200 + coord/radius * 40) ;
    ctx.fillStyle = status ? 'green' : 'red';
    ctx.beginPath();
    ctx.arc(formula(x,r), formula(y,r), 5, 0, 2 * Math.PI);
    ctx.resetTransform();
    ctx.fill();
    ctx.closePath();
}