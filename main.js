nose_X ="";
nose_Y ="";
function preload()
{
ClownNose = loadImage("m.png");
}

function setup()
{
canvas = createCanvas(300,350);
canvas.center()
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);

}

function modelLoaded()
{
    console.log("poseNet loaded");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        console.log("Nose X =" +results[0].pose.nose.x);
        console.log("Nose Y =" +results[0].pose.nose.y);

        nose_X = results[0].pose.nose.x - 12;
        nose_Y = results[0].pose.nose.y - 12;
    }
}

function draw()
{
    image(video, 0 , 0 , 300, 300);
    image(ClownNose , nose_X, nose_Y, 30 , 30);
}

function take_snapshot()
{
    save("myFilter.png");
}


