const text = "About Me";
const speed = 150;
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        document.querySelector('.about-description').classList.add('show');
    }
}

window.onload = () => {
    typeWriter();
};