/**
 * FRANÇAIS - QUIZ DES 7 NOUVEAUX THÈMES (4-10)
 * 10 questions par thème = 70 questions total
 * Niveau CM1/CM2 mixte
 * 
 * À intégrer dans francais_duolingo_section.html
 * Section: quizQuestions: { ... }
 */

orthographe: [
    { 
        question: "Le son [k] dans : ...ahier", 
        options: ["c", "qu", "k", "ch"], 
        correct: "c", 
        explanation: "Devant 'a', on écrit 'c' pour le son [k] → cahier" 
    },
    { 
        question: "Le son [s] dans : poi...on", 
        options: ["s", "ss", "c", "ç"], 
        correct: "ss", 
        explanation: "Entre deux voyelles, on double le 's' → poisson" 
    },
    { 
        question: "Le son [s] dans : gar...on", 
        options: ["s", "ss", "c", "ç"], 
        correct: "ç", 
        explanation: "Devant 'o', on utilise la cédille → garçon" 
    },
    { 
        question: "Le son [g] dans : ...itare", 
        options: ["g", "gu", "gue"], 
        correct: "gu", 
        explanation: "Devant 'i', on écrit 'gu' pour le son [g] → guitare" 
    },
    { 
        question: "Le son [ʒ] dans : ...ardin", 
        options: ["j", "g", "ge"], 
        correct: "j", 
        explanation: "Devant 'a', on écrit 'j' pour le son [ʒ] → jardin" 
    },
    { 
        question: "Lettre muette dans 'gran...' :", 
        options: ["t", "d", "p", "s"], 
        correct: "d", 
        explanation: "Le féminin révèle la lettre : grand → grande" 
    },
    { 
        question: "Lettre muette dans 'cha...' :", 
        options: ["t", "d", "p", "s"], 
        correct: "t", 
        explanation: "Le féminin révèle la lettre : chat → chatte" 
    },
    { 
        question: "Accent correct : 'f...te' (célébration)", 
        options: ["ê", "è", "é", "e"], 
        correct: "ê", 
        explanation: "Accent circonflexe → fête" 
    },
    { 
        question: "Accent correct : '...cole' (établissement)", 
        options: ["é", "è", "ê", "e"], 
        correct: "é", 
        explanation: "Accent aigu → école" 
    },
    { 
        question: "Double consonne : 'vit...e'", 
        options: ["esse", "èse", "ése", "ese"], 
        correct: "esse", 
        explanation: "Les mots en -esse doublent le 's' → vitesse" 
    }
],

ponctuation: [
    { 
        question: "Quel signe termine une phrase déclarative ?", 
        options: [".", "?", "!", "..."], 
        correct: ".", 
        explanation: "Le point (.) termine une phrase déclarative : 'Le chat dort.'" 
    },
    { 
        question: "Quel signe termine une question ?", 
        options: [".", "?", "!", ","], 
        correct: "?", 
        explanation: "Le point d'interrogation (?) : 'Comment vas-tu ?'" 
    },
    { 
        question: "Quel signe exprime une émotion forte ?", 
        options: [".", "?", "!", ","], 
        correct: "!", 
        explanation: "Le point d'exclamation (!) : 'Quelle belle journée !'" 
    },
    { 
        question: "Complète : 'J'aime les pommes... les poires et les bananes.'", 
        options: [",", ".", ";", ":"], 
        correct: ",", 
        explanation: "La virgule sépare les éléments d'une énumération" 
    },
    { 
        question: "Complète : 'J'ai trois animaux... un chat, un chien et un poisson.'", 
        options: [":", ",", ".", ";"], 
        correct: ":", 
        explanation: "Les deux-points annoncent une énumération" 
    },
    { 
        question: "Complète : 'Je ne sais pas quoi dire...'", 
        options: ["...", ".", "!", "?"], 
        correct: "...", 
        explanation: "Les points de suspension indiquent que la phrase n'est pas terminée" 
    },
    { 
        question: "Quel signe encadre les paroles de quelqu'un ?", 
        options: ["« »", "( )", "[ ]", "{ }"], 
        correct: "« »", 
        explanation: "Les guillemets : Marie dit : « Bonjour ! »" 
    },
    { 
        question: "Dans un dialogue, chaque réplique commence par :", 
        options: ["–", "*", "+", "/"], 
        correct: "–", 
        explanation: "Le tiret marque chaque nouvelle réplique d'un dialogue" 
    },
    { 
        question: "Quel signe ajoute une information supplémentaire ?", 
        options: ["( )", "[ ]", "« »", "{ }"], 
        correct: "( )", 
        explanation: "Les parenthèses : Paul (mon ami) arrive demain." 
    },
    { 
        question: "Après un point, on met toujours :", 
        options: ["Une MAJUSCULE", "Une minuscule", "Un espace", "Une virgule"], 
        correct: "Une MAJUSCULE", 
        explanation: "Après un point, la phrase suivante commence par une majuscule" 
    }
],

