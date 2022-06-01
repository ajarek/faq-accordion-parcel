const buttons = document.querySelectorAll('button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button,index) => {
    button.addEventListener('click', (e) => {
        e.target.classList.toggle('rotate');
       contents[index].classList.toggle('flex');
    });
    });