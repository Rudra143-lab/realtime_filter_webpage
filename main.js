function preload(){
    joker_nose=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    // eye=loadImage("https://i.postimg.cc/NFcy2ph6/gogles.png");
}
nose_x=0;
nose_y=0;
// l_eye_x=0;
// r_eye_y=0;

function setup(){
   canvas= createCanvas(400,300);
   canvas.center();
   video=createCapture(VIDEO);
   video.hide();

   pose=ml5.poseNet(video,model_loaded);
   pose.on('pose',got_pose);
}

function model_loaded(){
    console.log("Model Loaded");
}

function got_pose(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x-170;
        nose_y=results[0].pose.nose.y-115;
        // l_eye_x=results[0].pose.leftEye.x;
        // l_eye_y=results[0].pose.leftEye.y;
        // r_eye_x=results[0].pose.rightEye.x;
        // r_eye_y=results[0].pose.rightEye.y;
        console.log("nose_x ="+results[0].pose.nose.x);
        console.log("nose_x ="+results[0].pose.nose.x);
    }
}

function take_snapshot(){
    save("my_image,png");
}

function draw(){
    image(video,0,0,400,300);
    image(joker_nose,nose_x,nose_y,60,50);
    // image(eye,l_eye_x,r_eye_y,60,30);//
}