document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    const dots = [];
    let colors = ["red", "green", "blue", "orange", "purple"];

    function randomPosition() {
        return Math.random() * 100;
    }

    function createDot(xPercent, yPercent, color = "lightblue") {
        const dot = document.createElement("div");
        dot.className = "dot";
        dot.style.left = `calc(${xPercent}% - 5px)`; // Centering the dot
        dot.style.top = `calc(${yPercent}% - 5px)`;  // Centering the dot
        dot.style.backgroundColor = color;
        container.appendChild(dot);
        return dot;
    }

    function createLine(dot1, dot2) {
        const line = document.createElement("div");
        line.className = "line";

        const x1 = dot1.offsetLeft + 5; // Adding 5px to center of dot
        const y1 = dot1.offsetTop + 5;
        const x2 = dot2.offsetLeft + 5;
        const y2 = dot2.offsetTop + 5;

        const length = Math.hypot(x2 - x1, y2 - y1);
        const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

        line.style.width = `${length}px`;
        line.style.left = `${x1}px`;
        line.style.top = `${y1}px`;
        line.style.transform = `rotate(${angle}deg)`;
        container.appendChild(line);
    }

    document.addEventListener("click", function(event) {
        const xPercent = (event.clientX / window.innerWidth) * 100;
        const yPercent = (event.clientY / window.innerHeight) * 100;

        const newDot = createDot(xPercent, yPercent, colors[Math.floor(Math.random() * colors.length)]);
        dots.push(newDot);

        // Draw lines between the new dot and all previous dots
        dots.forEach(dot => {
            if (dot !== newDot) {
                createLine(dot, newDot);
            }
        });
    });

    // Place the initial dot at a random location
    const initialDot = createDot(randomPosition(), randomPosition());
    dots.push(initialDot);
});
