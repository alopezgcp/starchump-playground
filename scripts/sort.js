// this is a basic visualization of insertion sort
// start with 50 unsorted values
// re-draw after every swap

var values;
var currentI;
var currentJ;

function setup() {
    createCanvas(windowWidth,windowHeight);
    reset();

    // shuffle array of values 1-50
    values = new Array(50);
    for(var i=0; i<values.length; ++i){
        values[i] = i+1;
    }
    shuffle(values, true);
    drawNextIteration();

    currentI = 1;
    currentJ = currentI;
    drawSequence();
}

function drawSequence(){
    if(currentI < 50){
        iterate();
        setTimeout(reset, 250);
        setTimeout(drawNextIteration, 250);
        setTimeout(drawSequence, 250);
    }
}

function iterate(){
    if(values[currentJ] < values[currentJ-1]){
        var temp = values[currentJ];
        values[currentJ] = values[currentJ-1];
        values[currentJ-1] = temp;
    }
    
    --currentJ;
    if(currentJ <= 0 || (values[currentJ] >= values [currentJ-1])){
        ++currentI;
        currentJ = currentI;
    }


}

function reset(){
    clear();
    strokeWeight(1);
    stroke(147);
    noFill();
    rect(15,15,755,310);
}

function drawNextIteration(){
    fill(147);
    var floor = 320;
    var newHeight, newY, newX;

    for(var i = 0; i<50; ++i){
        newHeight = 6 * values[i];
        newY = floor - newHeight;
        newX = 20 + (15 * i);
        rect(newX,newY,10,newHeight);
    }
}