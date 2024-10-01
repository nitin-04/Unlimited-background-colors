const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId = null;  // Initialize as null
const startChangingColor = function () {
    if (intervalId === null) { // Check if interval is already running
        intervalId = setInterval(changeByColor, 2000);
    }
    function changeByColor() {
        document.body.style.backgroundColor = randomColor();
    }

}

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null; // Reset the intervalId to null


}

document.querySelector('#one').addEventListener('click', startChangingColor);
document.querySelector('#two').addEventListener('click', stopChangingColor);

