function strokeStyle1(argument) {

    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(20, 20, 150, 100);
}

function strokeStyle2(argument) {

    let myCanvas2 = document.getElementById("myCanvas2");
    let ctx2 = myCanvas2.getContext("2d");
    let my_gradient2 = ctx2.createLinearGradient(0, 0, 100, 170);
    my_gradient2.addColorStop(0, "black");
    my_gradient2.addColorStop(1, "white");
    ctx2.fillStyle = my_gradient2;
    ctx2.fillRect(20, 20, 150, 100);
}

function strokeStyle3(argument) {

    let c = document.getElementById("myCanvas3");
    let ctx = c.getContext("2d");
    ctx.strokeStyle = "#FF0000";
    ctx.strokeRect(20, 20, 150, 100);
}

function strokeStyle4(argument) {

    let c = document.getElementById("myCanvas4");
    let ctx = c.getContext("2d");

    let gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");

    // Fill with gradient
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 5;
    ctx.strokeRect(20, 20, 150, 100);
}

function strokeStyle5(argument) {

    let c = document.getElementById("myCanvas5");
    let ctx = c.getContext("2d");
    ctx.font = "30px Verdana";
    // Create gradient
    let gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    // Fill with gradient
    ctx.strokeStyle = gradient;
    ctx.strokeText("Big smile!", 10, 50);
}

function shadowColor(argument) {

    let c = document.getElementById("myCanvas6");
    let ctx = c.getContext("2d");
    ctx.shadowBlur = 20;
    ctx.shadowColor = "black";
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 100, 80);
}

function shadowBlur(argument) {
    let c = document.getElementById("myCanvas7");
    let ctx = c.getContext("2d");
    ctx.shadowBlur = 20;
    ctx.shadowColor = "black";
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 100, 80);
}

function shadowOffsetX(argument) {
    let c = document.getElementById("myCanvas8");
    let ctx = c.getContext("2d");
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 20;
    ctx.shadowColor = "black";
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 100, 80);
}

function shadowOffsetY(argument) {
    let c = document.getElementById("myCanvas9");
    let ctx = c.getContext("2d");
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 20;
    ctx.shadowColor = "black";
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 100, 80);
}

function createLinearGradient(argument) {

    let c = document.getElementById("myCanvas10");
    let ctx = c.getContext("2d");

    let grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
}
// 
function draw(direction) {

    let c = document.getElementById("myCanvas11");
    let ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    let img = document.getElementById("lamp");
    let pat = ctx.createPattern(img, direction);
    ctx.rect(0, 0, 150, 100);
    ctx.fillStyle = pat;
    ctx.fill();
}

function createRadialGradient(argument) {

    let c = document.getElementById("myCanvas12");
    let ctx = c.getContext("2d");

    let grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 100);
}

function addColorStop(argument) {

    let c = document.getElementById('myCanvas13');
    let ctx = c.getContext('2d');

    let grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
}

function lineJoin(argument) {

    let c = document.getElementById("myCanvas14");
    let ctx = c.getContext("2d");
    // ctx.beginPath();
    // ctx.lineJoin = "round";
    // ctx.moveTo(20, 20);
    // ctx.lineTo(100, 50);
    // ctx.lineTo(20, 100);
    // ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.lineJoin = "round";
    ctx.moveTo(20, 20);
    ctx.lineTo(100, 50);
    ctx.lineTo(20, 100);
    ctx.stroke();
}

function miterLimit(argument) {
    let c = document.getElementById("myCanvas15");
    let ctx = c.getContext("2d");
    ctx.lineWidth = 10;
    ctx.lineJoin = "miter";
    ctx.miterLimit = 5;
    ctx.moveTo(20, 20);
    ctx.lineTo(50, 27);
    ctx.lineTo(20, 34);
    ctx.stroke();
}

function rect(argument) {

    let c = document.getElementById("myCanvas16");
    let ctx = c.getContext("2d");

    // Red rectangle
    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.strokeStyle = "red";
    ctx.rect(5, 5, 290, 140);
    ctx.stroke();

    // Green rectangle
    ctx.beginPath();
    ctx.lineWidth = "4";
    ctx.strokeStyle = "green";
    ctx.rect(30, 30, 50, 50);
    ctx.stroke();

    // Blue rectangle
    ctx.beginPath();
    ctx.lineWidth = "10";
    ctx.strokeStyle = "blue";
    ctx.rect(50, 50, 150, 80);
    ctx.stroke();
}

function fillRect(argument) {
    let c = document.getElementById("myCanvas17");
    let ctx = c.getContext("2d");
    ctx.fillRect(20, 20, 150, 100);
}

