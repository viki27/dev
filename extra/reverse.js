function reverseStr (){
	
	var inputString ;
	inputString = document.getElementById("para2").innerHTML;
	var result = inputString.split("").reverse().join('');
	document.getElementById("reverseString").innerHTML = result;


}