var socket;

function setup() {
    createCanvas(600, 400);
    background(51);
    socket = io.connect('https://solar-exciting-sprint.glitch.me/');
    socket.on('mouse', newDrawing);
}

function newDrawing(data) {
    line(data.x, data.y, data.pX, data.pY)
}

function mouseDragged() {
    console.log('sending: ' + mouseX + ',' + mouseY);
    var data = {
        x: mouseX,
        y: mouseY,
        pX: pmouseX,
        pY: pmouseY
    }
    socket.emit('mouse', data)
    line(mouseX, mouseY, pmouseX, pmouseY)
}