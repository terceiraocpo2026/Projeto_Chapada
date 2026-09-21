// ===== MODO CLARO/ESCURO (100% via JS) =====

document.addEventListener('DOMContentLoaded', function () {

    // 1. Injeta todo o CSS necessário (variáveis, header, footer, textos, botão, transições)
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --cor-body: #FFFBF0;
            --cor-texto: #56161D;
            --cor-header: #7A1F3D;
        }

        [data-theme="dark"] {
            --cor-body: #56161D;
            --cor-texto: #faf7f7;
            --cor-header: #7A1F3D;
        }

        body {
            background-color: var(--cor-body) !important;
            color: var(--cor-texto) !important;
            transition: background-color 0.5s ease, color 0.5s ease;
        }

        #menu {
            background-color: var(--cor-header) !important;
            transition: background-color 0.5s ease;
        }

        footer {
            background-color: var(--cor-header) !important;
            transition: background-color 0.5s ease;
        }

        .footer-titulo {
            color: #faf7f7 !important;
        }

        .titulo1,
        .titulo2,
        .titulo3,
        .texto {
            color: var(--cor-texto) !important;
            transition: color 0.5s ease;
        }

        .titulo2 {
            border-bottom-color: var(--cor-texto) !important;
        }

        .theme-toggle {
            background: transparent;
            border: 2px solid #faf7f7;
            color: #faf7f7;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s ease, transform 0.5s ease;
        }

        .theme-toggle:hover {
            background-color: rgba(250, 247, 247, 0.15);
        }

        .theme-toggle.girar {
            transform: rotate(360deg);
        }

        @media (max-width: 768px) {
            .theme-toggle {
                order: 1;
            }
        }
    `;
    document.head.appendChild(style);

    // 2. Cria o botão
    const botao = document.createElement('button');
    botao.className = 'theme-toggle';
    botao.id = 'themeToggle';
    botao.setAttribute('aria-label', 'Alternar modo claro/escuro');
    botao.textContent = '🌙';

    // 3. Insere no header
    const menuToggleEl = document.getElementById('menuToggle');
    const menuEl = document.getElementById('menu');

    if (menuToggleEl && menuToggleEl.parentNode) {
        menuToggleEl.parentNode.insertBefore(botao, menuToggleEl);
    } else if (menuEl) {
        menuEl.appendChild(botao);
    } else {
        document.body.insertBefore(botao, document.body.firstChild);
        console.warn('tema.js: não achei #menuToggle nem #menu, botão inserido no topo do body.');
    }

    // 4. Aplica o tema salvo (dura enquanto a aba/navegador estiver aberto)
    const temaSalvo = sessionStorage.getItem('tema') || 'claro';
    if (temaSalvo === 'escuro') {
        document.documentElement.setAttribute('data-theme', 'dark');
        botao.textContent = '☀️';
    }

    // 5. Alterna o tema com animação
    botao.addEventListener('click', () => {
        const ativo = document.documentElement.getAttribute('data-theme') === 'dark';

        botao.classList.add('girar');
        setTimeout(() => botao.classList.remove('girar'), 500);

        if (ativo) {
            document.documentElement.removeAttribute('data-theme');
            sessionStorage.setItem('tema', 'claro');
            botao.textContent = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            sessionStorage.setItem('tema', 'escuro');
            botao.textContent = '☀️';
        }
    });
});