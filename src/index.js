import Chart from "chart.js/auto";
import moment from "moment";
import { almacenarLocalStorage, showCounter } from "./js/funciones";


const btn = document.querySelector('button');
const fecha = document.querySelector('.fecha');

const init = () => {
    showCounter()
    fecha.textContent = moment().format();
    btn.addEventListener('click', () => {

        almacenarLocalStorage(showCounter);
    });

    let chartCanva = document.getElementById('grafica').getContext('2d');
    let chart = new Chart(chartCanva, {
        type: "bar",
        data: {
            labels: ['moto', 'camiones', 'auto', 'trailer', 'avion', 'barco', 'bicicleta', 'tren'],
            datasets: [

                {
                    label: 'medios de transportes',
                    backgroundColor: [
                        '#3E432E',
                        '#616F39',
                        '#A7D129',
                    ],
                    data: [23, 56, 50, 68, 42, 56, 53, 49],
                    fill: true,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.2,
                }
            ]
        }
    });



}

document.addEventListener('DOMContentLoaded', () => {

    init()
})