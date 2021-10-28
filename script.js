
/* declaracion de variables */
var step = 20;
var dir = "down"; /* Direccion de movimiento de la serpiente al iniciar el juego */
var posXfood;
var posYfood;
let posX = [];
let posY = [];
let colors = [];
var size = 1;  /* tamaño de la serpiente al iniciar el juego */
var eated = 1; 
var gameOn = 1;

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }

function setup() {    
    createCanvas(400, 400); /* Sirve para modificar el ancho y alto del tablero del juego */
    frameRate(10);   /* Sirve para Aumentar la velocidad de la serpiente */
    append(posX, 0);
    append(posY, 0);
    append(colors, [19, 255, 58]); /* Dispone varios colores para el cuerpo de la serpiente */
    append(colors, [255, 140, 0]);
    append(colors, [255, 237, 0]);
    append(colors, [0, 128, 38]);
    append(colors, [0, 77, 255]);
    append(colors, [117, 7, 135]);
}

function draw() {
    
    if (gameOn) {
        
        if (eated) {
            posXfood = ceil(random(19))
            posYfood = ceil(random(19));
        }
        background("#F4BF50"); /* Cambiar color de fondo del area del juego */
        for (i = 0; i < size; i++) {
            let c = i % 6;
            fill(colors[c][0], colors[c][1], colors[c][2]);
            rect(posX[i] * 20, posY[i] * 20, step, step);
        }
        fill("crimson");
        rect(posXfood * 20, posYfood * 20, step, step);
    }
    /* define el movimiento de la serpiente cuando presiona la tecla de direccion */
    if (keyIsDown(DOWN_ARROW) && dir != "up") {
        dir = "down";
    }
    if (keyIsDown(UP_ARROW) && dir != "down") {
        dir = "up";
    }
    if (keyIsDown(LEFT_ARROW) && dir != "right") {
        dir = "left";
    }
    if (keyIsDown(RIGHT_ARROW) && dir != "left") {
        dir = "right";
    }
    /* Me permite que cuando la Serpiente coma esta cambie de posición atras de cada cuadro */
    for (let i = size - 1; i > 0; i--) {
        posX[i] = posX[i - 1];
        posY[i] = posY[i - 1];
    }
    /* para que se vaya moviendo en la dirrección seleccionada */
    if (dir == "right") {
        
        if (posX[0] < 19) {
            posX[0]++;
        } else {
            posX[0] = 0;
        }
    }
    if (dir == "left") {
        if (posX[0] > 0) {
            posX[0]--;
        } else {
            posX[0] = 19;
        }
    }
    if (dir == "down") {
        if (posY[0] < 19) {
            posY[0]++;
        } else {
            posY[0] = 0;
        }
    } if (dir == "up") {
        
        if (posY[0] > 0) {
            posY[0]--;
        } else {
            posY[0] = 19;
        }
    }

      
    for (i = 1; i < size; i++) {
        if (posX[0] == posX[i] && posY[0] == posY[i]) {
            gameOn = 0;
            fill(255);
            textSize(32);
            textAlign(CENTER, CENTER)
            text("Fin", width / 2, height / 2)
            noLoop();
        }
    }

    /* Permite posicionar la comida y esta permanesca es su lugar hasta que la serpiente se la coma */
    if (posX[0] == posXfood && posY[0] == posYfood) {
        append(posX, posXfood);      
        append(posY, posYfood);
        size++;
        eated = 1;
    } else {
        eated = 0;
    }

}