let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let van = document.getElementById("van");
let title = document.getElementById("title");
let text = document.getElementById("text");

window.addEventListener('scroll', function () {
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 2 + 'px';
    moon.style.top = value * 0.3 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    title.style.top = value * 1 + 'px';
    text.style.top = value * 0.15 + 'px';

    var scale = 1 - value * 0.001; // Ajustez la valeur de rétrécissement ici

    van.style.top = -value * 0.1 + 'px';
    van.style.left = value * 3.0 + 'px';
    van.style.transform = 'scale(' + scale + ')'; // Ajoutez cette ligne
})

    // Pour la navbar 