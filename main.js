song = "";
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;

function preload(){
    song = loadSound("H.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}



function modelLoaded(){
    console.log('Pose Net is Initializes!');

   
}

function draw(){
    image(video, 0, 0,600, 500);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}


function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftwrist.x;
        leftwristY = results[0].pose.leftwrist.y;
        console.log('leftwristX' + leftwristX + 'leftwristY' + leftwristY);

        rightwristx = results[0].pose.rightwrist.x;
        rightwristy = results[0].pose.rightwrist.y;
        console.log('rightwristX' + rightwristX + 'rightwristY' + rightwristY);

    }
}