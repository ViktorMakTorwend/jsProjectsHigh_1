//⋕js.Sp.AX.PGP.2

let div    = document.querySelector('div');
let button = document.querySelector('button');

button.addEventListener('click', function() {
	fetch('/handler/?num=2').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text; // запишем ответ сервера
		}
	);
});