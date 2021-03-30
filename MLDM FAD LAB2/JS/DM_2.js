let place = [];
function matrxInp() {
	place = document.getElementById('matrx').value
	if(place == '') return 1;
	place = place.split('\n')
	for(let i = 0; i < place.length; i++) {
		place[i] = place[i].split(' ')
	}
	for(let i = 0; i < place.length; i++) {
		if(i != 0 && (place[i - 1].length > place[i].length || place[i - 1].length < place[i].length)) {
			alert('Пожалуйста,введите одинаковое количество цифр');
			return 1;
		}
		for(let j = 0; j < place[i].length; j++) {
			if(place[i][j] > 1) {
				alert('Используйте только 1 и 0');
				return 1;
			}
		}
	}
}
function simm() {
	for (let i = 0; i < place.length; i++) {
		for (let j = 0; j < place[i].length; j++) {
			if (place[i][j] != place[j][i]) {
				document.getElementById('simm').innerHTML = 'Матрица не симметрична' + '\n'
				return false;
			}
		}
	}
	document.getElementById('simm').innerHTML = 'Матрица симметрична'+ '\n'
	return true;
}
function antySimm(){
	for (let i = 0; i < place.length; i++) {
		for (let j = 0; j < place[i].length; j++) {
			if (+place[i][j] * +place[j][i] != 0) {
				document.getElementById('antySimm').innerHTML = 'Матрица не антисимметрична' + '\n';
				return false;
			}
		}
	}
	document.getElementById('antySimm').innerHTML = 'Матрица антисимметрична' + '\n';
	return true;
}
function reflex() {
	for (let i = 0; i < place.length; i++) {
		if (place[i][i] != 1) {
			document.getElementById('reflex').innerHTML = 'Матрица  не рефлексивна' + '\n';
			return false;
		}
	}
	document.getElementById('reflex').innerHTML = 'Матрица рефлексивна' + '\n';
	return true;
}

function mainF() {
	matrxInp();
	simm();
	antySimm();
	reflex();
}