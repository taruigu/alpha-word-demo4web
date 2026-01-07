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

        .language-switcher {
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }

        .language-switcher a {
          color: #bae6fd;
          text-decoration: none;
          margin: 0 0.25rem;
        }

        .language-switcher a.active {
          color: white;
          font-weight: 600;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          color: white;
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

        .footer-links a {
          color: #bae6fd;
          text-decoration: none;
        }

        .footer-links a:hover {
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

      <div class="footer-container" id="footerContent"></div>

      <div class="copyright">
        © <span id="year"></span> BrainyWords. All rights reserved.
      </div>
    `;

    this.injectTemplate();
    this.updateYear();
    feather.replace();
  }

  injectTemplate() {
    const tpl = document.getElementById('footer-cn');
    if (!tpl) return;

    this.shadowRoot
      .getElementById('footerContent')
      .appendChild(tpl.content.cloneNode(true));
  }

  updateYear() {
    this.shadowRoot.getElementById('year').textContent =
      new Date().getFullYear();
  }
}

customElements.define('custom-footer', CustomFooter);
