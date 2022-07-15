export default {
	'/handler/': function({get}) {
		let todayDate = new Date();
		let userDate = get.dateOfUser.split(':').map(function (elem){
			return Number(elem);
		});

		let year = todayDate.getFullYear();
		let month = todayDate.getMonth() + 1;
		let date = todayDate.getDate();

		if(year == userDate[0] && month == userDate[1] && date == userDate[2]) {
			return 'correct date'
		}
		else return 'not corect date'
	}
}