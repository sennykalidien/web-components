export class YouweHeading extends CustomElement {
    constructor() {
        super();
        this.state = new Proxy(this, stateHandler);
        const shadowRoot = this.attachShadow({mode: 'open'});
        const tag = 'h1';
        const variant = 'h3';
        shadowRoot.innerHTML = `
            <${tag} class="${variant}">${content}</{tag}>
        `;

    }

    // Lifecycle methods
    attributeChangedCallback(attr, oldVal, newVal) {
        if(attr === 'foo') {

        }

        if(attr === 'bar') {

        }
    }
}

customElements.define('youwe-heading', YouweHeading);