function strokeRect(argument) {
    let c = document.getElementById("myCanvas18");
    let ctx = c.getContext("2d");
    ctx.strokeRect(20, 20, 150, 100);
}

function clearRect(argument) {
    let c = document.getElementById("myCanvas19");
    let ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 300, 150);
    ctx.clearRect(20, 20, 100, 50);
}

function fill(argument) {
    let c = document.getElementById("myCanvas20");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(40, 40, 150, 100);
    ctx.fillStyle = "blue";
    ctx.fill();
}

function stroke(argument) {

    let c = document.getElementById("myCanvas21");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.moveTo(50, 50);
    ctx.lineTo(20, 100);
    ctx.lineTo(150, 10);

    ctx.lineTo(250, 70);
    ctx.closePath();
    ctx.strokeStyle = "red";
    ctx.stroke();
}

function beginPath(argument) {

    let c = document.getElementById("myCanvas22");
    let ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = "green"; // Green path
    ctx.moveTo(0, 75);
    ctx.lineTo(250, 75);
    ctx.stroke(); // Draw it

    ctx.beginPath();
    ctx.strokeStyle = "purple"; // Purple path
    ctx.moveTo(50, 0);
    ctx.lineTo(150, 130);
    ctx.stroke(); // Draw it
}

function moveTo(argument) {
    let c = document.getElementById("myCanvas23");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 150);
    ctx.stroke();
}

function closePath(argument) {
    let c = document.getElementById("myCanvas24");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(20, 100);
    ctx.lineTo(70, 100);
    ctx.closePath();
    ctx.stroke();
}

function lineTo(argument) {

    let c = document.getElementById("myCanvas25");
    let ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(20, 50);
    ctx.lineTo(20, 100);
    ctx.lineTo(70, 100);
    ctx.stroke();
}

function clip1(argument) {
    let c = document.getElementById("myCanvas26");
    let ctx = c.getContext("2d");
    // Draw a rectangle
    ctx.rect(50, 20, 200, 120);
    ctx.stroke();
    // Draw red rectangle
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 150, 100);
}

function clip2(argument) {
    let c = document.getElementById("myCanvas27");
    let ctx = c.getContext("2d");
    // Clip a rectangular area
    ctx.rect(50, 20, 200, 120);
    ctx.stroke();
    ctx.clip();
    // Draw red rectangle after clip()
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 150, 100);
}

function quadraticCurveTo(argument) {
    let c = document.getElementById("myCanvas28");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.quadraticCurveTo(20, 100, 200, 20);
    ctx.stroke();
}

function bezierCurveTo(argument) {
    let c = document.getElementById("myCanvas29");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
    ctx.stroke();
}

function arc(argument) {
    let c = document.getElementById("myCanvas30");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

function arcTo(argument) {
    let c = document.getElementById("myCanvas31");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20); // Create a starting point
    ctx.lineTo(100, 20); // Create a horizontal line
    // https://en.wikipedia.org/wiki/Tangent
    // https://en.wikipedia.org/wiki/Trigonometric_functions#tan    
    ctx.arcTo(150, 20, 150, 70, 50); // Create an arc
    ctx.lineTo(150, 120); // Continue with vertical line
    ctx.stroke();
}

function isPointInPath(argument) {
    let c = document.getElementById("myCanvas32");
    let ctx = c.getContext("2d");
    ctx.rect(20, 20, 150, 100);
    if (ctx.isPointInPath(20, 50)) {
        ctx.stroke();
    };
}

function scale(argument) {
    let c = document.getElementById("myCanvas33");
    let ctx = c.getContext("2d");
    ctx.strokeRect(5, 5, 25, 15);
    ctx.scale(1.7, 1.7);
    ctx.strokeRect(5, 5, 25, 15);
    ctx.scale(1.7, 1.7);
    ctx.strokeRect(5, 5, 25, 15);
    ctx.scale(1.7, 1.7);
    ctx.strokeRect(5, 5, 25, 15);
}

function rotate(argument) {
    let c = document.getElementById("myCanvas34");
    let ctx = c.getContext("2d");
    ctx.rotate(25 * Math.PI / 180);
    ctx.fillRect(50, 20, 100, 50);
    // console.log(25 * Math.PI / 180);
}

function translate(argument) {
    let c = document.getElementById("myCanvas35");
    let ctx = c.getContext("2d");
    ctx.fillRect(10, 10, 100, 50);
    ctx.translate(70, 70);
    ctx.fillRect(10, 10, 100, 50);
}

function transform(argument) {
    let c = document.getElementById("myCanvas36");
    let ctx = c.getContext("2d");

    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, 250, 100)

    ctx.transform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 250, 100);

    ctx.transform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 250, 100);
}

