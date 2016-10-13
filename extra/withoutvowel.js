(function withoutVowel (){

	
	var inputText = document.getElementById("withVowel").innerHTML;

	var resultForVowel = inputText.replace("type" , "not");

	document.getElementById("withoutVowel").innerHTML = resultForVowel;

})();

(function reverseStr (){
	
	var inputString = '';
	inputString = document.getElementById("originalString");

	var result = inputString.split("").reverse().join();
	

	document.getElementById("reverseString").innerHTML = result;


}();	