typesphrases: [
    { 
        question: "'Le chat dort.' est une phrase :", 
        options: ["Déclarative", "Interrogative", "Exclamative", "Impérative"], 
        correct: "Déclarative", 
        explanation: "Elle donne une information et se termine par un point (.)" 
    },
    { 
        question: "'Viens-tu avec moi ?' est une phrase :", 
        options: ["Interrogative", "Déclarative", "Exclamative", "Impérative"], 
        correct: "Interrogative", 
        explanation: "Elle pose une question et se termine par un point d'interrogation (?)" 
    },
    { 
        question: "'Quelle belle journée !' est une phrase :", 
        options: ["Exclamative", "Déclarative", "Interrogative", "Impérative"], 
        correct: "Exclamative", 
        explanation: "Elle exprime une émotion et se termine par un point d'exclamation (!)" 
    },
    { 
        question: "'Range ta chambre.' est une phrase :", 
        options: ["Impérative", "Déclarative", "Interrogative", "Exclamative"], 
        correct: "Impérative", 
        explanation: "Elle donne un ordre avec un verbe à l'impératif" 
    },
    { 
        question: "Quel mot introduit souvent une phrase exclamative ?", 
        options: ["Comme", "Quand", "Pourquoi", "Comment"], 
        correct: "Comme", 
        explanation: "'Comme c'est beau !' est une phrase exclamative" 
    },
    { 
        question: "Une phrase impérative n'a pas de :", 
        options: ["Sujet visible", "Verbe", "Ponctuation", "Sens"], 
        correct: "Sujet visible", 
        explanation: "À l'impératif, le sujet n'est pas exprimé : 'Mange !' (pas de 'tu')" 
    },
    { 
        question: "Quelle phrase est interrogative ?", 
        options: ["Est-ce que tu viens ?", "Tu viens.", "Viens !", "Comme tu viens vite !"], 
        correct: "Est-ce que tu viens ?", 
        explanation: "Elle pose une question avec 'est-ce que' et se termine par (?)" 
    },
    { 
        question: "Transforme en phrase exclamative : 'C'est beau.'", 
        options: ["Comme c'est beau !", "C'est beau ?", "Sois beau.", "C'est beau."], 
        correct: "Comme c'est beau !", 
        explanation: "On ajoute 'comme' et un point d'exclamation (!)" 
    },
    { 
        question: "'Ne cours pas !' est une phrase :", 
        options: ["Impérative", "Déclarative", "Interrogative", "Exclamative"], 
        correct: "Impérative", 
        explanation: "C'est une interdiction (ordre négatif) avec impératif" 
    },
    { 
        question: "Quel mot introduit une question avec inversion ?", 
        options: ["Où", "Donc", "Car", "Mais"], 
        correct: "Où", 
        explanation: "'Où vas-tu ?' est une question avec inversion sujet-verbe" 
    }
],

classesmots: [
    { 
        question: "Dans 'Le chat dort', 'chat' est un :", 
        options: ["Nom", "Verbe", "Adjectif", "Adverbe"], 
        correct: "Nom", 
        explanation: "'Chat' désigne un animal, c'est un nom commun" 
    },
    { 
        question: "Dans 'Le chat dort', 'dort' est un :", 
        options: ["Verbe", "Nom", "Adjectif", "Déterminant"], 
        correct: "Verbe", 
        explanation: "'Dort' indique une action, c'est un verbe (dormir)" 
    },
    { 
        question: "Dans 'Le chat noir', 'le' est un :", 
        options: ["Déterminant", "Nom", "Verbe", "Adjectif"], 
        correct: "Déterminant", 
        explanation: "'Le' est un article défini (déterminant)" 
    },
    { 
        question: "Dans 'Le chat noir', 'noir' est un :", 
        options: ["Adjectif", "Nom", "Verbe", "Déterminant"], 
        correct: "Adjectif", 
        explanation: "'Noir' qualifie le nom 'chat', c'est un adjectif qualificatif" 
    },
    { 
        question: "'Paris' est un nom :", 
        options: ["Propre", "Commun", "Verbe", "Adjectif"], 
        correct: "Propre", 
        explanation: "Les noms propres désignent un lieu/personne unique avec majuscule" 
    },
    { 
        question: "Dans 'Il court vite', 'vite' est un :", 
        options: ["Adverbe", "Adjectif", "Nom", "Verbe"], 
        correct: "Adverbe", 
        explanation: "'Vite' modifie le verbe 'court', c'est un adverbe de manière" 
    },
    { 
        question: "Dans 'Paul et Marie', 'et' est une :", 
        options: ["Conjonction", "Préposition", "Adverbe", "Interjection"], 
        correct: "Conjonction", 
        explanation: "'Et' relie deux noms, c'est une conjonction de coordination" 
    },
    { 
        question: "Dans 'Je vais à l'école', 'à' est une :", 
        options: ["Préposition", "Conjonction", "Adverbe", "Verbe"], 
        correct: "Préposition", 
        explanation: "'À' relie le verbe au complément, c'est une préposition" 
    },
    { 
        question: "Dans 'Paul arrive. Il est content.', 'Il' remplace :", 
        options: ["Paul", "arrive", "content", "est"], 
        correct: "Paul", 
        explanation: "'Il' est un pronom personnel qui remplace le nom 'Paul'" 
    },
    { 
        question: "Quelle classe de mots est INVARIABLE ?", 
        options: ["Adverbe", "Nom", "Adjectif", "Déterminant"], 
        correct: "Adverbe", 
        explanation: "L'adverbe ne change jamais (pas d'accord en genre/nombre)" 
    }
],

