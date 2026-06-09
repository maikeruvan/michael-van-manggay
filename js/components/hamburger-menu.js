// const burger = document.querySelector('.hamburger');
// const body = document.body;
// let scrollPosition = 0;

// burger.addEventListener('click', () => {
//     if (!body.classList.contains('no-scroll')) {
//         // 1. Remember the scroll position
//         scrollPosition = window.pageYOffset;
//         // 2. Lock the body and keep it at the current spot
//         body.style.top = `-${scrollPosition}px`;
//         body.classList.add('no-scroll');
//     } else {
//         // 3. Remove the lock
//         body.classList.remove('no-scroll');
//         body.style.top = '';
//         // 4. Jump back to where the user was
//         window.scrollTo(0, scrollPosition);
//     }
// });

// The 'menu--open' class is found on hamburger-menu.css
export default function hamburgerMenu() {
    const menu = document.querySelector('.menu');
    menu.addEventListener('click', () => {
        menu.classList.toggle('menu--open');
    })
}