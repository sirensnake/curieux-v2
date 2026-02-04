#!/usr/bin/env python3
"""
Script pour répliquer auto-avance + cooldown sur English, Maths, Sciences
"""

import re

def apply_quiz_corrections(filepath, section_name):
    """Applique les corrections quiz (auto-avance + cooldown) à une section"""
    
    print(f"📝 Traitement de {filepath} (section: {section_name})...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # 1. SUPPRIMER LE BOUTON "SUIVANT"
    print("  ✅ Suppression bouton 'Suivant'...")
    content = re.sub(
        r'<button @click="nextQuestion\(\)" class="next-btn">Suivant →</button>',
        '<!-- Bouton "Suivant" supprimé : auto-avance après 2s -->',
        content
    )
    
    # 2. AJOUTER AUTO-AVANCE DANS checkAnswer
    print("  ✅ Ajout auto-avance (2s timer)...")
    
    # Pattern pour trouver la fin de checkAnswer (avant la virgule de fermeture)
    check_answer_pattern = r'(checkAnswer\(selectedOption\) \{[^}]+\}),(\s+nextQuestion)'
    
    # Remplacement avec auto-avance
    replacement = r'\1\n\n                        // ✅ AUTO-AVANCE : Timer 2 secondes puis question suivante\n                        setTimeout(() => {\n                            this.nextQuestion();\n                        }, 2000);\n                    },\2'
    
    content = re.sub(check_answer_pattern, replacement, content, flags=re.DOTALL)
    
    # 3. AJOUTER FONCTIONS COOLDOWN AVANT startQuiz
    print(f"  ✅ Ajout fonctions cooldown (24h) pour {section_name}...")
    
    cooldown_functions = f'''
                    // ✅ COOLDOWN : Vérifier si quiz peut être démarré (24h)
                    canStartQuiz(theme) {{
                        const cooldownKey = `quiz_cooldown_{section_name}_${{theme}}`;
                        const cooldownData = JSON.parse(localStorage.getItem(cooldownKey) || '{{}}');
                        
                        if (!cooldownData.lastCompleted) return true;
                        
                        const now = Date.now();
                        const timeSinceCompletion = now - cooldownData.lastCompleted;
                        const cooldownDuration = 24 * 60 * 60 * 1000; // 24 heures
                        
                        return timeSinceCompletion >= cooldownDuration;
                    }},

                    // Obtenir temps restant avant déblocage
                    getCooldownTimeRemaining(theme) {{
                        const cooldownKey = `quiz_cooldown_{section_name}_${{theme}}`;
                        const cooldownData = JSON.parse(localStorage.getItem(cooldownKey) || '{{}}');
                        
                        if (!cooldownData.lastCompleted) return null;
                        
                        const now = Date.now();
                        const timeSinceCompletion = now - cooldownData.lastCompleted;
                        const cooldownDuration = 24 * 60 * 60 * 1000;
                        const remaining = cooldownDuration - timeSinceCompletion;
                        
                        if (remaining <= 0) return null;
                        
                        const hours = Math.floor(remaining / (60 * 60 * 1000));
                        const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
                        
                        return {{ hours, minutes }};
                    }},

                    // Enregistrer cooldown après complétion
                    recordQuizCompletion(theme) {{
                        const cooldownKey = `quiz_cooldown_{section_name}_${{theme}}`;
                        const cooldownData = {{
                            lastCompleted: Date.now(),
                            count: (JSON.parse(localStorage.getItem(cooldownKey) || '{{}}').count || 0) + 1
                        }};
                        localStorage.setItem(cooldownKey, JSON.stringify(cooldownData));
                        console.log(`🔒 Cooldown activé pour ${{theme}} jusqu'à`, new Date(cooldownData.lastCompleted + 24*60*60*1000).toLocaleString('fr-FR'));
                    }},
'''
    
    # Insérer avant startQuiz
    content = re.sub(
        r'(\s+)(startQuiz\(\) \{)',
        cooldown_functions + r'\1\2',
        content,
        count=1
    )
    
    # 4. MODIFIER startQuiz POUR VÉRIFIER COOLDOWN
    print("  ✅ Modification startQuiz (vérification cooldown)...")
    
    startQuiz_pattern = r'(startQuiz\(\) \{)\s+(this\.showQuiz = true;)'
    startQuiz_replacement = r'''\1
                        // ✅ VÉRIFIER COOLDOWN
                        if (!this.canStartQuiz(this.currentTheme)) {
                            const remaining = this.getCooldownTimeRemaining(this.currentTheme);
                            const message = `⏰ Quiz déjà complété aujourd'hui !\\n\\nReviens dans ${remaining.hours}h ${remaining.minutes}min pour le refaire.`;
                            
                            if (window.curioBubbleInstance) {
                                window.curioBubbleInstance.show(message, 'info');
                            } else {
                                alert(message);
                            }
                            return; // BLOQUER le démarrage
                        }

                        \2'''
    
    content = re.sub(startQuiz_pattern, startQuiz_replacement, content)
    
    # 5. MODIFIER finishQuiz POUR ENREGISTRER COOLDOWN
    print("  ✅ Modification finishQuiz (enregistrement cooldown)...")
    
    # Trouver finishQuiz et ajouter recordQuizCompletion après les stats
    finishQuiz_pattern = r'(localStorage\.setItem\(\'lemondedescurieux_quiz_stats\', JSON\.stringify\(stats\)\);[^\}]+\}[^\}]+\})'
    finishQuiz_replacement = r'''\1

                        // ✅ ENREGISTRER COOLDOWN (24h)
                        this.recordQuizCompletion(this.currentTheme);'''
    
    content = re.sub(finishQuiz_pattern, finishQuiz_replacement, content, flags=re.DOTALL)
    
    # 6. MODIFIER retryQuiz POUR VÉRIFIER COOLDOWN
    print("  ✅ Modification retryQuiz (bloquer bypass)...")
    
    retryQuiz_pattern = r'(retryQuiz\(\) \{)\s+(this\.quizFinished = false;)'
    retryQuiz_replacement = r'''\1
                        // ✅ VÉRIFIER COOLDOWN même pour retry
                        if (!this.canStartQuiz(this.currentTheme)) {
                            const remaining = this.getCooldownTimeRemaining(this.currentTheme);
                            const message = `⏰ Quiz déjà complété aujourd'hui !\\n\\nReviens dans ${remaining.hours}h ${remaining.minutes}min pour le refaire.`;
                            
                            if (window.curioBubbleInstance) {
                                window.curioBubbleInstance.show(message, 'info');
                            } else {
                                alert(message);
                            }
                            // Fermer le quiz au lieu de retry
                            this.backToTheme();
                            return;
                        }

                        \2'''
    
    content = re.sub(retryQuiz_pattern, retryQuiz_replacement, content)
    
    # Vérifier si des modifications ont été faites
    if content == original_content:
        print(f"  ⚠️  AUCUNE MODIFICATION - Le fichier semble déjà corrigé ou pattern non trouvé")
        return False
    
    # Sauvegarder
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"  ✅ TERMINÉ : {filepath}")
    return True


# MAIN
if __name__ == '__main__':
    import sys
    
    base_path = '/media/siren_snake/T7/01_Projets_Dev/lemondedescurieux/_legacy_html/'
    
    sections = [
        ('english_duolingo_section.html', 'anglais'),
        ('maths_duolingo_section.html', 'maths'),
        ('sciences_duolingo_section.html', 'sciences')
    ]
    
    print("🚀 DÉBUT DE LA RÉPLICATION AUTO-AVANCE + COOLDOWN\n")
    
    success_count = 0
    for filename, section_name in sections:
        filepath = base_path + filename
        try:
            if apply_quiz_corrections(filepath, section_name):
                success_count += 1
            print()
        except Exception as e:
            print(f"  ❌ ERREUR : {e}\n")
    
    print(f"✅ TERMINÉ : {success_count}/{len(sections)} fichiers modifiés avec succès")
