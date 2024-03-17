// Lấy tham chiếu đến canvas và context 2D
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Vẽ một hình tròn đơn giản
function drawCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

// Vẽ trò chơi
function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Xóa canvas trước khi vẽ lại

    // Vẽ các thành phần của trò chơi ở đây
    drawCircle(100, 100, 50);
}

// Hàm cập nhật trò chơi (gọi lại sau mỗi frame)
function updateGame() {
    // Cập nhật trạng thái của trò chơi ở đây
}

// Hàm vòng lặp trò chơi
function gameLoop() {
    updateGame(); // Cập nhật trò chơi
    drawGame();   // Vẽ trò chơi

    requestAnimationFrame(gameLoop); // Gọi lại hàm gameLoop cho frame tiếp theo
}

// Bắt đầu trò chơi khi tệp JavaScript được tải
gameLoop();

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        draw(e.offsetX, e.offsetY);
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
});

function draw(x, y) {
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function saveDrawing() {
    const dataURL = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = 'my_drawing.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
