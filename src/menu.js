import { LitElement, css, html } from 'lit';
import "./ejercicios/ej1IMC.js";
import "./ejercicios/ej2.js";


class Menu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .menu {
                    padding: 20px;
                    border-radius: 5px;
                    width: 300px;
                    margin: 0 auto;
                    text-align: center;
                }
                .menu button {
                    display: block;
                    width: 100%;
                    padding: 10px;
                    margin: 10px 0;
                    font-size: 16px;
                    cursor: pointer;
                    border: none;
                    background-color: #007BFF;
                    color: white;
                    border-radius: 5px;
                }
            </style>
            <div class="menu">
                <h2>Examen Final</h2>
                <button data-option="1">Ejercicio uno</button>
                <button data-option="2">Ejercicio dos</button>
                <button data-option="3">Ejercicio tres</button>
                <button data-option="4">Ejercicio cuatro</button>
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', (event) => this.handleOption(event));
        });
    }

    handleOption(event) {
        const option = event.target.getAttribute('data-option');
        switch(option) {
            case '1':
                this.shadowRoot.appendChild(document.createElement('calcular-peso'));
                break;
            case '2':
                this.shadowRoot.appendChild(document.createElement('image-gallery'));
                break;
            case '3':
                // Web component 3 falto
                break;
            case '4':
                // Web component 4 falto
                break;
            default:
                alert("Opción no válida. Por favor, intente de nuevo.");
        }
    }
}

customElements.define('menu-principal', Menu);
