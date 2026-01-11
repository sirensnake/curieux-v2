/**
 * CORE : lesson-engine.js - Harmonisé pour l'EXP globale
 */
class LessonEngine {
    constructor(data) {
        this.data = data;
        this.lesson = null;
        this.index = 0;
        // CHANGEMENT : On utilise la clé globale curio_total_exp
        this.xp = parseInt(localStorage.getItem('curio_total_exp') || '0');
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

    // ... (Garder tes fonctions enableAudio, renderGrid, startLesson, etc.) ...

    completeLesson() {
        const gain = this.lesson.xp || 50;
        this.xp += gain;
        
        // CHANGEMENT : Sauvegarde sur la clé globale
        localStorage.setItem('curio_total_exp', this.xp);
        
        this.updateXPDisplay();
        this.showVictoryModal(gain);
    }

    updateXPDisplay() {
        const display = document.getElementById('xp-display');
        if (display) display.innerText = this.xp + " XP";
    }
    
    // ... (Reste du code identique à ton original) ...
}