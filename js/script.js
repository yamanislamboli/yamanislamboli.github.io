const text = "Software Engineer focused on Laravel & Full-Stack Development.";

let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 60);
    }
}

typeText();