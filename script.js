document.addEventListener("DOMContentLoaded", function() {
    const dvdElement = document.getElementById('dvd');
    const textElement = document.getElementById('text');
    const container = document.getElementById('container');
    const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "white"];
    let xVelocity = 2;
    let yVelocity = 2;

    function moveDVD() {
        const rect = dvdElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Check for collision with container edges
        if (rect.left <= 0 || rect.right >= containerRect.width) {
            xVelocity *= -1;
        }
        if (rect.top <= 0 || rect.bottom >= containerRect.height) {
            yVelocity *= -1;
        }

        // Check for perfect corner hit
        if (
            (rect.left <= 0 && rect.top <= 0) ||
            (rect.right >= containerRect.width && rect.top <= 0) ||
            (rect.left <= 0 && rect.bottom >= containerRect.height) ||
            (rect.right >= containerRect.width && rect.bottom >= containerRect.height)
        ) {
            textElement.style.color = colors[Math.floor(Math.random() * colors.length)];
        }

        // Move the DVD element
        dvdElement.style.left = rect.left + xVelocity + 'px';
        dvdElement.style.top = rect.top + yVelocity + 'px';

        requestAnimationFrame(moveDVD);
    }

    // Start the movement
    moveDVD();
});