function setTransform(argument) {
    let c = document.getElementById("myCanvas37");
    let ctx = c.getContext("2d");

    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, 250, 100)

    ctx.setTransform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 250, 100);

    ctx.setTransform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 250, 100);
}

function font(argument) {

    let fuente =
        new FontFace('test',
            'url("CAMPUS PERSONAL USE.ttf")');

    fuente.load().then(function() {

        let c = document.getElementById("myCanvas38");
        let ctx = c.getContext("2d");
        ctx.font = "30px test";
        ctx.fillText("Hello World", 10, 50);

    });
}

function textAlign(argument) {
    let c = document.getElementById("myCanvas39");
    let ctx = c.getContext("2d");

    // Create a red line in position 150
    ctx.strokeStyle = "red";
    ctx.moveTo(150, 20);
    ctx.lineTo(150, 170);
    ctx.stroke();

    ctx.font = "15px Arial";

    // Show the different textAlign values
    ctx.textAlign = "start";
    ctx.fillText("textAlign=start", 150, 60);
    ctx.textAlign = "end";
    ctx.fillText("textAlign=end", 150, 80);
    ctx.textAlign = "left";
    ctx.fillText("textAlign=left", 150, 100);
    ctx.textAlign = "center";
    ctx.fillText("textAlign=center", 150, 120);
    ctx.textAlign = "right";
    ctx.fillText("textAlign=right", 150, 140);
}

function textBaseline(argument) {
    let c = document.getElementById("myCanvas40");
    let ctx = c.getContext("2d");

    //Draw a red line at y=100
    ctx.strokeStyle = "red";
    ctx.moveTo(5, 100);
    ctx.lineTo(395, 100);
    ctx.stroke();

    ctx.font = "20px Arial"

    //Place each word at y=100 with different textBaseline values
    ctx.textBaseline = "top";
    ctx.fillText("Top", 5, 100);
    ctx.textBaseline = "bottom";
    ctx.fillText("Bottom", 50, 100);
    ctx.textBaseline = "middle";
    ctx.fillText("Middle", 120, 100);
    ctx.textBaseline = "alphabetic";
    ctx.fillText("Alphabetic", 190, 100);
    ctx.textBaseline = "hanging";
    ctx.fillText("Hanging", 290, 100);
}

function fillText(argument) {
    let c = document.getElementById("myCanvas41");
    let ctx = c.getContext("2d");

    ctx.font = "20px Georgia";
    ctx.fillText("Hello World!", 10, 50);

    ctx.font = "30px Verdana";
    // Create gradient
    var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    // Fill with gradient
    ctx.fillStyle = gradient;
    ctx.fillText("Big smile!", 10, 90);
}

function strokeText(argument) {
    let c = document.getElementById("myCanvas42");
    let ctx = c.getContext("2d");

    ctx.font = "20px Georgia";
    ctx.strokeText("Hello World!", 10, 50);

    ctx.font = "30px Verdana";

    // Create gradient
    var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");

    // Fill with gradient
    ctx.strokeStyle = gradient;
    ctx.strokeText("Big smile!", 10, 90);
}

function measureText(argument) {
    let c = document.getElementById("myCanvas43");
    let ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    let txt = "Hello World"
    ctx.fillText("width:" + ctx.measureText(txt).width, 10, 50);
    ctx.fillText(txt, 10, 100);
}

function drawImage2(argument) {
    let v = document.getElementById("video1");
    let c = document.getElementById("myCanvas44");
    let ctx = c.getContext("2d");
    let i;

    v.addEventListener(
        "play",
        function() {
            i = window.setInterval(function() {
                    ctx.drawImage(v, 5, 5, 300, 300)
                },
                20);
        },
        false);

    v.addEventListener(
        "pause",
        function() {
            window.clearInterval(i);
        }, false);

    v.addEventListener(
        "ended",
        function() {
            clearInterval(i);
        }, false);
}

function drawImage1(argument) {
    window.onload =
        function() {
            let c = document.getElementById("myCanvas45");
            let ctx = c.getContext("2d");
            let img = document.getElementById("scream");
            let sx = 90,
                sy = 130,
                swidth = 50,
                sheight = 60,
                //  posición de la imagen
                x = 0,
                y = 0,
                // Tamaño de la imagen en el lienzo 
                width = 200,
                height = 200;
            ctx.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
        }
}

