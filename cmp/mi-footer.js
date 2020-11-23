class MiFooter extends HTMLElement {
  connectedCallback(){
    this.innerHTML = /* html */  
    `Copyrigth &copy; Torres Arellano Jovanni de Jesús`;
  }
}
customElements.define("mi-footer", MiFooter);
