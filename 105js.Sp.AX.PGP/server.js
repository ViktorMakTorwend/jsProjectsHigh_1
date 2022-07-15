export default {
	'/handler/': function({get}) {
		let arr = [11, 21, 22, 23];
		return arr[get.num];
	}
}