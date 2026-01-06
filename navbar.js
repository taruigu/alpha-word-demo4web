class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    background-color: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
                }
                
                nav {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 1rem 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: #0c4a6e;
                    text-decoration: none;
                }
                
                .logo-icon {
                    margin-right: 0.5rem;
                    color: #0ea5e9;
                }
                
                .nav-links {
                    display: flex;
                    gap: 1.5rem;
                    align-items: center;
                }
                
                .nav-link {
                    color: #374151;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.2s;
                    font-size: 0.95rem;
                }
                
                .nav-link:hover {
                    color: #0ea5e9;
                }
                
                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    color: #374151;
                    cursor: pointer;
                }
                
                .mobile-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background-color: white;
                    padding: 1rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                
                .mobile-menu.open {
                    display: block;
                }
                
                .mobile-nav-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .mobile-nav-link {
                    color: #374151;
                    text-decoration: none;
                    padding: 0.5rem 0;
                }
                
                .cta-button {
                    background-color: #0ea5e9;
                    color: white;
                    padding: 0.5rem 1.25rem;
                    border-radius: 9999px;
                    font-weight: 500;
                    transition: background-color 0.2s;
                }
                
                .cta-button:hover {
                    background-color: #0284c7;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    
                    .mobile-menu-button {
                        display: block;
                    }
                }
            </style>
            
            <nav>
                <a href="/" class="logo">
                    <i data-feather="brain" class="logo-icon w-5 h-5"></i>
                    BrainyWords
                </a>
                <div class="nav-links">
                    <a href="#features" class="nav-link">功能</a>
                    <a href="#how-it-works" class="nav-link">工作原理</a>
                    <a href="#start-learning" class="nav-link">开始学习</a>
                    <a href="#" class="nav-link">价格</a>
                    <div class="language-switcher flex items-center ml-4">
                        <a href="index.html" class="text-sm text-gray-600 hover:text-primary-600">EN</a>
                        <span class="mx-1 text-gray-400">/</span>
                        <a href="index-cn.html" class="text-sm font-medium text-primary-600">中文</a>
                    </div>
                    <a href="#" class="cta-button">登录</a>
                </div>
<button class="mobile-menu-button" id="mobileMenuButton">
                    <i data-feather="menu" class="w-6 h-6"></i>
                </button>
            </nav>
            
            <div class="mobile-menu" id="mobileMenu">
                <div class="mobile-nav-links">
                    <a href="#features" class="mobile-nav-link">功能</a>
                    <a href="#how-it-works" class="mobile-nav-link">工作原理</a>
                    <a href="#start-learning" class="mobile-nav-link">开始学习</a>
                    <a href="#" class="mobile-nav-link">价格</a>
                    <div class="language-switcher flex justify-center my-2">
                        <a href="/index.html" class="text-sm text-gray-600 hover:text-primary-600">EN</a>
                        <span class="mx-1 text-gray-400">/</span>
                        <a href="/index-cn.html" class="text-sm font-medium text-primary-600">中文</a>
                    </div>
                    <a href="#" class="cta-button inline-block text-center">登录</a>
                </div>
</div>
        `;
        
        // Initialize mobile menu toggle
        const mobileMenuButton = this.shadowRoot.getElementById('mobileMenuButton');
        const mobileMenu = this.shadowRoot.getElementById('mobileMenu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            
            // Update icon
            const icon = mobileMenuButton.querySelector('i');
            if (mobileMenu.classList.contains('open')) {
                feather.icons['x'].toSvg().then(svg => {
                    icon.outerHTML = svg;
                });
            } else {
                feather.icons['menu'].toSvg().then(svg => {
                    icon.outerHTML = svg;
                });
            }
        });
        
        // Replace feather icons
        feather.replace();
    }
}

customElements.define('custom-navbar', CustomNavbar);