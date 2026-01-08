(function() {
    const CURIO_SPRITES = {
        normal: 'assets/img/avatars/curio-normal.png',
        happy: 'assets/img/avatars/curio-happy.png',
        sad: 'assets/img/avatars/curio-sad.png'
        teacher: 'assets/img/avatars/curio-teacher.png' 
    };

    function createCurio() {
        if (document.getElementById('curio-assistant')) return;

        const curioDiv = document.createElement('div');
        curioDiv.id = 'curio-assistant';
        curioDiv.style.cssText = `
            position: fixed; bottom: 20px; right: 20px;
            width: 120px; height: 120px; cursor: pointer; z-index: 10000;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            image-rendering: pixelated;
        `;

        curioDiv.innerHTML = `
            <div id="curio-bubble" style="display: none; position: absolute; bottom: 130px; right: 0;
                background: white; border: 4px solid #2c3e50; padding: 15px; width: 250px;
                font-family: 'Press Start 2P', cursive; font-size: 10px; box-shadow: 8px 8px 0 rgba(0,0,0,0.1);
                line-height: 1.4;">
                <div id="curio-text"></div>
            </div>
            <img id="curio-img" src="${CURIO_SPRITES.normal}" style="width: 100%; filter: drop-shadow(4px 4px 0 rgba(0,0,0,0.1));">
        `;

        document.body.appendChild(curioDiv);

        window.curioChangeState = (state, message = null) => {
            const img = document.getElementById('curio-img');
            const bubble = document.getElementById('curio-bubble');
            const text = document.getElementById('curio-text');

            if (CURIO_SPRITES[state]) {
                img.src = CURIO_SPRITES[state];
            }

            if (message) {
                text.innerText = message;
                bubble.style.display = 'block';
            }

            // Animations spécifiques selon l'état
            if (state === 'happy') {
                curioDiv.animate([
                    { transform: 'translateY(0)' },
                    { transform: 'translateY(-30px)' },
                    { transform: 'translateY(0)' }
                ], { duration: 400, iterations: 2 });
            } else if (state === 'sad') {
                curioDiv.animate([
                    { transform: 'translateX(-5px)' },
                    { transform: 'translateX(5px)' }
                ], { duration: 100, iterations: 5 });
            }

            // Retour au calme après 3 secondes
            if (state !== 'normal') {
                setTimeout(() => {
                    img.src = CURIO_SPRITES.normal;
                    if (!message) bubble.style.display = 'none';
                }, 3000);
            }
        };
    }
    createCurio();
})();