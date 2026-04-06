const hamburguer = document.getElementById('hamburguer');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('.nav-list li')
const mobileMenu = document.getElementById('hamburguer')

hamburguer.addEventListener('click', () => {

    // 1. Abre/fecha o menu
    navList.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    // 2. Faz os links surgirem um por um
    navLinks.forEach((link, index) => {
        if (navList.classList.contains('active')) {

            // Se o menu abrir, espera um pouco e mostra o link
            setTimeout(() => {
                link.classList.add('show');
            }, 200 + (index * 100)); // 200ms de espera inicial + 100ms por item
        } else {
            // Se o menu fechou. remove a classe imediatamente
            link.classList.remove('show');
        }
    });
});