const btn_navbar = document.querySelector('.btn-menu');
const navbar__list = document.querySelector('.navbar__list');
btn_navbar.addEventListener('click', () => {

    if (navbar__list.getAttribute('class').includes('open-menu')) {
        navbar__list.classList.remove('open-menu');
        btn_navbar.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        `;
    }else {
        navbar__list.classList.add('open-menu');
        btn_navbar.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        `;
    }
    
});