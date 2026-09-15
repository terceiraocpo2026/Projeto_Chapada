const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');

const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

let ampliado = false;

document.querySelectorAll('.img-comum').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('ativo');
        ampliado = false;
        lightboxImg.style.transform = 'scale(1)';
    });
});

lightboxImg.addEventListener('click', (e) => {
    e.stopPropagation();
    ampliado = !ampliado;
    lightboxImg.style.transform = ampliado ? 'scale(2)' : 'scale(1)';
    lightboxImg.style.cursor = ampliado ? 'zoom-out' : 'zoom-in';
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('ativo');
});