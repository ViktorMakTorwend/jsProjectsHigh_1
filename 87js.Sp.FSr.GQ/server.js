export default {
	'/handler/': function({get}) {
		let arr = [
			'user1', 'user2', 'user3'
		];
		let res;
		try {
			res = getUser(get.key, arr);
		} catch (error) {
			res = (error.name + '(' + error.message + ')');
		}
		return res;
	}
}

function getUser (parUser, parArr) {
	if(parArr.includes(parUser)){
		return parUser
	} else {
		throw {
			name: 'AbsenceUserError',
			message: 'Not such user in database'
		}
	}

}