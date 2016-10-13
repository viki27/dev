function withoutVowel() {

	var inputText ;
	inputText = document.getElementById("para1").innerHTML;

	inputText.toLowerCase();

	var resultForVowel = inputText.replace(/[aeiout]/ig,'');

	document.getElementById("withoutVowel").innerHTML = resultForVowel;

}