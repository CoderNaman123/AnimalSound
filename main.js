function SoundIdentification()
{
    navigator.mediaDevices.getUserMedia({audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/wjD1yeiba/model.json",modelReady);
}

function modelReady()
{
    classifier.classify(gotResult);
}

function gotResults(error,results)
{
if(error){
    console.error(error);
}
else
{ 
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random()* 255) + 1;
  
   document.getElementById("Result_Sound").innerHTML = results[0].label;
   document.getElementById("Result_Sound").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+" )";
   document.getElementById("Result_Accuracy").innerHTML = results[0].confidence.toFixed(2)+"%";
   document.getElementById("Result_Accuracy").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+" )";

img1 = document.getElementById("animal1")
img2 = document.getElementById("animal2")
img3 = document.getElementById("animal3")
img4 = document.getElementById("animal4")
img5 = document.getElementById("animal5")

if (results[0].label == "Barking")
{
    img1.src = "animal1.jpg";
    img2.src = "animal2.gif";
    img3.src = "animal3.jpg";
    img4.src = "animal4.png";
    img5.src = "animal5.jpg";
}
else if (results[0].label == "Cluck Cakle")
{
    img1.src = "animal1.jpg";
    img2.src = "animal2.jpg";
    img3.src = "animal3.jpg";
    img4.src = "animal4.gif";
    img5.src = "animal5.jpg";
}
else if (results[0].label == "Meow")
{
    img1.src = "animal1.jpg";
    img2.src = "animal2.jpg";
    img3.src = "animal3.gif";
    img4.src = "animal4.png";
    img5.src = "animal5.jpg";
}
else if (results[0].label == "Roar")
{
    img1.src = "animal1.gif";
    img2.src = "animal2.jpg";
    img3.src = "animal3.jpg";
    img4.src = "animal4.png";
    img5.src = "animal5.jpg";
}
else (results[0].label == "Background Noise")
{
    img1.src = "animal1.jpg";
    img2.src = "animal2.jpg";
    img3.src = "animal3.jpg";
    img4.src = "animal4.png";
    img5.src = "animal5.gif";
}
}}