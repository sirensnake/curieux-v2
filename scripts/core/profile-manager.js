class ProfileManager {
    constructor() {
        this.currentAvatar = localStorage.getItem('curio_avatar') || 'curio_1';
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.updateAvatarDisplay());
        } else {
            this.updateAvatarDisplay();
        }
    }

    setAvatar(avatarId) {
        localStorage.setItem('curio_avatar', avatarId);
        this.currentAvatar = avatarId;

        // Liaison sécurisée avec le reporting
        if (typeof CurioReporting !== 'undefined') {
            CurioReporting.logAvatarChoice(avatarId);
        }

        this.updateAvatarDisplay();
    }

    updateAvatarDisplay() {
        // Sécurité si les données d'avatars ne sont pas encore là
        if (typeof curioAvatars === 'undefined') {
            console.warn("Données d'avatars manquantes.");
            return;
        }

        const avatarData = curioAvatars.find(a => a.id === this.currentAvatar);
        const fallbackUrl = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${this.currentAvatar}`;
        const imgPath = avatarData ? avatarData.img : fallbackUrl;
        
        const elements = document.querySelectorAll('.user-avatar-img');
        
        elements.forEach(el => {
            el.src = imgPath;
            
            // Design Interactif Pixel Art
            el.style.transition = "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            el.onmouseover = () => el.style.transform = "scale(1.2) rotate(5deg)";
            el.onmouseout = () => el.style.transform = "scale(1) rotate(0deg)";

            el.onerror = () => { 
                el.src = fallbackUrl;
                el.onerror = null; 
            };
        });
    }
}

// Initialisation globale pour que window.profileManager soit accessible
window.profileManager = new ProfileManager();