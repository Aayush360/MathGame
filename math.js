var answer;
var score =0 ;
var backgroundImages =[];

function nextQuestion(){

	const n1 = Math.floor(Math.random()*5);
	const n2 = Math.floor(Math.random()*6);
	document.getElementById('n1').innerHTML = n1;
	document.getElementById('n2').innerHTML = n2;
	answer = n1+n2;
}

function checkAnswer(){

	const prediction = predictImage();
	console.log(`answer : ${answer} , prediciton: ${prediction}`);

	if(prediction==answer){
		score++;
		console.log(`correct : score: ${score}`);
		if(score<=6){
			backgroundImages.push(`url('images/background${score}.svg')`);
		document.body.style.backgroundImage = backgroundImages;

		}
		else{
			
		alert("CONGRATULATIONS!");
		score=0;
		backgroundImages=[];
		document.body.style.backgroundImage = backgroundImages;

		

		}
		
	}
	else{
		if(score !=0 ){
			score--;

		}
		alert("oops!, you answered Incorrectly!");
		setTimeout(function(){
		backgroundImages.pop();
		document.body.style.backgroundImage = backgroundImages;

		},1000);


		console.log(`wrong : score: ${score}`);
	}

}