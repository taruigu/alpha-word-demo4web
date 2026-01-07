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
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            'PingFang SC',
            'Hiragino Sans GB',
            'Microsoft YaHei',
            'Noto Sans CJK SC',
            Arial,
            sans-serif;
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
          font-size: 0.95rem;
        }

        .nav-link:hover {
          color: #0ea5e9;
        }

        .cta-button {
          background-color: #0ea5e9;
          color: white;
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          font-weight: 500;
          text-decoration: none;
        }

        .cta-button:hover {
          background-color: #0284c7;
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
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
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .mobile-menu.open {
          display: block;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
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
          <i data-feather="brain" class="logo-icon"></i>
          BrainyWords
        </a>

        <div class="nav-links" id="navLinks"></div>

        <button class="mobile-menu-button" id="menuBtn">
          <i data-feather="menu"></i>
        </button>
      </nav>

      <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-nav-links" id="mobileNavLinks"></div>
      </div>
    `;

    this.injectTemplates();
    this.initMobileMenu();
    feather.replace();
  }

  injectTemplates() {
    const desktopTpl = document.getElementById('navbar-cn');
    const mobileTpl = document.getElementById('navbar-cn-mobile');

    if (desktopTpl) {
      this.shadowRoot
        .getElementById('navLinks')
        .appendChild(desktopTpl.content.cloneNode(true));
    }

    if (mobileTpl) {
      this.shadowRoot
        .getElementById('mobileNavLinks')
        .appendChild(mobileTpl.content.cloneNode(true));
    }
  }

  initMobileMenu() {
    const btn = this.shadowRoot.getElementById('menuBtn');
    const menu = this.shadowRoot.getElementById('mobileMenu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
