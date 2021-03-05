var firstMass = [], secondMass = [], unMass = [],intMass = [];

function print(element) {
	var div = document.createElement('div');
	div.innerHTML = element;
	document.body.appendChild(div);
}
function Repeat(arr1 = [], arr2 = []){
	for(var i = 0;i < arr2.length;i++){
		var cnt = 0;
		for(var j = 0;j < arr1.length;j++){
			if(arr1[j] == arr2[i]) {
				cnt++;
				break;
			}
		}
		if(!cnt) arr1.push(arr2[i]);
	}
}
function myUnion() {
	Repeat(unMass, firstMass);
	Repeat(unMass, secondMass);
	print(`<br/>Результат объединения множеств: ${unMass}`);
}
function myIntersection() {
	for(var i = 0; i < firstMass.length; i++){
		var cnt = 0;
		for(var j = 0; j < secondMass.length; j++){
			if(firstMass[i] == secondMass[j]){
				cnt++;
				break;
			}
		}
		if(cnt > 0){
			intMass.push(firstMass[i]);
		}
	}
	print(`<br/>Результат пересечения множеств: ${intMass}`)
}
function functions() {
	FirstArray = document.getElementById('FirstArray').value;
	SecondArray = document.getElementById('SecondArray').value;
	FirstArray = FirstArray.split(' ');
	SecondArray = SecondArray.split(' ');
	Repeat(firstMass, FirstArray);
	Repeat(secondMass, SecondArray);
	print(`Первое множество: ${firstMass} <br/><br/>Второе множество: ${secondMass}`)
	myUnion();
	myIntersection();
	firstMass =[];
	secondMass =[];
}