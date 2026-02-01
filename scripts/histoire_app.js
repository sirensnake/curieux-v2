// HISTOIRE APP - Auto-avance + Sons + Cartes
console.log('Chargement histoire_app.js');
document.addEventListener('alpine:init', () => {
    Alpine.data('curioBubble', () => ({
        visible: false, currentMessage: '', currentVariant: 'default', autoHideTimer: null,
        init() { window.curioBubbleInstance = this; },
        show(m, v = 'default') {
            if (this.autoHideTimer) clearTimeout(this.autoHideTimer);
            this.currentMessage = m; this.currentVariant = v; this.visible = true;
            this.autoHideTimer = setTimeout(() => this.hide(), 5000);
        },
        hide() { this.visible = false; },
        getVariantClass() { return 'curio-bubble--' + this.currentVariant; }
    }));
    Alpine.data('histoireApp', () => ({
        currentPeriod: 'prehistoire', 
        showMap: false, 
        showQuiz: false, 
        showResults: false,
        showTimeline: false,
        currentQuestion: 0, 
        score: 0, 
        selectedAnswer: null, 
        answerChecked: false, 
        audioContext: null,
        init() { this.audioContext = new (window.AudioContext || window.webkitAudioContext)(); },
        playCorrectSound() {
            try {
                const o = this.audioContext.createOscillator(), g = this.audioContext.createGain();
                o.connect(g); g.connect(this.audioContext.destination);
                o.frequency.value = 523; o.type = 'sine';
                g.gain.setValueAtTime(0.3, this.audioContext.currentTime);
                g.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
                o.start(); o.stop(this.audioContext.currentTime + 0.2);
            } catch (e) {}
        },
        playIncorrectSound() {
            try {
                const o = this.audioContext.createOscillator(), g = this.audioContext.createGain();
                o.connect(g); g.connect(this.audioContext.destination);
                o.frequency.value = 185; o.type = 'triangle';
                g.gain.setValueAtTime(0.3, this.audioContext.currentTime);
                g.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
                o.start(); o.stop(this.audioContext.currentTime + 0.3);
            } catch (e) {}
        },
        quizData: {
            prehistoire: [
                { question: "Quelle invention marque la fin de la Préhistoire ?", options: ["Le feu", "L'écriture", "La roue", "L'agriculture"], correct: 1 },
                { question: "Comment vivaient les hommes au Paléolithique ?", options: ["Sédentaires", "Nomades", "Châteaux", "Villes"], correct: 1 }
            ],
            antiquite: [
                { question: "Quelle civilisation a construit les pyramides ?", options: ["Grecs", "Romains", "Égyptiens", "Gaulois"], correct: 2 }
            ],
            moyenage: [
                { question: "Quand commence le Moyen Âge ?", options: ["476", "1492", "800", "1000"], correct: 0 }
            ],
            tempsmodernes: [
                { question: "En quelle année Christophe Colomb découvre l'Amérique ?", options: ["1492", "1500", "1515", "1600"], correct: 0 }
            ],
            epoquecontemporaine: [
                { question: "En quelle année la Révolution française ?", options: ["1789", "1799", "1815", "1848"], correct: 0 }
            ]
        },
        mapData: {
            prehistoire: {
                title: "Migrations Préhistoriques",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Spreading_homo_sapiens_la.svg/800px-Spreading_homo_sapiens_la.svg.png"
            },
            antiquite: {
                title: "Empire Romain",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Roman_Empire_Trajan_117AD.png/800px-Roman_Empire_Trajan_117AD.png"
            },
            moyenage: {
                title: "Europe Médiévale",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Europe_map_1200_fr.jpg/800px-Europe_map_1200_fr.jpg"
            },
            tempsmodernes: {
                title: "Grandes Découvertes",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Colonisation2.gif/800px-Colonisation2.gif"
            },
            epoquecontemporaine: {
                title: "Europe XIXe",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Europe_1815_map_en.png/800px-Europe_1815_map_en.png"
            }
        },
        selectPeriod(p) { this.currentPeriod = p; this.showQuiz = this.showResults = this.showMap = false; },
        startQuiz() {
            this.showQuiz = true; this.showResults = false;
            this.currentQuestion = this.score = 0; this.selectedAnswer = null; this.answerChecked = false;
        },
        getCurrentQuiz() { return this.quizData[this.currentPeriod] || []; },
        getCurrentQuestionData() { return this.getCurrentQuiz()[this.currentQuestion] || {}; },
        selectAnswer(idx) {
            if (this.answerChecked) return;
            this.selectedAnswer = idx;
            const q = this.getCurrentQuestionData();
            this.answerChecked = true;
            if (idx === q.correct) { this.score++; this.playCorrectSound(); }
            else { this.playIncorrectSound(); }
            setTimeout(() => {
                if (this.currentQuestion < this.getCurrentQuiz().length - 1) this.nextQuestion();
                else this.finishQuiz();
            }, 2000);
        },
        nextQuestion() { this.currentQuestion++; this.selectedAnswer = null; this.answerChecked = false; },
        getOptionClass(idx) {
            if (!this.answerChecked) return this.selectedAnswer === idx ? 'selected' : '';
            const q = this.getCurrentQuestionData();
            if (idx === q.correct) return 'correct';
            if (idx === this.selectedAnswer) return 'incorrect';
            return '';
        },
        toggleMaps() { this.showMap = !this.showMap; },
        getMapImageUrl() { return this.mapData[this.currentPeriod]?.imageUrl || ""; },
        getMapTitle() { return this.mapData[this.currentPeriod]?.title || ""; },
        finishQuiz() { this.showQuiz = false; this.showResults = true; },
        retryQuiz() { this.showResults = false; this.showQuiz = true; this.currentQuestion = this.score = 0; },
        getPeriodTitle() {
            const titles = {
                'prehistoire': 'Préhistoire',
                'antiquite': 'Antiquité',
                'moyenage': 'Moyen Âge',
                'tempsmodernes': 'Temps Modernes',
                'epoquecontemporaine': 'Époque Contemporaine'
            };
            return titles[this.currentPeriod] || '';
        },
        getPeriodDates() {
            const dates = {
                'prehistoire': 'De -3 millions d\'années à -3300 av. J.-C.',
                'antiquite': 'De -3300 av. J.-C. à 476 ap. J.-C.',
                'moyenage': 'De 476 à 1492',
                'tempsmodernes': 'De 1492 à 1789',
                'epoquecontemporaine': 'De 1789 à aujourd\'hui'
            };
            return dates[this.currentPeriod] || '';
        },
        getScoreMessage() {
            const percentage = (this.score / this.getCurrentQuiz().length) * 100;
            if (percentage === 100) return '🏆 Parfait ! Tu maîtrises cette période !';
            if (percentage >= 80) return '🌟 Excellent ! Très bien joué !';
            if (percentage >= 60) return '👍 Bien ! Continue comme ça !';
            if (percentage >= 40) return '💪 Pas mal ! Révise encore un peu !';
            return '📚 Continue à apprendre, tu vas y arriver !';
        },
        backToPeriod() {
            this.showResults = false;
            this.showQuiz = false;
        }
    }));
});
