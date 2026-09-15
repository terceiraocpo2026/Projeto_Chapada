if (!document.querySelector('.lightbox')) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.style.cssText = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.85);
        justify-content: center;
        align-items: center;
        z-index: 999;
        cursor: zoom-out;
    `;

    const lightboxImg = document.createElement('img');
    lightboxImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 8px;
    `;

    lightbox.appendChild(lightboxImg);
    document.documentElement.appendChild(lightbox);

    let ampliado = false;

    document.querySelectorAll('.img-comum').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.style.display = 'flex';
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
        lightbox.style.display = 'none';
    });
}