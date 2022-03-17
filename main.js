song = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
function preload() {
    song = loadSound("music.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 600, 500);
    console.log("in draw function")
}
function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);

}
function modelLoaded(){
    console.log('PoseNet is Inizialized');
}
function gotPoses(){
    if(results.lenth > 0){
     console.log(results);
     leftWristX = results[0].pose.leftWrist.x;
     leftWristY = results[0].pose.leftWrist.y;
     console.log("leftwristX = " + leftWristX +"leftWristY = " + leftWristY);

     rightWristX = results[0].pose.rightWrist.x;
     rightWristY = results[0].pose.rightWrist.y;
     console.log("rightwristX = " + rightWristX +"rightWristY = " + rightWristY);
    }
}