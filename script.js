document.addEventListener("DOMContentLoaded", function() {
    const dvdElement = document.getElementById('dvd');
    const textElement = document.getElementById('text');
    const container = document.getElementById('container');
    const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "white"];
    let xVelocity = 2;
    let yVelocity = 2;

    function moveDVD() {
        // Get the position and dimensions of the DVD and the container
        const dvdRect = dvdElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Calculate new position
        let newLeft = dvdRect.left + xVelocity;
        let newTop = dvdRect.top + yVelocity;

        // Check for collision with container edges
        if (newLeft <= 0 || newLeft + dvdRect.width >= containerRect.width) {
            xVelocity *= -1; // Reverse X direction
            newLeft = dvdRect.left + xVelocity; // Recalculate new position after collision
        }
        if (newTop <= 0 || newTop + dvdRect.height >= containerRect.height) {
            yVelocity *= -1; // Reverse Y direction
            newTop = dvdRect.top + yVelocity; // Recalculate new position after collision
        }

        // Check for perfect corner hit
        if (
            (newLeft <= 0 && newTop <= 0) || // Top-left corner
            (newLeft + dvdRect.width >= containerRect.width && newTop <= 0) || // Top-right corner
            (newLeft <= 0 && newTop + dvdRect.height >= containerRect.height) || // Bottom-left corner
            (newLeft + dvdRect.width >= containerRect.width && newTop + dvdRect.height >= containerRect.height) // Bottom-right corner
        ) {
            textElement.style.color = colors[Math.floor(Math.random() * colors.length)];
        }

        // Apply the new position
        dvdElement.style.left = newLeft + 'px';
        dvdElement.style.top = newTop + 'px';

        // Request the next frame
        requestAnimationFrame(moveDVD);
    }

    // Initial positioning to avoid overflow
    dvdElement.style.left = '0px';
    dvdElement.style.top = '0px';

    // Start the movement
    moveDVD();
});
