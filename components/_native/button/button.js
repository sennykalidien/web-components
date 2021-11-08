export class YouweButton extends HTMLButtonElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const stateHandler = {
            get(target, prop) {
                return target[prop]
            },
            set(target, prop, value) {
                target[prop] = value;
                target.updateBindings(prop, value);

                return true;
            }
        }

        this.state = new Proxy(this, stateHandler);

        this._init();
    }

    _init() {

    }

    get variant() {
        return this.hasAttribute('disabled');
    }

    set variant(isDisabled) {
        if(isDisabled) {
            this.setAttribute('disabled')
        } else {

        }
    }

    // Lifecycle methods
    attributeChangedCallback(attr, oldVal, newVal) {
        if(attr === 'foo') {

        }

        if(attr === 'bar') {

        }
    }
}

customElements.define('youwe-button', YouweButton);