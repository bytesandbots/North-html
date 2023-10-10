console.log("hello");
public function phoneRecord(){
	var phoneinput = document.getElementById("lphone").value;
	let toReturn: string ;
	for (let i:number = 0; i < phoneinput.length; i++){
	
	let letter = phoneinput[i];
	if(isNaN(letter)){
		toReturn = phoneinput.slice(0,-1);
		document.getElementById("lphone").value = toReturn;
		}
	}
}

public function emailValidCheck(){
	var emailinput = document.getElementById("email").value;
	let toReturn: string ;
	let foundat = false;
	let founddot = false;
	for (let i:number = 0; i < emailinput.length; i++){
	
	let letter = emailinput[i];
	if(letter == "@"){
		foundat = true
		console.log("found at")
	}
	if(letter == "." && foundat == true){
		console.log("found dot")
		founddot = true
	}
}
	if(foundat == true && founddot == true){
	document.getElementById("email").style.color="black";
		
	}else{
	document.getElementById("email").style.color="red";
	}
}

public function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
public function showPosition(position) {

	console.log(position.coords.longitude);
	console.log(position.coords.latitude);
	var url = "https://api.openweathermap.org/data/2.5/forecast?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=8fe79b85155beefc0a3882d4b1377ddd";
	var request = $.ajax({type:"get",url:url,contentType:"json"});
	request.done(function(response){
	console.log(response);
	});
 } 


  getLocation()