lecture: [
    { 
        question: "Avant de lire, il faut observer :", 
        options: ["Le titre et les images", "Seulement le texte", "La dernière page", "L'auteur"], 
        correct: "Le titre et les images", 
        explanation: "L'observation globale aide à anticiper le contenu du texte" 
    },
    { 
        question: "La question 'Qui ?' permet de trouver :", 
        options: ["Les personnages", "Le lieu", "Le moment", "La raison"], 
        correct: "Les personnages", 
        explanation: "'Qui ?' identifie les personnages de l'histoire" 
    },
    { 
        question: "La question 'Où ?' permet de trouver :", 
        options: ["Le lieu", "Les personnages", "Le moment", "La raison"], 
        correct: "Le lieu", 
        explanation: "'Où ?' identifie le lieu où se déroule l'histoire" 
    },
    { 
        question: "La question 'Quand ?' permet de trouver :", 
        options: ["Le moment", "Le lieu", "Les personnages", "L'action"], 
        correct: "Le moment", 
        explanation: "'Quand ?' identifie le moment où se passe l'histoire" 
    },
    { 
        question: "L'idée principale d'un texte, c'est :", 
        options: ["Le message essentiel", "Le premier mot", "Le dernier mot", "Le titre"], 
        correct: "Le message essentiel", 
        explanation: "L'idée principale résume ce dont parle le texte en une phrase" 
    },
    { 
        question: "Un texte qui raconte une histoire s'appelle :", 
        options: ["Un récit", "Un documentaire", "Une recette", "Un poème"], 
        correct: "Un récit", 
        explanation: "Le récit raconte une histoire avec des personnages" 
    },
    { 
        question: "Un texte qui donne des informations s'appelle :", 
        options: ["Un documentaire", "Un récit", "Un dialogue", "Une poésie"], 
        correct: "Un documentaire", 
        explanation: "Le texte documentaire explique et informe sur un sujet" 
    },
    { 
        question: "Une recette de cuisine est un texte :", 
        options: ["Prescriptif", "Narratif", "Descriptif", "Poétique"], 
        correct: "Prescriptif", 
        explanation: "Le texte prescriptif donne des instructions (comment faire)" 
    },
    { 
        question: "Si tu ne comprends pas un mot, tu dois d'abord :", 
        options: ["Deviner avec le contexte", "Abandonner", "Sauter le texte", "Pleurer"], 
        correct: "Deviner avec le contexte", 
        explanation: "Le contexte (mots autour) aide souvent à comprendre un mot inconnu" 
    },
    { 
        question: "Pour mieux comprendre, il faut :", 
        options: ["Relire si nécessaire", "Lire très vite", "Sauter des passages", "Ne pas réfléchir"], 
        correct: "Relire si nécessaire", 
        explanation: "Relire aide à mieux comprendre un passage difficile" 
    }
],

