const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

function drawAxis() {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
}

function drawGrid() {
    ctx.beginPath();
    for (let x = 0; x < 400; x += 40) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.strokeStyle = 'lightgray';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    for (let y = 0; y < 400; y += 40) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = 'lightgray';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
}

function drawCircle(x, y, r) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.fillStyle = '#48CFCB';
    ctx.arc(x, y, r, Math.PI * 0.5, Math.PI, false);
    ctx.closePath();
    ctx.fill();
}

function drawRect(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.fillStyle = '#48CFCB';
    ctx.rect(x, y, 40 - x, 40 - y);
    ctx.closePath();
    ctx.fill();

}

function drawTriangle(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.fillStyle = '#48CFCB';
    ctx.lineTo(x + 80, y);
    ctx.lineTo(x, y - 160);
    ctx.closePath();
    ctx.fill();
}

function drawCoords() {
    ctx.fillStyle = 'black';
    ctx.font = '1.25em Montserrat, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText('R/2', 280, 230);
    ctx.beginPath();
    ctx.moveTo(280, 195);
    ctx.lineTo(280, 205);
    ctx.strokeStyle = 'black';
    ctx.closePath();
    ctx.stroke();
    ctx.fillText('R', 360, 230);
    ctx.beginPath();
    ctx.moveTo(360, 195);
    ctx.lineTo(360, 205);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
    ctx.fillText('-R/2', 230, 290);
    ctx.beginPath();
    ctx.moveTo(195, 280);
    ctx.lineTo(205, 280);
    ctx.strokeStyle = 'black';
    ctx.closePath();
    ctx.stroke();
    ctx.fillText('-R', 220, 370);
    ctx.beginPath();
    ctx.moveTo(195, 360);
    ctx.lineTo(205, 360);
    ctx.strokeStyle = 'black';
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillText('-R/2', 120, 230);
    ctx.moveTo(120, 195);
    ctx.lineTo(120, 205);
    ctx.strokeStyle = 'black';
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillText('-R', 40, 230);
    ctx.moveTo(40, 195);
    ctx.lineTo(40, 205);
    ctx.strokeStyle = 'black';
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillText('R/2', 230, 130);
    ctx.moveTo(195, 120);
    ctx.lineTo(205, 120);
    ctx.strokeStyle = 'black';
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillText('R', 230, 50);
    ctx.moveTo(195, 40);
    ctx.lineTo(205, 40);
    ctx.strokeStyle = 'black';
    ctx.closePath();
    ctx.stroke();

}

drawGrid();
drawCircle(200, 200, 80);
drawRect(200, 200);
drawTriangle(200, 200);
drawAxis();
drawCoords();



