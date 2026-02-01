// Application Histoire Alpine.js AMÉLIORÉE
// Avec auto-avance quiz + sons + vraies cartes

document.addEventListener('alpine:init', () => {
    // Composant Curio
    Alpine.data('curioBubble', () => ({
        visible: false,
        currentMessage: '',
        currentVariant: 'default',
        autoHideTimer: null,
        
        init() {
            window.curioBubbleInstance = this;
        },
        
        show(message, variant = 'default') {
            if (this.autoHideTimer) clearTimeout(this.autoHideTimer);
            this.currentMessage = message;
            this.currentVariant = variant;
            this.visible = true;
            
            this.autoHideTimer = setTimeout(() => this.hide(), 5000);
        },
        
        hide() {
            this.visible = false;
            if (this.autoHideTimer) {
                clearTimeout(this.autoHideTimer);
            }
        },
        
        getVariantClass() {
            return `curio-bubble--${this.currentVariant}`;
        }
    }));
    
    // Application Histoire principale
    Alpine.data('histoireApp', () => ({
        currentPeriod: 'prehistoire',
        showTimeline: false,
        showMap: false,
        showQuiz: false,
        showResults: false,
        currentQuestion: 0,
        score: 0,
        selectedAnswer: null,
        answerChecked: false,
        
        // 🔊 SONS
        sounds: {
            correct: null,
            incorrect: null
        },
        
        init() {
            // Créer les sons avec Web Audio API
            this.initSounds();
        },
        
        // 🔊 Initialiser les sons
        initSounds() {
            // Son correct : note joyeuse (DO majeur)
            this.sounds.correct = this.createSound(523.25, 0.2, 'sine'); // DO
            
            // Son incorrect : note grave (FA#)
            this.sounds.incorrect = this.createSound(185, 0.3, 'triangle'); // FA#
        },
        
        // 🔊 Créer un son simple
        createSound(frequency, duration, type = 'sine') {
            return () => {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = frequency;
                oscillator.type = type;
                
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(
                    0.01, 
                    audioContext.currentTime + duration
                );
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + duration);
            };
        },
        
        // QUIZ ENRICHI - 35 questions au total
        quizData: {
            prehistoire: [
                {
                    question: "Quelle invention marque la fin de la Préhistoire ?",
                    options: ["Le feu", "L'écriture", "La roue", "L'agriculture"],
                    correct: 1
                },
                {
                    question: "Comment vivaient les hommes au Paléolithique ?",
                    options: ["Sédentaires", "Nomades", "Dans des châteaux", "Dans des villes"],
                    correct: 1
                },
                {
                    question: "Quel est le nom du premier homme moderne ?",
                    options: ["Homo habilis", "Homo erectus", "Homo sapiens", "Néandertal"],
                    correct: 2
                },
                {
                    question: "Que faisaient principalement les hommes préhistoriques pour se nourrir ?",
                    options: ["Agriculture", "Commerce", "Chasse et cueillette", "Élevage"],
                    correct: 2
                },
                {
                    question: "Dans quelle grotte trouve-t-on des peintures vieilles de 17 000 ans ?",
                    options: ["Grotte Chauvet", "Lascaux", "Altamira", "Cosquer"],
                    correct: 1
                },
                {
                    question: "Qu'est-ce qu'un menhir ?",
                    options: ["Une grotte", "Une pierre dressée", "Un village", "Un outil"],
                    correct: 1
                }
            ],
            
            antiquite: [
                {
                    question: "Quelle civilisation a construit les pyramides ?",
                    options: ["Les Grecs", "Les Romains", "Les Égyptiens", "Les Gaulois"],
                    correct: 2
                },
                {
                    question: "Qui était le chef gaulois qui a résisté à César ?",
                    options: ["Astérix", "Vercingétorix", "Obélix", "Clovis"],
                    correct: 1
                },
                {
                    question: "Dans quelle ville ont été créés les premiers Jeux Olympiques ?",
                    options: ["Rome", "Athènes", "Olympie", "Sparte"],
                    correct: 2
                },
                {
                    question: "Quel empereur romain a conquis la Gaule ?",
                    options: ["Auguste", "Néron", "Jules César", "Marc Aurèle"],
                    correct: 2
                },
                {
                    question: "Comment s'appelait l'écriture des Égyptiens ?",
                    options: ["Hiéroglyphes", "Cunéiforme", "Latin", "Grec"],
                    correct: 0
                },
                {
                    question: "Quelle était la langue parlée dans l'Empire romain ?",
                    options: ["Le grec", "Le latin", "Le gaulois", "L'égyptien"],
                    correct: 1
                },
                {
                    question: "Qui était Cléopâtre ?",
                    options: ["Une déesse", "Une reine d'Égypte", "Une gladiatrice", "Une esclave"],
                    correct: 1
                },
                {
                    question: "Quel monument romain servait aux combats de gladiateurs ?",
                    options: ["Le Parthénon", "Le Colisée", "L'Arc de Triomphe", "Les Thermes"],
                    correct: 1
                }
            ],
            
            moyenage: [
                {
                    question: "Quand commence le Moyen Âge ?",
                    options: ["476", "1492", "800", "1000"],
                    correct: 0
                },
                {
                    question: "Qui vivait dans les châteaux forts ?",
                    options: ["Les paysans", "Les seigneurs", "Les moines", "Les marchands"],
                    correct: 1
                },
                {
                    question: "Quelle était l'arme principale des chevaliers ?",
                    options: ["L'arc", "L'épée", "La lance", "Le pistolet"],
                    correct: 1
                },
                {
                    question: "Comment s'appelle le grand livre écrit à la main au Moyen Âge ?",
                    options: ["Le journal", "Le manuscrit", "L'imprimé", "Le parchemin"],
                    correct: 1
                },
                {
                    question: "Qui était Jeanne d'Arc ?",
                    options: ["Une reine", "Une guerrière", "Une religieuse", "Une paysanne"],
                    correct: 1
                },
                {
                    question: "Quelle cathédrale célèbre se trouve à Paris ?",
                    options: ["Sacré-Cœur", "Notre-Dame", "Saint-Pierre", "La Madeleine"],
                    correct: 1
                },
                {
                    question: "Que représente la tapisserie de Bayeux ?",
                    options: ["La bataille d'Hastings", "Les croisades", "La vie quotidienne", "La chasse"],
                    correct: 0
                }
            ],
            
            tempsmodernes: [
                {
                    question: "En quelle année Christophe Colomb découvre-t-il l'Amérique ?",
                    options: ["1492", "1500", "1515", "1600"],
                    correct: 0
                },
                {
                    question: "Quel roi de France a fait construire le château de Versailles ?",
                    options: ["François Ier", "Henri IV", "Louis XIV", "Louis XVI"],
                    correct: 2
                },
                {
                    question: "Qui a inventé l'imprimerie ?",
                    options: ["Léonard de Vinci", "Gutenberg", "Galilée", "Copernic"],
                    correct: 1
                },
                {
                    question: "Comment surnommait-on Louis XIV ?",
                    options: ["Le Roi-Guerrier", "Le Roi-Soleil", "Le Roi-Sage", "Le Roi-Lion"],
                    correct: 1
                },
                {
                    question: "Qui a peint La Joconde ?",
                    options: ["Michel-Ange", "Raphaël", "Léonard de Vinci", "Botticelli"],
                    correct: 2
                },
                {
                    question: "Quel navigateur a fait le premier tour du monde ?",
                    options: ["Christophe Colomb", "Vasco de Gama", "Magellan", "Marco Polo"],
                    correct: 2
                },
                {
                    question: "Dans quel pays se trouve la chapelle Sixtine ?",
                    options: ["France", "Espagne", "Italie", "Grèce"],
                    correct: 2
                }
            ],
            
            epoquecontemporaine: [
                {
                    question: "En quelle année a eu lieu la Révolution française ?",
                    options: ["1789", "1799", "1815", "1848"],
                    correct: 0
                },
                {
                    question: "Quel jour célèbre-t-on la prise de la Bastille ?",
                    options: ["1er mai", "14 juillet", "21 juin", "11 novembre"],
                    correct: 1
                },
                {
                    question: "Qui était Napoléon Bonaparte ?",
                    options: ["Un roi", "Un empereur", "Un président", "Un général"],
                    correct: 1
                },
                {
                    question: "Qu'est-ce que la Déclaration des droits de l'Homme ?",
                    options: ["Un livre", "Un texte sur les libertés", "Une loi", "Un journal"],
                    correct: 1
                },
                {
                    question: "Quand l'homme a-t-il marché sur la Lune ?",
                    options: ["1959", "1969", "1979", "1989"],
                    correct: 1
                },
                {
                    question: "Combien y a-t-il eu de guerres mondiales au XXe siècle ?",
                    options: ["Une", "Deux", "Trois", "Quatre"],
                    correct: 1
                },
                {
                    question: "Quel symbole représente la Révolution française ?",
                    options: ["La couronne", "Le drapeau tricolore", "L'aigle", "La fleur de lys"],
                    correct: 1
                }
            ]
        },
        
        // CARTES HISTORIQUES avec vraies images
        mapData: {
            prehistoire: {
                emoji: "🌍",
                title: "Migrations Humaines Préhistoriques",
                description: "Les premiers humains sont apparus en Afrique il y a 3 millions d'années, puis ont migré vers l'Europe et l'Asie.",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Spreading_homo_sapiens_la.svg/800px-Spreading_homo_sapiens_la.svg.png",
                legend: [
                    { color: "#FFA500", label: "Berceau de l'humanité (Afrique)" },
                    { color: "#90EE90", label: "Migrations principales" },
                    { color: "#87CEEB", label: "Sites préhistoriques" }
                ]
            },
            antiquite: {
                emoji: "🏛️",
                title: "Les Grands Empires de l'Antiquité",
                description: "L'Égypte, la Grèce et Rome dominaient le monde méditerranéen pendant l'Antiquité.",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Roman_Empire_Trajan_117AD.png/800px-Roman_Empire_Trajan_117AD.png",
                legend: [
                    { color: "#FFD700", label: "Empire Égyptien" },
                    { color: "#4169E1", label: "Grèce Antique" },
                    { color: "#DC143C", label: "Empire Romain (max)" },
                    { color: "#98FB98", label: "Gaule" }
                ]
            },
            moyenage: {
                emoji: "🏰",
                title: "L'Europe Médiévale",
                description: "Au Moyen Âge, l'Europe était divisée en nombreux royaumes et seigneuries.",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Europe_map_1200_fr.jpg/800px-Europe_map_1200_fr.jpg",
                legend: [
                    { color: "#9370DB", label: "Empire de Charlemagne" },
                    { color: "#4169E1", label: "Royaume de France" },
                    { color: "#DC143C", label: "Saint Empire" },
                    { color: "#2E8B57", label: "Terres musulmanes" }
                ]
            },
            tempsmodernes: {
                emoji: "⛵",
                title: "Les Grandes Découvertes",
                description: "Les explorateurs européens découvrent de nouveaux continents : Amérique, Océanie.",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Colonisation2.gif/800px-Colonisation2.gif",
                legend: [
                    { color: "#FFD700", label: "Empire espagnol" },
                    { color: "#4169E1", label: "Possessions françaises" },
                    { color: "#DC143C", label: "Empire britannique" },
                    { color: "#FF6347", label: "Routes commerciales" }
                ]
            },
            epoquecontemporaine: {
                emoji: "🏭",
                title: "L'Europe au XIXe siècle",
                description: "Révolutions, industrialisation et grands empires coloniaux transforment le monde.",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Europe_1815_map_en.png/800px-Europe_1815_map_en.png",
                legend: [
                    { color: "#4169E1", label: "France (Empire napoléonien)" },
                    { color: "#FFD700", label: "Empire autrichien" },
                    { color: "#DC143C", label: "Empire britannique" },
                    { color: "#98FB98", label: "Empire russe" }
                ]
            }
        },
        
        selectPeriod(period) {
            this.currentPeriod = period;
            this.showQuiz = false;
            this.showResults = false;
            this.showTimeline = false;
            this.showMap = false;
            
            setTimeout(() => {
                document.querySelector('.period-content').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }, 100);
        },
        
        // QUIZ avec AUTO-AVANCE
        startQuiz() {
            this.showQuiz = true;
            this.showResults = false;
            this.currentQuestion = 0;
            this.score = 0;
            this.selectedAnswer = null;
            this.answerChecked = false;
            
            window.curioBubbleInstance.show("🎯 Quiz sur " + this.getPeriodName() + " ! Réponds correctement à chaque question.", 'info');
            
            setTimeout(() => {
                document.querySelector('.quiz-container').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }, 300);
        },
        
        getPeriodName() {
            const names = {
                'prehistoire': 'la Préhistoire',
                'antiquite': 'l\'Antiquité',
                'moyenage': 'le Moyen Âge',
                'tempsmodernes': 'les Temps Modernes',
                'epoquecontemporaine': 'l\'Époque Contemporaine'
            };
            return names[this.currentPeriod] || '';
        },
        
        getCurrentQuiz() {
            return this.quizData[this.currentPeriod] || [];
        },
        
        getCurrentQuestionData() {
            return this.getCurrentQuiz()[this.currentQuestion] || {};
        },
        
        // 🎯 SÉLECTION RÉPONSE avec AUTO-AVANCE
        selectAnswer(index) {
            if (this.answerChecked) return;
            
            this.selectedAnswer = index;
            const question = this.getCurrentQuestionData();
            const isCorrect = index === question.correct;
            
            // Marquer comme vérifié immédiatement
            this.answerChecked = true;
            
            if (isCorrect) {
                this.score++;
                // 🔊 Son correct
                this.sounds.correct();
                window.curioBubbleInstance.show("✅ Bravo ! C'est la bonne réponse !", 'success');
            } else {
                // 🔊 Son incorrect
                this.sounds.incorrect();
                window.curioBubbleInstance.show("❌ Pas tout à fait... La bonne réponse était : " + question.options[question.correct], 'error');
            }
            
            // ⏱️ AUTO-AVANCE après 2 secondes
            setTimeout(() => {
                if (this.currentQuestion < this.getCurrentQuiz().length - 1) {
                    this.nextQuestion();
                } else {
                    this.finishQuiz();
                }
            }, 2000);
        },
        
        nextQuestion() {
            this.currentQuestion++;
            this.selectedAnswer = null;
            this.answerChecked = false;
        },
        
        getOptionClass(index) {
            if (!this.answerChecked) {
                return this.selectedAnswer === index ? 'selected' : '';
            }
            const question = this.getCurrentQuestionData();
            if (index === question.correct) return 'correct';
            if (index === this.selectedAnswer && index !== question.correct) return 'incorrect';
            return '';
        },
        
        // FRISE CHRONOLOGIQUE
        toggleTimeline() {
            this.showTimeline = !this.showTimeline;
            if (this.showTimeline) {
                this.showMap = false;
                window.curioBubbleInstance.show("📊 Explore la frise chronologique ! Clique sur une période pour en savoir plus.", 'info');
                
                setTimeout(() => {
                    document.querySelector('.timeline-container').scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                }, 300);
            }
        },
        
        // CARTES HISTORIQUES
        toggleMaps() {
            this.showMap = !this.showMap;
            if (this.showMap) {
                this.showTimeline = false;
                window.curioBubbleInstance.show("🗺️ Découvre les territoires de " + this.getPeriodName() + " !", 'info');
                
                setTimeout(() => {
                    document.querySelector('.map-container').scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                }, 300);
            }
        },
        
        getMapEmoji() {
            return this.mapData[this.currentPeriod]?.emoji || "🗺️";
        },
        
        getMapTitle() {
            return this.mapData[this.currentPeriod]?.title || "Carte Historique";
        },
        
        getMapDescription() {
            return this.mapData[this.currentPeriod]?.description || "Explore les territoires de cette époque.";
        },
        
        getMapImageUrl() {
            return this.mapData[this.currentPeriod]?.imageUrl || "";
        },
        
        getMapLegend() {
            return this.mapData[this.currentPeriod]?.legend || [];
        },
        
        getScoreMessage() {
            const percentage = Math.round(this.score / this.getCurrentQuiz().length * 100);
            if (percentage === 100) return "🏆 PARFAIT ! Tu es un champion d'Histoire !";
            if (percentage >= 80) return "⭐ Excellent ! Tu maîtrises très bien cette période !";
            if (percentage >= 60) return "👍 Bien joué ! Continue comme ça !";
            if (percentage >= 40) return "🤔 Pas mal ! Relis le cours et recommence !";
            return "💪 Continue à apprendre ! L'Histoire est passionnante !";
        },
        
        finishQuiz() {
            this.showQuiz = false;
            this.showResults = true;
            window.curioBubbleInstance.show(this.getScoreMessage(), 'success');
        },
        
        retryQuiz() {
            this.showResults = false;
            this.currentQuestion = 0;
            this.score = 0;
            this.selectedAnswer = null;
            this.answerChecked = false;
            this.showQuiz = true;
        }
    }));
});
