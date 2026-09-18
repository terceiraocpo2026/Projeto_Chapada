const track = document.getElementById('carrosselTrack');
const itens = Array.from(track.children);
const indicadoresBox = document.getElementById('indicadores');
const total = itens.length;

// Descobre o nome do arquivo da página atual
const paginaAtual = window.location.pathname.split('/').pop();

// Procura, entre os itens do carrossel, qual tem o href que bate com a página atual
const indiceDaPagina = itens.findIndex(item => {
    const href = item.getAttribute('href');
    return href && href.split('/').pop() === paginaAtual;
});

// Se a página atual corresponde a um item do carrossel, usa esse índice.
// Caso contrário (ex: carrossel na home), cai no sessionStorage como fallback.
let atual = indiceDaPagina !== -1
    ? indiceDaPagina
    : (Number(sessionStorage.getItem('carrosselPos')) || 0);

let autoplay;

itens.forEach((item, i) => {
    const bolinha = document.createElement('div');
    bolinha.classList.add('indicador');
    bolinha.addEventListener('click', () => irPara(i));
    indicadoresBox.appendChild(bolinha);

    item.addEventListener('click', (e) => {
        if (i !== atual) {
            e.preventDefault();
            irPara(i);
        } else {
            sessionStorage.setItem('carrosselPos', atual);
        }
    });
});

const bolinhas = Array.from(indicadoresBox.children);

function atualizar() {
    itens.forEach((item, i) => {
        let diff = i - atual;

        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;

        item.dataset.pos = diff;
    });

    bolinhas.forEach((b, i) => b.classList.toggle('ativo', i === atual));
    sessionStorage.setItem('carrosselPos', atual);
}

function irPara(indice) {
    atual = (indice + total) % total;
    atualizar();
    reiniciarAutoplay();
}

function proximo() {
    irPara(atual + 1);
}

function anterior() {
    irPara(atual - 1);
}

function reiniciarAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(proximo, 4000);
}

document.getElementById('setaDir').addEventListener('click', proximo);
document.getElementById('setaEsq').addEventListener('click', anterior);

atualizar();
reiniciarAutoplay();