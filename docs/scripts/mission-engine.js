/**
 * MISSION ENGINE - Le Monde des Curieux
 * Gère l'affichage des missions, les indices et la progression.
 */

function launchMission(missionData) {
    // 1. Création de l'overlay (Style Minecraft / Curio)
    const overlay = document.createElement('div');
    overlay.id = 'mission-overlay';
    overlay.style = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.85); z-index: 10000;
        display: flex; justify-content: center; align-items: center;
        font-family: 'Press Start 2P', cursive;
    `;

    document.body.appendChild(overlay);

    let currentStep = 0;

    const renderStep = () => {
        const step = missionData.steps[currentStep];
        
        overlay.innerHTML = `
            <div style="background: #fff; border: 6px solid #2c3e50; padding: 30px; width: 90%; max-width: 600px; position: relative; box-shadow: 10px 10px 0 rgba(0,0,0,0.5);">
                <button id="close-mission" style="position: absolute; top: -20px; right: -20px; background: #e74c3c; color: white; border: 4px solid #000; cursor: pointer; padding: 5px 10px;">X</button>
                
                <h2 style="font-size: 12px; color: #2a9d8f; margin-bottom: 20px; line-height: 1.5;">${missionData.title}</h2>
                
                <p style="font-size: 10px; color: #333; margin-bottom: 25px; line-height: 1.6;">${step.question}</p>
                
                <div id="options-container" style="display: grid; gap: 15px;"></div>
                
                <div id="hint-box" style="display: none; margin-top: 20px; padding: 15px; background: #f1c40f; border: 3px dashed #000; font-size: 8px; line-height: 1.4; color: #000;">
                    💡 INDICE : ${step.feedback || "Relis bien la question !"}
                </div>

                <button id="get-hint" style="margin-top: 20px; background: none; border: none; color: #7f8c8d; font-family: 'Press Start 2P'; font-size: 7px; cursor: pointer; text-decoration: underline;">Besoin d'aide ?</button>
            </div>
        `;

        overlay.querySelector('#close-mission').onclick = () => overlay.remove();

        const container = overlay.querySelector('#options-container');
        step.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.style = `
                padding: 15px; background: #ecf0f1; border: 4px solid #bdc3c7;
                font-family: 'Press Start 2P'; font-size: 9px; cursor: pointer; text-align: left;
                transition: all 0.2s;
            `;
            btn.textContent = option;

            btn.onclick = () => {
                if (index === step.correct) {
                    handleCorrect();
                } else {
                    handleWrong(btn);
                }
            };
            container.appendChild(btn);
        });

        overlay.querySelector('#get-hint').onclick = () => {
            overlay.querySelector('#hint-box').style.display = 'block';
        };
    };

    const handleCorrect = () => {
        currentStep++;
        if (currentStep < missionData.steps.length) {
            renderStep();
        } else {
            finishMission();
        }
    };

    const handleWrong = (btn) => {
        btn.style.background = "#ffcccc";
        btn.style.border = "4px solid #e74c3c";
        overlay.querySelector('#hint-box').style.display = 'block';
        btn.parentElement.style.transform = "translateX(5px)";
        setTimeout(() => btn.parentElement.style.transform = "translateX(0)", 100);
    };

    const finishMission = () => {
        let done = JSON.parse(localStorage.getItem('curio_missions') || "[]");
        if (!done.includes(missionData.id)) {
            done.push(missionData.id);
            localStorage.setItem('curio_missions', JSON.stringify(done));
            
            let xp = parseInt(localStorage.getItem('curio_xp') || 0) + 50;
            localStorage.setItem('curio_xp', xp);
        }

        const btn = document.getElementById(`btn-mission-${missionData.id}`);
        if (btn) {
            btn.innerText = "Fait !";
            btn.style.background = "#95a5a6";
            btn.style.cursor = "default";
            btn.disabled = true;
        }

        if(document.getElementById('xp-display')) {
            document.getElementById('xp-display').innerText = (localStorage.getItem('curio_xp') || 0) + " XP";
        }

        overlay.innerHTML = `
            <div style="background: #fff; border: 6px solid #27ae60; padding: 40px; text-align: center; font-family: 'Press Start 2P';">
                <h2 style="color: #27ae60; font-size: 14px;">MISSION RÉUSSIE !</h2>
                <p style="font-size: 10px; margin: 20px 0;">+ 50 XP</p>
                <button onclick="location.reload()" style="padding: 15px; background: #27ae60; color: white; border: 4px solid #000; font-family: 'Press Start 2P'; cursor: pointer;">RETOUR</button>
            </div>
        `;
        
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    };

    renderStep();
}