document.addEventListener('DOMContentLoaded', () => {
    const switchButton = document.getElementById('switch');
    const container = document.getElementById('container');
    const fairy = document.getElementById('fairy');

    fairy.style.filter = 'brightness(0.5)'
    container.style.backdropFilter = 'brightness(0.2)';

    let confettiTimeout;

    switchButton.addEventListener('change', () => {
        if (switchButton.checked) {
            fairy.style.filter = 'brightness(1.1)'
            container.style.backdropFilter = 'brightness(1.3)';
            fairy.style.animation = 'glow 2s ease infinite alternate';
            container.style.animation = 'screenGlow 2s ease infinite alternate';
            const defaults = {
                spread: 360,
                ticks: 50,
                gravity: 0,
                decay: 0.94,
                startVelocity: 20,
                shapes: ["star"],
                colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
            };

            function shoot(origin) {
                confetti({
                    ...defaults,
                    particleCount: 40,
                    scalar: 1.2,
                    shapes: ["star"],
                    origin: origin
                });

                confetti({
                    ...defaults,
                    particleCount: 10,
                    scalar: 0.75,
                    shapes: ["circle"],
                    origin: origin
                });
            }

            shoot({ x: 0.5, y: 0.5 }); 

            function shootRandom() {
                const randomX = Math.random();
                const randomY = Math.random();
                shoot({ x: randomX, y: randomY });
            }

            confettiTimeout = setTimeout(shootRandom, 500);
            confettiTimeout = setTimeout(shootRandom, 1000);
            confettiTimeout = setTimeout(shootRandom, 2000);
            confettiTimeout = setTimeout(shootRandom, 3000);
            confettiTimeout = setTimeout(shootRandom, 4000);
        } else {
            container.style.backdropFilter = "brightness(0.2)";
            fairy.style.filter = 'brightness(0.5)'
            fairy.style.animation = 'none';
            container.style.animation = 'none';
        }
    });
});
