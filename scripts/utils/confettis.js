/**
 * Petit moteur de confettis Pixel Art
 */
function launchPixelConfetti() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);

    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

    for (let i = 0; i < 150; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            size: Math.random() * 8 + 4, // Petits carrés
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 15,
            vy: (Math.random() - 0.5) * 15 - 5,
            gravity: 0.2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            
            ctx.fillStyle = p.color;
            // Dessin d'un carré (Pixel)
            ctx.fillRect(p.x, p.y, p.size, p.size);

            if (p.y > canvas.height) particles.splice(i, 1);
        });

        if (particles.length > 0) {
            requestAnimationFrame(animate);
        } else {
            canvas.remove();
        }
    }
    animate();
}