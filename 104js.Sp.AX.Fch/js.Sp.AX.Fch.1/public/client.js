//⋕js.Sp.AX.Fch.1

let div    = document.querySelector('div');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', function() {
    fetch ('serIndex1.html').then(response => {
        return response.text();
    }
    ).then (
        text => {
            div.innerHTML = text;
        }
    );
});

btn2.addEventListener('click', function() {
    fetch ('serIndex2.html').then(response => {
        return response.text();
    }
    ).then (
        text => {
            div.innerHTML += text;
        }
    );
});

btn3.addEventListener('click', function() {
    fetch ('serIndex3.html').then(response => {
        return response.text();
    }
    ).then (
        text => {
            div.innerHTML += text;
        }
    );
});