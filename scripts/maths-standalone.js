// ============================================================================
// MODIFICATION À FAIRE dans maths-standalone.js
// Ligne ~1257 dans la fonction completeActivity()
// ============================================================================

function completeActivity() {
    const content = EDUCATIONAL_CONTENT[currentActivity];
    const totalQuestions = content.exercises.length;
    const percentage = Math.round((currentScore / totalQuestions) * 100);
    const isPerfect = (percentage === 100);
    
    // Calcul XP
    let xpGained = currentScore * 10;
    if (isPerfect) {
        xpGained += 50;
    }
    
    console.log(`🎉 Activité "${currentActivity}" terminée ! Score: ${currentScore}/${totalQuestions} (${percentage}%) | +${xpGained} XP`);
    
    // Son de complétion
    playSound('complete');
    
    // ========================================================================
    // ANCIEN SYSTÈME (garder pour compatibilité)
    // ========================================================================
    window.xpSystem.addXP(SECTION_NAME, xpGained);
    window.streaksSystem.recordActivity();
    
    // ========================================================================
    // NOUVEAU : MasterGameSystem v3.0
    // AJOUTER CE BLOC ICI (APRÈS ancien système, AVANT message Curio)
    // ========================================================================
    if (typeof gameSystem !== 'undefined') {
        try {
            const lessonId = `maths_${currentActivity}_${Date.now()}`;
            
            // Context pour bonus
            const mathsData = gameSystem.getSectionData('maths');
            const context = {
                perfectScore: isPerfect,
                hasActiveStreak: mathsData.streak > 0
            };
            
            // Attribution XP avec bonus automatiques
            const earnedXP = gameSystem.awardXP('maths', xpGained, context);
            
            // Enregistrer complétion leçon
            gameSystem.completeLesson('maths', lessonId, percentage);
            
            // Mettre à jour streak
            gameSystem.updateStreak('maths');
            
            // Mettre à jour affichage badges
            if (typeof updateGameSystemUI === 'function') {
                updateGameSystemUI();
            }
            
            console.log(`✅ MasterGameSystem: +${earnedXP} XP (base: ${xpGained})`);
            
        } catch (error) {
            console.error('❌ Erreur MasterGameSystem:', error);
            // Continue avec ancien système en cas d'erreur
        }
    } else {
        console.warn('⚠️ MasterGameSystem non chargé, utilisation ancien système');
    }
    // ========================================================================
    // FIN NOUVEAU CODE
    // ========================================================================
    
    // Message Curio
    showCurioMessage('complete');
    
    // --- BADGE SYSTEM : écriture quiz_stats ---
    try {
        const raw = localStorage.getItem('lemondedescurieux_quiz_stats');
        const stats = raw ? JSON.parse(raw) : { totalCompleted: 0, perfectCount: 0, bySubject: { francais: 0, anglais: 0, maths: 0, sciences: 0, histoire: 0 } };
        stats.totalCompleted = (stats.totalCompleted || 0) + 1;
        if (isPerfect) stats.perfectCount = (stats.perfectCount || 0) + 1;
        if (!stats.bySubject) stats.bySubject = {};
        stats.bySubject[SECTION_NAME] = (stats.bySubject[SECTION_NAME] || 0) + 1;
        localStorage.setItem('lemondedescurieux_quiz_stats', JSON.stringify(stats));
        console.log('📊 [' + SECTION_NAME + '] Quiz stats mis à jour:', stats);
    } catch(e) { console.warn('[' + SECTION_NAME + '] Erreur stats quiz:', e); }

    // --- BADGE SYSTEM : check + sync ---
    if (window.badgeSystem) {
        const newBadges = window.badgeSystem.checkBadges();
        if (newBadges && newBadges.length > 0) {
            console.log('🏆 [' + SECTION_NAME + '] Nouveaux badges:', newBadges.map(function(b){ return b.name; }));
            showCurioMessage('🏆 Badge débloqué : ' + newBadges[0].name + ' !');
        }
        if (window.BRIDGE) window.BRIDGE.syncBadges();
    }
    
    // ✅ ENREGISTRER COOLDOWN (24h)
    recordActivityCompletion(currentActivity);
    
    // Feedback final
    showCompletionFeedback(currentScore, totalQuestions, xpGained);
}
