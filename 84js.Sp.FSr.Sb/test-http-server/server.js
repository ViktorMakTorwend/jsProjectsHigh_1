export default {
	'/handler/': function(data) {
		console.log(data); // выведется в консоль сервера
		return 'form data received';
	}
}