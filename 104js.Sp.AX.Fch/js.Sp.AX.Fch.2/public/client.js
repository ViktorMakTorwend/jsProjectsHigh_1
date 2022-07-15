//⋕js.Sp.AX.Fch.2
let div = document.querySelector('div');
let btn1 = document.querySelector('#btn1');
let arrOfPages = ['serIndex1.html', 'serIndex2.html', 'serIndex3.html', 'serIndex4.html', 'serIndex5.html'];

btn1.addEventListener('click', function() {
        let page = arrOfPages.shift();
        if (page) {
            fetch (page).then(response => {
                return response.text();
            }
            ).then (
                text => {
                    div.innerHTML += text;
                }
            ); 
        }
        else {
            throw new Error ('No pics on server any more')
        }
       
});


