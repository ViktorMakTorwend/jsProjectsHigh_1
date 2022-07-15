//⋕js.Sp.AX.DPS.1

let form = document.querySelector('form');
let p = document.querySelector('p');

form.addEventListener('submit', function(event) {
	let promise = fetch('/handler/', {
		method: 'POST',
		body: new FormData(this),
	}).then(
		response => {
			return response.text(); // ответ сервера
		}
	).then(
		text => {
			p.textContent = text;
		}
	);
	
	event.preventDefault();
});