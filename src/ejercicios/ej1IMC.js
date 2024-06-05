import { LitElement, css, html } from 'lit'


class IMC extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            /* Estilos CSS */
            :host {
                display: block;
                font-family: Arial, sans-serif;
                max-width: 400px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 5px;
                text-align: center;
            }
            input[type="number"] {
                width: 100%;
                padding: 10px;
                margin-bottom: 10px;
                box-sizing: border-box;
            }
            button {
                background-color: #007bff;
                color: #fff;
                border: none;
                padding: 10px 20px;
                cursor: pointer;
                border-radius: 5px;
            }
            #result {
                margin-top: 20px;
            }
        </style>
        <h2>Calcula tu IMC</h2>
        <input type="number" id="weight" placeholder="Peso (kg)">
        <input type="number" id="height" placeholder="Altura (m)">
        <button id="calculateBtn">Calcular</button>
        <div id="result"></div>
        <img id="Image" style="max-width: 100%;" alt="imagen de referencia">
        `;

        this.weightInput = this.querySelector('#weight');
        this.heightInput = this.querySelector('#height');
        this.calculateBtn = this.querySelector('#calculateBtn');
        this.resultDiv = this.querySelector('#result');
        this.Image = this.querySelector('#Image');

        this.calculateBtn.addEventListener('click', () => this.calculateBMI());
    }

    calculateBMI() {
        let weight = this.weightInput.value;
        let height = this.heightInput.value;

        if (weight === '' || height === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        weight = parseFloat(weight);
        height = parseFloat(height);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert('Por favor, introduzca valores válidos ');
            return;
        }

        let bmi = weight / (height * height);
        this.resultDiv.innerHTML = '';

        let mensaje = 'Tu IMC es ' + bmi.toFixed(2) + '. ';

        if (bmi < 18.5) {
            mensaje += 'Estás bajo peso.';
            this.Image.src = 'https://static.misionesonline.news/wp-content/uploads/2017/09/bajo-peso-61i7f7jofk70.jpg';
        } else if (bmi >= 18.5 && bmi < 25) {
            mensaje += 'Tienes un peso normal.';
            this.Image.src = 'https://www.sportlife.es/uploads/s1/12/82/10/50/se-puede-tener-obesidad-con-peso-normal.jpeg';
        } else if (bmi >= 25 && bmi < 30) {
            mensaje += 'Tienes sobrepeso.';
            this.Image.src = 'https://cdn-images-cr.sindyk.com/ZVQbicVFNR2y14FLkpAt_sxH7YgYtZ6s59aSOXmXtiw/rs:fit/w:420/h:0/aHR0cHM6Ly9vY2Np/ZGVudGUuY28vd3At/Y29udGVudC91cGxv/YWRzLzIwMTYvMDcv/b2Jlc2lkYWQtanVs/aW8tNS5qcGc?v=1';
        } else {
            mensaje += 'Tienes obesidad.';
            this.Image.src = 'https://imagenes.elpais.com/resizer/v2/https%3A%2F%2Fcloudfront-eu-central-1.images.arcpublishing.com%2Fprisa%2FN37WKWJULVG4XDD2IP2WZVCECA.jpg?auth=1d78e9ecb82ec2912be8cf2e8decf04b97932bf6b2ad65e666443b83ec9964d7&width=1960&height=1470&smart=true';
        }

        this.resultDiv.textContent = mensaje;
    }
}

customElements.define('calcular-peso', IMC);
