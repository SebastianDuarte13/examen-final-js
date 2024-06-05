import { LitElement, css, html } from 'lit';
import "bootstrap/dist/css/bootstrap.min.css";

class menu extends HTMLElement {
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
                <h2>Menú de Opciones</h2>
                <button data-option="1">ejercicio uno</button>
                <button data-option="2">Opción 2</button>
                <button data-option="3">Opción 3</button>
                <button data-option="4">Opción 4</button>
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
                //web-component 1
                break;
            case '2':
                //web-component 1
                break;
            case '3':
                //web-component 1
                break;
            case '4':
                //web-component 1
                break;
            default:
                alert("Opción no válida. Por favor, intente de nuevo.");
        }
    }

  


}

customElements.define('menu-principal', menu);