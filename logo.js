console.log('logo.js carregado');

const logosInsta1 = document.querySelectorAll('.logo-insta1');
const logosInsta2 = document.querySelectorAll('.logo-insta2');

console.log('logo-insta1 encontradas:', logosInsta1.length);
console.log('logo-insta2 encontradas:', logosInsta2.length);

logosInsta1.forEach(logo => {
    logo.style.cursor = 'pointer';
    logo.style.pointerEvents = 'auto';
    logo.addEventListener('click', () => {
        console.log('clicou na logo 1');
        window.open('https://www.instagram.com/colegiopadreovidio?stkn=eDk0MThwMXNxdmVz', '_blank');
    });
});

logosInsta2.forEach(logo => {
    logo.style.cursor = 'pointer';
    logo.style.pointerEvents = 'auto';
    logo.addEventListener('click', () => {
        console.log('clicou na logo 2');
        window.open('https://www.instagram.com/terceiraocpo26?stkn=Z29rMThsNDYwcXZh', '_blank');
    });
});