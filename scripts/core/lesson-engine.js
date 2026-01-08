/**
 * ==========================================
 * CORE : lesson-engine.js
 * Plateforme : Le Monde des Curieux
 * Rôle : Logique de jeu, Audio 8-bit, Confettis & Modale
 * ==========================================
 */

class LessonEngine {
    constructor(data) {
        this.data = data;
        this.lesson = null;
        this.index = 0;
        this.xp = parseInt(localStorage.getItem('curio_xp') || '855');
        this.audioEnabled = false;

        this.avatars = {
            idle: "assets/img/avatars/curio-normal.png",
            success: "assets/img/avatars/curio-happy.png",
            error: "assets/img/avatars/curio-sad.png",
            hint: "assets/img/avatars/curio-teacher.png"
        };

        window.engine = this;
        this.init();
    }

    init() {
        this.renderGrid();
        this.updateXPDisplay();
        
        document.addEventListener('keydown', (e) => {
            const screen = document.getElementById('lesson-screen');
            if (e.key === 'Enter' && screen && !screen.classList.contains('hidden')) {
                this.validate();
            }
        });
    }

    /**
     * GESTION AUDIO & EFFETS
     */
    enableAudio() {
        this.audioEnabled = true;
        const btn = document.getElementById('sound-toggle');
        btn.innerText = "🔊";
        btn.style.backgroundColor = "#38b000";
        btn.classList.replace('off', 'on');
        this.play8BitSound('click');
        this.setCurio('idle', "Système audio prêt !");
    }

    play8BitSound(type) {
        if (!this.audioEnabled) return;
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        const now = ctx.currentTime;

        if (type === 'success') {
            osc.type = 'square';
            osc.frequency.setValueAtTime(523.25, now);
            osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
            osc.start(now); osc.stop(now + 0.3);
        } else if (type === 'error') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.linearRampToValueAtTime(50, now + 0.3);
            gain.gain.setValueAtTime(0.1, now);
            osc.start(now); osc.stop(now + 0.3);
        } else {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, now);
            gain.gain.setValueAtTime(0.1, now);
            osc.start(now); osc.stop(now + 0.05);
        }
    }

    /**
     * LOGIQUE DE JEU
     */
    renderGrid() {
        const grid = document.getElementById('lessons-grid');
        if (!grid) return;
        grid.innerHTML = '';
        this.data.forEach((l, i) => {
            const card = document.createElement('div');
            card.className = 'lesson-card';
            card.onclick = () => { this.play8BitSound('click'); this.start(i); };
            card.innerHTML = `<span class="card-icon">${l.emoji}</span><span class="card-title">${l.title}</span>`;
            grid.appendChild(card);
        });
    }

    start(i) {
        this.lesson = this.data[i];
        this.index = 0;
        document.getElementById('lessons-list').classList.add('hidden');
        document.getElementById('lesson-screen').classList.remove('hidden');
        this.updateUI();
    }

    updateUI() {
        const q = this.lesson.exercises[this.index];
        document.getElementById('question-text').innerText = q.question;
        const input = document.getElementById('user-input');
        input.value = ''; input.focus();
        document.getElementById('progress-fill').style.width = (this.index / this.lesson.exercises.length) * 100 + "%";
        this.setCurio('idle', "À toi de jouer !");
    }

    validate() {
        const input = document.getElementById('user-input').value.trim().toLowerCase();
        const currentEx = this.lesson.exercises[this.index];
        if (input === currentEx.answer.toLowerCase()) {
            this.play8BitSound('success');
            this.setCurio('success', "Bien joué ! ✨");
            this.index++;
            if (this.index < this.lesson.exercises.length) {
                setTimeout(() => this.updateUI(), 800);
            } else {
                this.finish();
            }
        } else {
            this.play8BitSound('error');
            this.setCurio('error', "💡 " + (currentEx.hint || "Essaie encore !"));
        }
    }

    /**
     * CÉLÉBRATION FINALE
     */
    finish() {
        this.xp += this.lesson.xp;
        localStorage.setItem('curio_xp', this.xp);
        this.updateXPDisplay();
        
        this.launchConfetti();
        this.play8BitSound('success');
        
        const modal = document.getElementById('victory-modal');
        if (modal) {
            document.getElementById('xp-added').innerText = this.lesson.xp;
            modal.classList.remove('hidden');
        }
        this.setCurio('success', "FÉLICITATIONS ! 🏆");
    }

    launchConfetti() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        document.body.appendChild(canvas);
        canvas.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999";
        canvas.width = window.innerWidth; canvas.height = window.innerHeight;
        const particles = [];
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
        for (let i = 0; i < 100; i++) {
            particles.push({
                x: canvas.width / 2, y: canvas.height / 2,
                size: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                vx: (Math.random() - 0.5) * 20, vy: (Math.random() - 0.5) * 20 - 5,
                gravity: 0.2
            });
        }
        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p, i) => {
                p.x += p.vx; p.y += p.vy; p.vy += p.gravity;
                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, p.size, p.size);
                if (p.y > canvas.height) particles.splice(i, 1);
            });
            if (particles.length > 0) requestAnimationFrame(render);
            else canvas.remove();
        };
        render();
    }

    updateXPDisplay() {
        const display = document.getElementById('xp-display');
        if (display) display.innerText = this.xp + " XP";
    }

    setCurio(state, msg) {
        document.getElementById('curio-sprite-img').src = this.avatars[state];
        document.getElementById('curio-msg').innerText = msg;
    }

    showHint() {
        const q = this.lesson.exercises[this.index];
        this.setCurio('hint', "🧐 " + (q.hint || "Besoin d'aide ?"));
        this.play8BitSound('click');
    }
}