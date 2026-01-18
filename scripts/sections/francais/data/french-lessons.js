const frenchLessons = {
  lessons: [
    {
      id: "lesson-01",
      title: "📚 Classes de Mots",
      titleShort: "Classes de Mots",
      theme: "grammaire",
      xpReward: 50,
      duration: 25,
      modes: {
        interactive: {
          available: true,
          exercises: [
            { type: "qcm", instruction: "Quel est le nom ?", sentence: "Le chat dort.", choices: ["chat", "dort", "le"], answer: "chat" },
            { type: "fill", instruction: "Complète avec un verbe", sentence: "Les oiseaux ___.", acceptedAnswers: ["volent", "chantent", "planent"], answer: "volent" },
            { type: "qcm", instruction: "Quel est l'adjectif ?", sentence: "Un grand château.", choices: ["un", "grand", "château"], answer: "grand" }
          ]
        }
      }
    }
  ]
};
