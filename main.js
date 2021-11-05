nose_X ="";
nose_Y ="";
function preload()
{
ClownNose = loadImage("https://i.postimg.cc/data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAclBMVEX///8AAAD7+/sFBQUoKCiJiYmnp6cLCwv19fUjIyMQEBAwMDDHx8cbGxvc3Nxzc3MXFxdOTk7W1tZAQEBkZGShoaGPj484ODjn5+dTU1NDQ0N6enqWlpZra2vt7e1eXl7Nzc29vb2lpaW0tLRBQUF/f3/afpZYAAAET0lEQVR4nO3ae3u6LAAGYFM846lSs7J0vfv+X/G12RQlAUu3/a7ruf/akjMIgmoaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA/6FKb153rGRvDc3d7s3aEoUPrdCSuGwQxKU4pFQd+hUPTzMysSp8XrY78zYiRf26fBz6YO28ceGeG83LUK6spaEqfF/SWGI+U7aJWTnMbBeNaPPjZhStAn8cIOanXpS7s7yZIbtxVOmzVo1K6+kc+UYu2QcpBKmEUi0Inaq0X7gaxcjq8bI5byqukSTpnV1SwrybbH7rQ0URn9PxUPqgpNzAz9nLEXnKLa0I2nqRP9PPUmBrmE7X3cirsjS5rS1KP0NuQ4loMWvDUXzaZn4u2AmGUCFO8EZWCfRWuGcdUOARZuXiAJVFbvG3BxOn6pO5/M9IuDj3w6XzbHlULdldc54ROBEMhrLo/z0yhH/eJzjTuWdgeD85JOtzfYZtK83/WxyD6+JdCJYVaeo+/y6fyUjTDrI/wNbic/jY0BKPpm7Nfuxp3pcJyH/bjIr53SdpHv8pj10pz1ftchU5hbviP5l9mgeHXyXF3lD9TjbtI2ilWH/jYPO/1/xmyqHT1u4NFKklx2KJf2Gq54nj6upMVz/iUTF/MIntjF/VcGGvLPeOuLxc/XjAlijRmafNFkTKbz2d9tnBhYxbAo8YMe286Svjfz1fiUUJBpzBtS9h/NpNxzr/SHa3pTtkyoTyNjfM5EWG3+VXHid3miQljaOxMFHN7Om31JysVxtM15cBuTWxtsFIn/HyX/tBSLhZ8cAXTk0EAbThsimHVdUt527E2Mto+OoN6NLPW6BnQtfrwofkneuNbwBy26NaoaCW7QWnFZUrDsLIi5V3dzyGRVVchTUtu45wO5rB/WNNZf2r4vOr+mBjJg/1995MU+tuFWEJ1nwFWf6r1V8+hfW5P5QHfsrtc1p4A23M9fd1937VZmJxZJ1uzPY6D2E3i4gyzzYM7XF5Sd9awXs8H3WEIXW+a33UL/nat5iqYx+lLIQ//EpvZRmXy4C/wRmfr1viVwDIGG681WmvP7W4ua9zzw1NFZ/Gp/vn5bb14Pvloz3VYdg4O0mfV0JTfDykj3HH1YcEtlGcKziydzwVvFb4eTU2W6vVYVI2vqphK7+EU5E9fHyyz/LqZwhsBJ1tkJF+njlTfP7568uJ7wi2RpyYmOoUM3zrBcme89b9ndnqrWySfAqSvJh6XSu/Lhii/+Vbk8udDIy/NjySqZ37A0mVXRy9Ml8FZJTvdmvXy2UvOM7+JGQvPyawZ+XhTbrXQzJWeI/19OnEuO9c23StN//M/Jbp8lILKGCRZ/ksrh6ZR4goyzUvr2em0nF5ZZpn4JPDsjeHFLvHzZH/KLBq+eEcoZRpSKzvtk9wnbuwZG9sLiJ+U5uzvyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVvU/2jA/dGO7/dkAAAAASUVORK5CYII=/Clown-Nose.png");
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
    save("clownNose.png");
}