production: [
    { 
        question: "Avant d'écrire, il faut faire :", 
        options: ["Un brouillon", "La mise au propre", "Des dessins", "Rien"], 
        correct: "Un brouillon", 
        explanation: "Le brouillon permet d'organiser ses idées avant d'écrire" 
    },
    { 
        question: "Dans un récit, l'élément déclencheur est :", 
        options: ["Un problème qui survient", "La fin", "Le début", "Le héros"], 
        correct: "Un problème qui survient", 
        explanation: "L'élément déclencheur est l'événement qui lance l'action" 
    },
    { 
        question: "Pour décrire un personnage, on parle de :", 
        options: ["Physique et caractère", "Seulement les vêtements", "Seulement l'âge", "Seulement le nom"], 
        correct: "Physique et caractère", 
        explanation: "Une bonne description inclut l'apparence ET la personnalité" 
    },
    { 
        question: "Dans un récit, on utilise l'imparfait pour :", 
        options: ["Décrire", "Actions principales", "Dialogues", "Ordres"], 
        correct: "Décrire", 
        explanation: "L'imparfait sert aux descriptions et actions secondaires" 
    },
    { 
        question: "Dans un dialogue, chaque réplique commence par :", 
        options: ["Un tiret –", "Un point .", "Une virgule ,", "Un accent é"], 
        correct: "Un tiret –", 
        explanation: "Dans un dialogue, chaque nouvelle réplique commence par un tiret" 
    },
    { 
        question: "Quel connecteur temporel vient en PREMIER ?", 
        options: ["D'abord", "Ensuite", "Puis", "Enfin"], 
        correct: "D'abord", 
        explanation: "'D'abord' introduit la première étape d'un récit" 
    },
    { 
        question: "Quel verbe de parole signifie 'dire doucement' ?", 
        options: ["Chuchoter", "Crier", "Hurler", "Répéter"], 
        correct: "Chuchoter", 
        explanation: "Chuchoter = parler très doucement, à voix basse" 
    },
    { 
        question: "Pour éviter les répétitions, on utilise :", 
        options: ["Des synonymes", "Le même mot", "Rien", "Des erreurs"], 
        correct: "Des synonymes", 
        explanation: "Les synonymes sont des mots de sens proche qui varient le vocabulaire" 
    },
    { 
        question: "Après avoir écrit, il faut toujours :", 
        options: ["Relire et corriger", "Jeter le brouillon", "Dormir", "Rien faire"], 
        correct: "Relire et corriger", 
        explanation: "La relecture permet de corriger les erreurs d'orthographe et grammaire" 
    },
    { 
        question: "Dans un récit, la situation finale est :", 
        options: ["La fin de l'histoire", "Le début", "Le problème", "Le héros"], 
        correct: "La fin de l'histoire", 
        explanation: "La situation finale conclut le récit après la résolution du problème" 
    }
],

poesie: [
    { 
        question: "Une ligne d'un poème s'appelle :", 
        options: ["Un vers", "Une strophe", "Une rime", "Un rythme"], 
        correct: "Un vers", 
        explanation: "Le vers est une ligne dans un poème" 
    },
    { 
        question: "Un groupe de vers s'appelle :", 
        options: ["Une strophe", "Un vers", "Une rime", "Un poème"], 
        correct: "Une strophe", 
        explanation: "La strophe regroupe plusieurs vers (comme un paragraphe)" 
    },
    { 
        question: "Une strophe de 4 vers s'appelle :", 
        options: ["Un quatrain", "Un distique", "Un tercet", "Un sizain"], 
        correct: "Un quatrain", 
        explanation: "Quatrain = 4 vers (comme 'quatre')" 
    },
    { 
        question: "Les rimes sont des sons identiques :", 
        options: ["À la fin des vers", "Au début des vers", "Au milieu des vers", "Partout"], 
        correct: "À la fin des vers", 
        explanation: "Les rimes sont les sons qui se répètent en fin de vers" 
    },
    { 
        question: "Un alexandrin a combien de syllabes ?", 
        options: ["12", "8", "10", "6"], 
        correct: "12", 
        explanation: "L'alexandrin est un vers de 12 syllabes" 
    },
    { 
        question: "'Il est fort comme un lion' est :", 
        options: ["Une comparaison", "Une métaphore", "Une personnification", "Une anaphore"], 
        correct: "Une comparaison", 
        explanation: "La comparaison utilise 'comme' pour comparer" 
    },
    { 
        question: "'Cet homme est un lion' est :", 
        options: ["Une métaphore", "Une comparaison", "Une personnification", "Une allitération"], 
        correct: "Une métaphore", 
        explanation: "La métaphore compare sans utiliser 'comme'" 
    },
    { 
        question: "'Le vent chuchote' est :", 
        options: ["Une personnification", "Une comparaison", "Une métaphore", "Une rime"], 
        correct: "Une personnification", 
        explanation: "La personnification donne des qualités humaines à une chose" 
    },
    { 
        question: "Répéter le même son consonne s'appelle :", 
        options: ["Une allitération", "Une assonance", "Une rime", "Un vers"], 
        correct: "Une allitération", 
        explanation: "L'allitération répète des consonnes (ex: 'serpents qui sifflent')" 
    },
    { 
        question: "Répéter le même son voyelle s'appelle :", 
        options: ["Une assonance", "Une allitération", "Une rime", "Un vers"], 
        correct: "Une assonance", 
        explanation: "L'assonance répète des voyelles" 
    }
]
