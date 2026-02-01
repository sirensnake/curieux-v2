// Application Histoire Alpine.js ENRICHIE
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
        
        // QUIZ ENRICHI - 5 à 8 questions par période
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
                    question: "Qui a construit les pyramides ?",
                    options: ["Les Grecs", "Les Romains", "Les Égyptiens", "Les Gaulois"],
                    correct: 2
                },
                {
                    question: "Quel peuple a inventé la démocratie ?",
                    options: ["Les Romains", "Les Grecs", "Les Égyptiens", "Les Gaulois"],
                    correct: 1
                },
                {
                    question: "Comment s'appelait le dernier pharaon d'Égypte ?",
                    options: ["Néfertiti", "Cléopâtre", "Ramsès", "Toutankhamon"],
                    correct: 1
                },
                {
                    question: "Quelle langue parlait-on dans l'Empire romain ?",
                    options: ["Le grec", "Le latin", "Le gaulois", "L'égyptien"],
                    correct: 1
                },
                {
                    question: "Qui était Jules César ?",
                    options: ["Un pharaon", "Un général romain", "Un roi grec", "Un chef gaulois"],
                    correct: 1
                },
                {
                    question: "Quel chef gaulois a résisté aux Romains ?",
                    options: ["Astérix", "Vercingétorix", "Obélix", "Charlemagne"],
                    correct: 1
                },
                {
                    question: "Quelle est la seule Merveille du monde antique encore debout ?",
                    options: ["Colosse de Rhodes", "Pyramide de Khéops", "Phare d'Alexandrie", "Temple d'Artémis"],
                    correct: 1
                },
                {
                    question: "Où ont été inventés les Jeux Olympiques ?",
                    options: ["Rome", "Athènes", "Alexandrie", "Olympie"],
                    correct: 3
                }
            ],
            moyenage: [
                {
                    question: "Qui était Charlemagne ?",
                    options: ["Un chevalier", "Un empereur", "Un moine", "Un paysan"],
                    correct: 1
                },
                {
                    question: "Quel monument a été construit au Moyen Âge ?",
                    options: ["Tour Eiffel", "Pyramide de Khéops", "Notre-Dame de Paris", "Arc de Triomphe"],
                    correct: 2
                },
                {
                    question: "Combien de groupes sociaux formaient la société médiévale ?",
                    options: ["2", "3", "4", "5"],
                    correct: 1
                },
                {
                    question: "Qu'est-ce qu'une croisade ?",
                    options: ["Un tournoi", "Une expédition militaire", "Une fête", "Un château"],
                    correct: 1
                },
                {
                    question: "Quelle jeune fille a libéré Orléans ?",
                    options: ["Aliénor d'Aquitaine", "Jeanne d'Arc", "Blanche de Castille", "Marie-Antoinette"],
                    correct: 1
                },
                {
                    question: "Comment s'appelait la maison fortifiée d'un seigneur ?",
                    options: ["Palais", "Château fort", "Cathédrale", "Monastère"],
                    correct: 1
                }
            ],
            tempsmodernes: [
                {
                    question: "Qui a découvert l'Amérique en 1492 ?",
                    options: ["Magellan", "Christophe Colomb", "Léonard de Vinci", "Marco Polo"],
                    correct: 1
                },
                {
                    question: "Qu'a inventé Gutenberg ?",
                    options: ["L'avion", "L'imprimerie", "Le téléphone", "La voiture"],
                    correct: 1
                },
                {
                    question: "Qui a peint La Joconde ?",
                    options: ["Michel-Ange", "Raphaël", "Léonard de Vinci", "Botticelli"],
                    correct: 2
                },
                {
                    question: "Qui a réalisé le premier tour du monde en bateau ?",
                    options: ["Christophe Colomb", "Vasco de Gama", "Magellan", "Jacques Cartier"],
                    correct: 2
                },
                {
                    question: "Quel roi de France a fait construire les châteaux de la Loire ?",
                    options: ["Louis XIV", "François 1er", "Henri IV", "Charles VII"],
                    correct: 1
                },
                {
                    question: "Qu'est-ce que la Renaissance ?",
                    options: ["Une guerre", "Un renouveau artistique", "Une découverte", "Un château"],
                    correct: 1
                },
                {
                    question: "Dans quel pays est née la Renaissance ?",
                    options: ["France", "Espagne", "Italie", "Allemagne"],
                    correct: 2
                }
            ],
            epoquecontemporaine: [
                {
                    question: "En quelle année a eu lieu la Révolution française ?",
                    options: ["1789", "1492", "1914", "1945"],
                    correct: 0
                },
                {
                    question: "Qui était Napoléon Bonaparte ?",
                    options: ["Un roi", "Un empereur", "Un président", "Un chevalier"],
                    correct: 1
                },
                {
                    question: "Quelle devise vient de la Révolution française ?",
                    options: ["Vive le roi", "Liberté, Égalité, Fraternité", "Honneur et Patrie", "Un pour tous"],
                    correct: 1
                },
                {
                    question: "Quand a eu lieu la Première Guerre Mondiale ?",
                    options: ["1789-1799", "1914-1918", "1939-1945", "1870-1871"],
                    correct: 1
                },
                {
                    question: "Pourquoi a-t-on construit la Tour Eiffel ?",
                    options: ["Pour la guerre", "Pour l'Exposition Universelle", "Pour le roi", "Pour Napoléon"],
                    correct: 1
                },
                {
                    question: "Qu'est-ce que la Révolution Industrielle ?",
                    options: ["Une guerre", "L'arrivée des machines", "Une découverte", "Un château"],
                    correct: 1
                },
                {
                    question: "Combien de temps a duré la construction de la Tour Eiffel ?",
                    options: ["1 an", "2 ans", "5 ans", "10 ans"],
                    correct: 1
                },
                {
                    question: "Quel était le métier de Napoléon avant d'être empereur ?",
                    options: ["Roi", "Général", "Prêtre", "Artiste"],
                    correct: 1
                }
            ]
        },
        
        // Données pour les cartes historiques
        mapData: {
            prehistoire: {
                emoji: "🌍",
                title: "Migrations Humaines Préhistoriques",
                description: "Les premiers humains sont apparus en Afrique il y a 3 millions d'années, puis ont migré vers l'Europe et l'Asie.",
                legend: [
                    { label: "Berceau de l'humanité (Afrique)", color: "#ff9800" },
                    { label: "Migrations principales", color: "#4caf50" },
                    { label: "Sites préhistoriques", color: "#2196f3" }
                ]
            },
            antiquite: {
                emoji: "🏛️",
                title: "Les Grands Empires de l'Antiquité",
                description: "L'Égypte, la Grèce et Rome dominaient le monde méditerranéen pendant l'Antiquité.",
                legend: [
                    { label: "Empire Égyptien", color: "#ffd54f" },
                    { label: "Grèce Antique", color: "#42a5f5" },
                    { label: "Empire Romain (max)", color: "#ef5350" },
                    { label: "Gaule", color: "#66bb6a" }
                ]
            },
            moyenage: {
                emoji: "🏰",
                title: "L'Europe Médiévale",
                description: "Au Moyen Âge, l'Europe était divisée en nombreux royaumes et seigneuries.",
                legend: [
                    { label: "Empire de Charlemagne", color: "#7e57c2" },
                    { label: "Royaume de France", color: "#42a5f5" },
                    { label: "Saint Empire", color: "#ffa726" },
                    { label: "Terres musulmanes", color: "#26a69a" }
                ]
            },
            tempsmodernes: {
                emoji: "🌎",
                title: "Les Grandes Découvertes",
                description: "Christophe Colomb découvre l'Amérique en 1492, Magellan fait le tour du monde (1519-1522).",
                legend: [
                    { label: "Route de Colomb (1492)", color: "#ef5350" },
                    { label: "Tour du monde Magellan", color: "#42a5f5" },
                    { label: "Empires coloniaux", color: "#66bb6a" },
                    { label: "Nouvelles terres", color: "#ffa726" }
                ]
            },
            epoquecontemporaine: {
                emoji: "🗺️",
                title: "L'Europe Napoléonienne (1812)",
                description: "À son apogée, l'Empire de Napoléon contrôlait une grande partie de l'Europe.",
                legend: [
                    { label: "Empire Français", color: "#1976d2" },
                    { label: "États satellites", color: "#42a5f5" },
                    { label: "Alliés de Napoléon", color: "#90caf9" },
                    { label: "Ennemis (Russie, GB)", color: "#ef5350" }
                ]
            }
        },
        
        init() {
            setTimeout(() => {
                window.curioBubbleInstance.show("🏛️ Bienvenue dans l'Histoire ! Choisis une période pour commencer ton voyage dans le temps !", 'info');
            }, 1500);
        },
        
        selectPeriod(period) {
            this.currentPeriod = period;
            this.resetQuiz();
            this.showMap = false;
            
            const messages = {
                prehistoire: "🦴 Direction la Préhistoire ! Découvre comment vivaient nos ancêtres...",
                antiquite: "🏺 Voyage en Antiquité ! Les pyramides et les gladiateurs t'attendent !",
                moyenage: "🏰 En route pour le Moyen Âge ! Chevaliers et châteaux forts !",
                tempsmodernes: "🌍 Cap sur les Temps Modernes ! Découvertes et Renaissance !",
                epoquecontemporaine: "⚙️ Époque Contemporaine ! Révolutions et monde moderne !"
            };
            
            window.curioBubbleInstance.show(messages[period], 'info');
            
            // Scroll vers le contenu
            setTimeout(() => {
                document.querySelector('.period-content').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 300);
        },
        
        getPeriodName() {
            const names = {
                prehistoire: "la Préhistoire",
                antiquite: "l'Antiquité",
                moyenage: "le Moyen Âge",
                tempsmodernes: "les Temps Modernes",
                epoquecontemporaine: "l'Époque Contemporaine"
            };
            return names[this.currentPeriod] || "cette période";
        },
        
        startQuiz() {
            this.showQuiz = true;
            this.showResults = false;
            this.currentQuestion = 0;
            this.score = 0;
            this.selectedAnswer = null;
            this.answerChecked = false;
            window.curioBubbleInstance.show("❓ C'est parti pour le quiz de " + this.getPeriodName() + " !", 'info');
        },
        
        getPeriodName() {
            const names = {
                prehistoire: "la Préhistoire",
                antiquite: "l'Antiquité",
                moyenage: "le Moyen Âge",
                tempsmodernes: "les Temps Modernes",
                epoquecontemporaine: "l'Époque Contemporaine"
            };
            return names[this.currentPeriod] || '';
        },
        
        // QUIZ
        getCurrentQuiz() {
            return this.quizData[this.currentPeriod] || [];
        },
        
        getCurrentQuestionData() {
            return this.getCurrentQuiz()[this.currentQuestion] || { question: '', options: [], correct: 0 };
        },
        
        getCurrentQuestion() {
            return this.quizData[this.currentPeriod][this.currentQuestion];
        },
        
        getTotalQuestions() {
            return this.quizData[this.currentPeriod].length;
        },
        
        getQuizProgress() {
            return (this.currentQuestion / this.getTotalQuestions()) * 100;
        },
        
        selectAnswer(index) {
            if (!this.answerChecked) {
                this.selectedAnswer = index;
            }
        },
        
        checkAnswer() {
            if (this.answerChecked || this.selectedAnswer === null) return;
            
            this.answerChecked = true;
            const question = this.getCurrentQuestionData();
            
            if (this.selectedAnswer === question.correct) {
                this.score++;
                window.curioBubbleInstance.show("✨ Bravo ! C'est la bonne réponse !", 'success');
            } else {
                window.curioBubbleInstance.show("💪 Pas tout à fait... La bonne réponse était : " + question.options[question.correct], 'default');
            }
        },
        
        nextQuestion() {
            this.currentQuestion++;
            this.selectedAnswer = null;
            this.answerChecked = false;
        },
        
        getOptionClass(index) {
            if (!this.answerChecked) return '';
            const question = this.getCurrentQuestion();
            if (index === question.correct) return 'correct';
            if (index === this.selectedAnswer && index !== question.correct) return 'incorrect';
            return '';
        },
        
        resetQuiz() {
            this.showResults = false;
            this.showQuiz = false;
            this.score = 0;
            this.currentQuestion = 0;
            this.selectedAnswer = null;
            this.answerChecked = false;
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
