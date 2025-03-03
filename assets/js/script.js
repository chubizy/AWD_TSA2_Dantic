function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

let BoxisDown = false;
let BoxisUp = true;

function showBox() {
    const box = document.getElementById('box');
    if (BoxisDown) {
        box.style.top = '-1000px';
    } else {
        box.style.top = '400px';
    }

    if (BoxisUp) {
        box2.style.top = '-1000px'
    } else {
        box2.style.top = '400px'
    }

    box.style.backgroundColor = getRandomColor();
    box2.style.backgroundColor = getRandomColor();
    BoxisDown = !BoxisDown;
    BoxisUp = !BoxisUp;
}


