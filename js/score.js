let heros = JSON.parse(localStorage.getItem('users'));
heros .forEach(element => {
    element.username
    element.score
    });

    divs.innerHTML+=<h2>${element.username } : ${element.score}</h2>
let divs = document.getElementById('heros');