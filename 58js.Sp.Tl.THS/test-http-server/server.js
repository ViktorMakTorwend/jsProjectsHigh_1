export default {
	'/page1/': function() {
		let num1 = 1;
		let num2 = 2;
		
		return num1 + num2;
	},
    '/page2/': function() {
        return '<h1>Page2</h1>';
    },
    '/page3/': function () {
        return '<h1>Page3!</h1>';
    }
}