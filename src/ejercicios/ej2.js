import { LitElement, css, html } from 'lit';

export class eje2 extends LitElement {

    static styles = css `
    :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0 auto;
        padding: 20px;
        background-color: var(--background-color, #9999);
        color: var(--text-color, #fff);
    }

    .form-container {
        max-width: 400px;
        width: 100%;
    }

    form {
        background-color: var(--form-background-color, #333);
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    input[type="number"] {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid var(--input-border-color, #555);
        border-radius: 4px;
        background-color: var(--input-background-color, #444);
        color: var(--input-text-color, #fff);
    }

    button {
        background-color: var(--button-background-color, #007bff);
        color: var(--button-text-color, white);
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 9999; 
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal-content {
        background-color: var(--modal-content-background-color, #333);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        position: relative;
        max-width: 50%;
        max-height: 50%;
        overflow: none;
    }

    .cerrar {
        position: absolute;
        top: 10px;
        right: 10px;
        color: var(--close-color, #fff);
        font-size: 20px;
    }

    .cerrar:hover {
        color: var(--close-hover-color, #ccc);
    }

    .modal-content img {
        width: 100%;
        height: auto;
    }

    button:hover {
        background-color: var(--button-hover-background-color, #0056b3);
    }

    .image-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 10px;
    }

    .image-grid img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .image-grid img:hover {
        transform: scale(1.1, 1.1);
    }

    `
    constructor() {
        super();
        this.imagenes = [
        {
            img : 'https://static1.srcdn.com/wordpress/wp-content/uploads/2018/06/X-Men-Havok-Comic-Art-Scream.jpg'
        },
        {
            img : 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/VNLOPVBDM5AATCOW2VHOCMYQHA.jpg'
        },
        {
            img : 'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/x-men-s-cyclops-with-intriguing-blurred-costume-behind.jpg'
        },
        {
            img : 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/rogue-xmen.jpg'
        },
        {
            img : 'https://i.pinimg.com/736x/15/7c/0a/157c0a34a52aa8e6ab6afe852ee7af57.jpg'
        },
        {
            img : 'https://img.redbull.com/images/c_crop,x_363,y_0,h_407,w_325/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/02/11/87f8642d-126d-4219-acc9-12ca261bfe39/wolverine'
        },
        {
            img : 'https://i.pinimg.com/originals/3d/4d/1f/3d4d1ffca3b972a9cd43fff96399e601.jpg'
        },
        {
            img : 'https://upload.wikimedia.org/wikipedia/en/0/03/Iceman.png'
        },
        {
            img : 'https://i.pinimg.com/736x/38/e0/90/38e090d55e951ac38853430d6b39691a.jpg'
        },
        {
            img : 'https://media.thenerdstash.com/wp-content/uploads/2023/11/Nightcrawler-2-1024x576.jpg'
        },
        {
            img : 'https://hips.hearstapps.com/hmg-prod/images/magento-1568362613.jpg'
        },
        {
            img : 'https://comicvine.gamespot.com/a/uploads/scale_medium/12/124259/7823917-marauders2019019_cov-scaled.jpg'
        },
        ] ;
    }

    connectedCallback() {
        super.connectedCallback();
        this.abrir(0);
    }

    render() {
        return html `
            <div class="image-grid">
                ${this.imagenes.map((image, index) => html`
                    <img src="${image.img}" alt="Image" @click="${() => this.abrir(index)}">
                `)}
            </div>
            <div class="modal" >
                <div class="modal-content">
                <img id="modal-img" src="" alt="Modal Image">
                <span class="cerrar" @click="${this.cerrar}">&times;</span>
                </div>
            </div>
        `;
    }

    abrir(index) {
        const modal = this.shadowRoot.querySelector('.modal');
        const modalImg = modal.querySelector('#modal-img');
        modal.style.display = 'flex';
        modalImg.src = this.imagenes[index].img;
    }

    cerrar() {
        const modal = this.shadowRoot.querySelector('.modal');
        modal.style.display = 'none';
    }
}

customElements.define('image-gallery', eje2);