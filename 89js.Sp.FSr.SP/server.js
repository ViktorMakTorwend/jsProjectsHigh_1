export default {
	'/handler/': function(data) {
		console.log(data.get); // выведется в консоль сервера
		return 'form data received';
	}
}