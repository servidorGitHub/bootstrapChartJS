//

const pill = document.querySelector('#contador');
let i = 0;

const almacenarLocalStorage = (fn) => {
    localStorage.setItem('numActivados', JSON.stringify(++i));
    fn();
}

const showCounter = () => {
    i = localStorage.getItem('numActivados');
    i ? pill.textContent = i : pill.textContent = 0;

}

export {
    almacenarLocalStorage,
    showCounter,
}