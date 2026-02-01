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
            
            // Application Histoire
            Alpine.data('histoireApp', () => ({
                currentPeriod: 'prehistoire',
                quizCompleted: false,
                quizScore: 0,
                currentQuestionIndex: 0,
                selectedAnswer: null,
                answerChecked: false,
                
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
                        }
                    ]
                },
                
                init() {
                    setTimeout(() => {
                        window.curioBubbleInstance.show("🏛️ Bienvenue dans l'Histoire ! Choisis une période pour commencer ton voyage dans le temps !", 'info');
                    }, 1500);
                },
                
                selectPeriod(period) {
                    this.currentPeriod = period;
                    this.resetQuiz();
                    
                    const messages = {
                        prehistoire: "🦴 Direction la Préhistoire ! Découvre comment vivaient nos ancêtres...",
                        antiquite: "🏺 Voyage en Antiquité ! Les pyramides et les gladiateurs t'attendent !",
                        moyenage: "🏰 En route pour le Moyen Âge ! Chevaliers et châteaux forts !",
                        tempsmodernes: "🌍 Cap sur les Temps Modernes ! Découvertes et Renaissance !",
                        epoquecontemporaine: "⚙️ Époque Contemporaine ! Révolutions et monde moderne !"
                    };
                    
                    window.curioBubbleInstance.show(messages[period], 'info');
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
                
                getCurrentQuestion() {
                    return this.quizData[this.currentPeriod][this.currentQuestionIndex];
                },
                
                getTotalQuestions() {
                    return this.quizData[this.currentPeriod].length;
                },
                
                checkAnswer(index) {
                    if (this.answerChecked) return;
                    
                    this.selectedAnswer = index;
                    this.answerChecked = true;
                    
                    const question = this.getCurrentQuestion();
                    if (index === question.correct) {
                        this.quizScore++;
                        window.curioBubbleInstance.show("✨ Bravo ! C'est la bonne réponse !", 'success');
                    } else {
                        window.curioBubbleInstance.show("💪 Pas tout à fait... Réessaie !", 'default');
                    }
                    
                    setTimeout(() => {
                        this.nextQuestion();
                    }, 2000);
                },
                
                nextQuestion() {
                    if (this.currentQuestionIndex < this.getTotalQuestions() - 1) {
                        this.currentQuestionIndex++;
                        this.selectedAnswer = null;
                        this.answerChecked = false;
                    } else {
                        this.quizCompleted = true;
                        window.curioBubbleInstance.show(`🎉 Quiz terminé ! Tu as ${this.quizScore} bonnes réponses sur ${this.getTotalQuestions()} !`, 'success');
                    }
                },
                
                getOptionClass(index) {
                    if (!this.answerChecked) return '';
                    const question = this.getCurrentQuestion();
                    if (index === question.correct) return 'correct';
                    if (index === this.selectedAnswer && index !== question.correct) return 'incorrect';
                    return '';
                },
                
                resetQuiz() {
                    this.quizCompleted = false;
                    this.quizScore = 0;
                    this.currentQuestionIndex = 0;
                    this.selectedAnswer = null;
                    this.answerChecked = false;
                },
                
                showTimeline() {
                    window.curioBubbleInstance.show("📊 La frise chronologique interactive arrive bientôt !", 'info');
                },
                
                exploreMaps() {
                    window.curioBubbleInstance.show("🗺️ Les cartes historiques seront bientôt disponibles !", 'info');
                }
            }));
        });
