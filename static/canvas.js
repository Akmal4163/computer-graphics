var canvas;

function drawdots(ImageData, x, y, r,g,b) {
    var index;
    index = 4 * (Math.ceil(x) + (Math.ceil(y) * canvas.width));
    
    ImageData.data[index] = r;
    ImageData.data[index+1] = g;
    ImageData.data[index+2] = b;
    ImageData.data[index+3] = r;
}

function drawline(ImageData, x1, y1,x2,y2, r,g,b) {
    var dx = x2-x1;
    var dy = y2-y1;
    if( Math.abs(dx) > Math.abs(dy) ){
        if(x2 > x1) {
            var y = y1;
            for(var x = x1; x < x2; x++){
                y = y + dy/Math.abs(dx);
                drawdots(ImageData, x, y, r, g, b);
            }
        } else {
            var y = y1;
            for(var x = x1; x > x2; x--){
                y = y + dy/Math.abs(dx);
                drawdots(ImageData, x, y, r, g, b);
            }
        }
    }
    else {
        if(y2 > y1) {
            var x = x1;
            for(var y = y1; y < y2; y++){
                x = x + dx/Math.abs(dy);
                drawdots(ImageData, x, y, r, g, b);
            }
        } else {
            var x = x1;
            for(var y = y1; y > y2; y--){
                x = x + dx/Math.abs(dy);
                drawdots(ImageData, x, y, r, g, b);
            }
        }
    }
}
canvas = document.querySelector('#canvas1');

var ctx = canvas.getContext("2d");

var ImageData = ctx.getImageData(0,0,canvas.width, canvas.height);

//draw here
canvas.addEventListener('click', (ev) => {
    var rect = canvas.getBoundingClientRect();
    var x = ev.clientX - rect.left;
    var y = ev.clientY - rect.top;
    console.log(`${x} ${y}`);
    drawdots(ImageData, x, y, 145, 0, 0);
    ctx.putImageData(ImageData, 0,0);
})

canvas.addEventListener('mousemove', (ev) => {
    var rect = canvas.getBoundingClientRect();
    var x = ev.clientX - rect.left;
    var y = ev.clientY - rect.top;
    console.log(`${x} ${y}`);
    drawdots(ImageData, x, y, 145, 0, 0);
    ctx.putImageData(ImageData, 0,0);
})
