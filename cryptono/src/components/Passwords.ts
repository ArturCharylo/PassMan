export class Passwords {
    navigate: (path: string) => void;

    constructor(navigate: (path: string) => void) {
        this.navigate = navigate;
    }

    render() {
        return `
            <div class="container">
                <div class="header">
                    <div class="logo">
                        <div class="logo-icon">🔒</div>
                        <h1 class="extensionTitle">Cryptono</h1>
                    </div>
                    <p class="extensionSub">Your vault, secured</p>
                </div>

                <div style="text-align: center; color: white;">
                    <h1>You successfully logged in!</h1>
                    <button id="logout-btn" class="login-btn" style="background: rgba(255, 255, 255, 0.2); margin-top: 20px;">Logout</button>
                </div>

                <div class="footer">
                    <p class="security-note">🔐 Encrypted & Secure</p>
                </div>
            </div>
        `;
    }

    afterRender() {
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                this.navigate('/login');
            });
        }
    }
}
