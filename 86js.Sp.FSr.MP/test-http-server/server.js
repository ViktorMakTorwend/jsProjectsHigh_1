export default {
	'/handler/': function({post}) {

		let userName = 'Vik';
		let userSurname = 'Mak';
		let userPat = 'Evg';
			if(userName == post.name && userSurname == post.surname && userPat == post.pat) {
				return 'You succesful log in'
			}
			else return 'Wrong !!!';
	}
}