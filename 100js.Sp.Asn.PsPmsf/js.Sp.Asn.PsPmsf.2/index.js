//⋕js.Sp.Asn.PsPmsf.2

let paths = ['img1.png', 'img2.png', 'img3.png'];

function loadImage(path) {
	return new Promise(function(resolve, reject) {
		let image = document.createElement('img');
		image.src = path;
		
		image.addEventListener('load', function() {
			resolve(image);
		});
		image.addEventListener('error', function() {
			reject(new Error('image "' + path + '"  load error'));
		});
	});
}

let promises = [];
for (let i = 0; i < paths.length; i++){
	promises[i] = loadImage(paths[i]);
}

 Promise.all(promises).then (function(arrImage) {
	for (let image of arrImage){
		document.body.appendChild(image);
	}
}).catch (function(error) {
	console.log(error);
}); 
