class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #0c4a6e;
                    color: white;
                    padding: 3rem 1.5rem;
                }
                
                .footer-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }
                
                .footer-logo {
                    display: flex;
                    align-items: center;
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: white;
                    text-decoration: none;
                    margin-bottom: 1rem;
                }
                
                .footer-logo-icon {
                    margin-right: 0.5rem;
                    color: #7dd3fc;
                }
                
                .footer-description {
                    color: #bae6fd;
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                }
                
                .social-link {
                    color: white;
                    transition: color 0.2s;
                }
                
                .social-link:hover {
                    color: #7dd3fc;
                }
                
                .footer-heading {
                    font-weight: 600;
                    margin-bottom: 1.25rem;
                    font-size: 1.1rem;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .footer-link {
                    color: #bae6fd;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                
                .footer-link:hover {
                    color: white;
                }
                
                .copyright {
                    margin-top: 3rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    text-align: center;
                    color: #bae6fd;
                    font-size: 0.875rem;
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <div class="footer-container">
                <div>
                    <a href="/" class="footer-logo">
                        <i data-feather="brain" class="footer-logo-icon w-5 h-5"></i>
                        BrainyWords
                    </a>
                    <p class="footer-description">
                        结合神经科学和人工智能技术，帮助您更快学习词汇并形成长期记忆。
                    </p>
                    <div class="language-switcher flex mt-4">
                        <a href="/index.html" class="text-sm text-gray-400 hover:text-white mr-2">English</a>
                        <span class="text-gray-400">|</span>
                        <a href="/index-cn.html" class="text-sm text-white font-medium ml-2">中文</a>
                    </div>
<div class="social-links">
                        <a href="#" class="social-link">
                            <i data-feather="facebook" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="twitter" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="instagram" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="youtube" class="w-5 h-5"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-heading">Product</h3>
                    <div class="footer-links">
                        <a href="#features" class="footer-link">Features</a>
                        <a href="#how-it-works" class="footer-link">How It Works</a>
                        <a href="#" class="footer-link">Pricing</a>
                        <a href="#" class="footer-link">Testimonials</a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-heading">Resources</h3>
                    <div class="footer-links">
                        <a href="#" class="footer-link">Blog</a>
                        <a href="#" class="footer-link">Help Center</a>
                        <a href="#" class="footer-link">Memory Techniques</a>
                        <a href="#" class="footer-link">Research</a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-heading">Company</h3>
                    <div class="footer-links">
                        <a href="#" class="footer-link">About Us</a>
                        <a href="#" class="footer-link">Careers</a>
                        <a href="#" class="footer-link">Contact</a>
                        <a href="#" class="footer-link">Privacy Policy</a>
                    </div>
                </div>
            </div>
            
            <div class="copyright">
                &copy; ${new Date().getFullYear()} BrainyWords. All rights reserved.
            </div>
        `;
        
        // Replace feather icons
        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);