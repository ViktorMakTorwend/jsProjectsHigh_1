//⋕js.Sp.Asn.PsSS

function getSmth(num) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(num * num), 1000)
	});
}

function func1() {
	getSmth(2).then(res1 => {
		getSmth(3).then(res2 => {
			getSmth(4).then(res3 => {
				console.log(res1 + res2 + res3);
			});
		});
	});
}

func1();

async function func2 () {
	try {
		let res1 = await getSmth (2);
		let res2 = await getSmth (3);
		let res3 = await getSmth (4);

		console.log(res1 + res2 + res3);
	} 	catch (err)	{
		console.lor(err);
	}	
}

func2 ();
