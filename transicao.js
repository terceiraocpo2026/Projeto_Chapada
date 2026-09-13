document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const destino = this.href;
        document.body.style.animation = 'fadeOut 0.4s ease forwards';
        setTimeout(() => {
            window.location.href = destino;
        }, 350);
    });
});