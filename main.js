noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,550);

    canvas=createCanvas(600,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is Initialized!");
}
function gotPoses(results){
    if(results.length>0){
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
function draw(){
    background("white");
    fill("red");
    stroke("black");
    square(noseX,noseY,difference);
    document.getElementById("pixels").innerHTML="The width & height of the square is "+difference+ " px";
}