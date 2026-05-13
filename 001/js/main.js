const btn_navbar = document.querySelector('.btn-menu');
const navbar__list = document.querySelector('.navbar__list');
btn_navbar.addEventListener('click', () => {

    const isOpen = navbar__list.classList.contains('open-menu');

    if (isOpen) {
        navbar__list.classList.remove('open-menu');
        navbar__list.setAttribute('hidden', '');
        btn_navbar.setAttribute('aria-expanded', 'false');
        btn_navbar.setAttribute('aria-label', 'Abrir menú de navegación');
        
        btn_navbar.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000" aria-hidden="true"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        `;
    }else {
        navbar__list.classList.add('open-menu');
        btn_navbar.removeAttribute('hidden');
        btn_navbar.setAttribute('aria-expanded', 'true');
        btn_navbar.setAttribute('aria-label', 'Cerrar menú de navegación');

        btn_navbar.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000" aria-hidden="true"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        `;
    }
    
});