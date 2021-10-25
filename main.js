function setup() {
    canvas = createCanvas(640,480);
    canvas.position(150,150)
    canvas.center();
    video = createCapture(VIDEO);

    video.hide();
}  
function draw(){


}  

function take_snapshot(){    
  save('myFilterImage.png');
}