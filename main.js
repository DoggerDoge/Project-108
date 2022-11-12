function start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gy3q2O6WH/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;

        document.getElementById("icanhear").innerHTML='I can hear - '+results[0].label;
        document.getElementById("accuracy").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("icanhear").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("accuracy").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        img1 = document.getElementById('Dog');
        img2 = document.getElementById('Cat');
        img3 = document.getElementById('Wolf');
        img4 = document.getElementById('Lion');

        if(results[0].label=="Dog")
        {
            img1.src='Dog Cool GIF.gif';
            img2.src='Cat Cool.jpg';
            img3.src='Wolf Cool.jpg';
            img4.src='Lion Cool.jpg';
        }
        else if(results[0].label=="Cat")
        {
            img1.src='Dog Cool.jpg';
            img2.src='Cat Cool GIF.gif';
            img3.src='Wolf Cool.jpg';
            img4.src='Lion Cool.jpg';
        }
        else if(results[0].label=="Wolf")
        {
            img1.src='Dog Cool.jpg';
            img2.src='Cat Cool.jpg';
            img3.src='Wolf Cool GIF.gif';
            img4.src='Lion Cool.jpg';
        }
        else
        {
            img1.src='Dog Cool.jpg';
            img2.src='Cat Cool.jpg';
            img3.src='Wolf Cool.jpg';
            img4.src='Lion Cool GIF.gif';
        }
    }
}