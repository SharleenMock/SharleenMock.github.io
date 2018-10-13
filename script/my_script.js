function revealMessage() {
	document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
	var currentVal = document.getElementById("countDownButton").innerHTML;
	var newVal = 0;
	if (currentVal > 0) {
		newVal = currentVal - 1;
	}

	document.getElementById("countDownButton").innerHTML = newVal;

  if(currentVal == 1){
    document.getElementById("trial").style.display="block";
  }


}

function show_name(){
  last_name = document.getElementById("last").value;
  first_name = document.getElementById("first").value;
  full = last_name + first_name;
  document.getElementById("full_name").innerHTML = full;
}
