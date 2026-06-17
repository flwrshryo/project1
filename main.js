Webcam.attach("camera");

var pic = document.getElementById("pic1");
var chead = document.getElementById("chead");
var cbtn = document.getElementById("cbtn");
chead.style.display = "none";
cbtn.style.display = "none";

function capture(){
	Webcam.snap(function(data_uri){
		pic.innerHTML = '<img src="'+data_uri+'" id="selfie">';
	})
	chead.style.display = "block";
	cbtn.style.display = "block";
		
}

var model = 'https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json';
var classifier;


function setup(){
	classifier = ml5.imageClassifier(model, predict);
}

function predict(){
	console.log("Model is loaded!");
	var img = document.getElementById("selfie");
	classifier.classify(img, gotResult);
}

function gotResult(error, results){
	if(error){
		console.log(error);
		return;
	}

	console.log(results);
	var label = results[0].label;
	var conf = results[0].confidence.toFixed(1)*100;

	console.log(label,conf);
	var res = document.getElementById("label");
	var acc = document.getElementById("acc");

	res.innerHTML = label;
	acc.innerHTML = conf+"%";


}