function width(argument) {

    let c = document.getElementById("myCanvas46");

    let ctx = c.getContext("2d");

    let imgData = ctx.createImageData(100, 100);

    document
        .getElementById(
            'parr46'
        )
        .innerHTML =
        "Width of imgData is: " +
        imgData
        .width;
    // alert("");

    let i;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 0] = 255;
        imgData.data[i + 1] = 0;
        imgData.data[i + 2] = 0;
        imgData.data[i + 3] = 255;
        // console.log(i);
    }
    // console.log(imgData.data.length);
    // console.log(imgData.data);

    ctx.putImageData(imgData, 10, 10);

}

function height(argument) {
    let c = document.getElementById("myCanvas47");
    let ctx = c.getContext("2d");
    let imgData = ctx.createImageData(100, 100);
    // alert(" " + imgData.height);
    document
        .getElementById(
            'parr47'
        )
        .innerHTML =
        "Height of imgData is:" +
        imgData
        .width;
    let i;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 0] = 255;
        imgData.data[i + 1] = 0;
        imgData.data[i + 2] = 0;
        imgData.data[i + 3] = 255;
    }

    ctx.putImageData(imgData, 10, 10);
}

function data(argument) {

    let c = document.getElementById("myCanvas48");
    let ctx = c.getContext("2d");
    let imgData = ctx.createImageData(100, 100);

    let i;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 0] = 100;
        imgData.data[i + 1] = 0;
        imgData.data[i + 2] = 0;
        imgData.data[i + 3] = 255;
    }

    ctx.putImageData(imgData, 10, 10);
}

function createImageData(argument) {

    let c = document.getElementById("myCanvas49");

    let ctx = c.getContext("2d");

    let imgData = ctx.createImageData(100, 100);

    let i;
    for (i = 0; i < imgData.data.length; i += 4) {

        imgData.data[i + 0] = 255;
        imgData.data[i + 1] = 0;
        imgData.data[i + 2] = 0;
        imgData.data[i + 3] = 255;
    }

    ctx.putImageData(imgData, 10, 10);
}

function getImageData(argument) {

    document.getElementById("scream50").onload = function() {

        let c = document.getElementById("myCanvas50");
        let ctx = c.getContext("2d");
        let img = document.getElementById("scream50");
        ctx.drawImage(img, 0, 0);
        let imgData = ctx.getImageData(0, 0, c.width, c.height);
        // invert colors
        let i;
        for (i = 0; i < imgData.data.length; i += 4) {

            imgData.data[i] = 255 - imgData.data[i];
            imgData.data[i + 1] = 255 - imgData.data[i + 1];
            imgData.data[i + 2] = 255 - imgData.data[i + 2];
            imgData.data[i + 3] = 255;
            // console.log(imgData.data[i]);
        }
        // console.log(i / 4);
        ctx.putImageData(imgData, 0, 0);
    };
}

function putImageData(argument) {

    let c = document.getElementById("myCanvas51");
    let ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 50, 50);
    let btn = document.getElementById('btn51');

    btn.onclick = function() {

        let imgData = ctx.getImageData(10, 10, 50, 50);

        console.log(imgData);

        ctx.putImageData(imgData, 10, 70);

    };

}

function globalAlpha(argument) {
    let c = document.getElementById("myCanvas52");
    let ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 75, 50);

    //Turn transparency on
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 75, 50);
    ctx.fillStyle = "green";
    ctx.fillRect(80, 80, 75, 50);
}

function globalCompositeOperation(argument) {
    let c = document.getElementById("myCanvas53");
    let ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 75, 50);
    ctx.fillStyle = "blue";
    ctx.globalCompositeOperation = "source-over";
    ctx.fillRect(50, 50, 75, 50);
    ctx.fillStyle = "red";
    ctx.fillRect(150, 20, 75, 50);
    ctx.fillStyle = "blue";
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillRect(180, 50, 75, 50);
}

// ============================================
//  Llamada a funciones 

strokeStyle1();
strokeStyle2();
strokeStyle3();
strokeStyle4();
strokeStyle5();
shadowColor();
shadowBlur();
shadowOffsetX();
shadowOffsetY();
createLinearGradient();
createRadialGradient();
addColorStop();
lineJoin();
miterLimit();
rect();
fillRect();
strokeRect();
clearRect();
fill();
stroke();
beginPath();
moveTo();
closePath();
lineTo();
clip1();
clip2();
quadraticCurveTo();
bezierCurveTo();
arc();
arcTo();
isPointInPath();
scale();
rotate();
translate();
transform();
setTransform();
font();
textAlign();
textBaseline();
fillText();
strokeText();
measureText();
drawImage2();
drawImage1();
width();
height();
data();
createImageData();
getImageData();
putImageData();
globalAlpha();
globalCompositeOperation();
// ============================================