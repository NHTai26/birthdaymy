const text = "Chúc mừng sinh nhật bạn My❤️";
let index = 0;
const speed = 150;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("cake").style.display = "block";
  }
}

window.onload = typeWriter;
