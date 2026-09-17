const track = document.getElementById('carrosselTrack');
const itens = Array.from(track.children);
const indicadoresBox = document.getElementById('indicadores');
const total = itens.length;
let atual = Number(sessionStorage.getItem('carrosselPos')) || 0;
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