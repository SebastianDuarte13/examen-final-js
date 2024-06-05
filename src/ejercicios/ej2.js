import { LitElement, css, html } from 'lit';

class ImageGallery extends LitElement {
  static styles = css`
    .gallery {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      flex-direction: row;
    }
    .thumbnail {
      width: 100px;
      margin: 5px;
      cursor: pointer;
    }
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      justify-content: center;
      align-items: center;
    }
    .modal img {
      max-width: 90%;
      max-height: 90%;
    }
  `;

  static properties = {
    images: { type: Array },
    currentImageIndex: { type: Number }
  };

  constructor() {
    super();
    this.images = [];
    this.currentImageIndex = 0;
  }

  firstUpdated() {
    this.addEventListener('click', this.openModal);
    this.shadowRoot.querySelector('.modal').addEventListener('click', this.closeModal);
    this.shadowRoot.getElementById('prev').addEventListener('click', () => this.navigate(-1));
    this.shadowRoot.getElementById('next').addEventListener('click', () => this.navigate(1));
  }

  render() {
    return html`
      <div class="gallery">
        ${this.images.map((image, index) => html`
          <img
            class="thumbnail"
            src="${image}"
            alt=""
            @click="${() => this.openModal(index)}"
          />
        `)}
      </div>
      <div class="modal">
        <img src="${this.images[this.currentImageIndex]}" alt=""/>
        <button id="prev">Previous</button>
        <button id="next">Next</button>
      </div>
    `;
  }

  openModal(index) {
    this.currentImageIndex = index;
    this.shadowRoot.querySelector('.modal').style.display = 'flex';
  }

  closeModal() {
    this.shadowRoot.querySelector('.modal').style.display = 'none';
  }

  navigate(direction) {
    this.currentImageIndex = (this.currentImageIndex + direction + this.images.length) % this.images.length;
  }
}

customElements.define('image-gallery', ImageGallery);

