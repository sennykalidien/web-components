import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type ButtonVariant = 'primary' | 'ghost';
type ButtonTarget = '_blank' | 'self' | string;

@customElement('custom-button')
export class Button extends LitElement {
    // Declare reactive properties
    @property({ type: String, reflect: false }) href?: string;
    @property() target?: ButtonTarget;
    @property() variant?: ButtonVariant;
    @property({ type: Boolean, reflect: true }) loading?: boolean = false;
    @property({ type: Boolean, reflect: true }) disabled?: boolean = false;

    // Define scoped styles right with your component, in plain CSS
    static styles = css`
        :host {
          --yw-button-background-color: var(--button-background-color);
          --yw-button-background-color-hover: var(--button-background-color-hover);
          --yw-button-background-color-active: var(--button-background-color-active);
          --yw-button-border-color: var(--button-border-color);
          --yw-button-border-color-hover: var(--button-border-color);
          --yw-button-border-radius: var(--button-border-radius, 4px);
          --yw-button-color: var(--button-color);
          --yw-button-padding: var(--button-padding, 0.625rem 1.25rem);
          --yw-button-cursor: var(--button-cursor, pointer);
        }
      
        :host([variant='primary']) {
          --yw-button-background-color: var(--button-background-color, var(--color-primary));
          --yw-button-background-color-hover: var(--button-background-color-hover, var(--color-primary-hover));
          --yw-button-background-color-active: var(--button-background-color-active, var(--color-primary-active));
          --yw-button-border-color: var(--button-border-color, var(--color-primary));
          --yw-button-border-color-hover: var(--button-border-color, var(--color-primary-hover));
          --yw-button-border-radius: var(--button-border-radius, var(--border-radius));
          --yw-button-color: var(--button-color, var(--color-white));
        }
        
        :host([variant='ghost']) {
          --yw-button-background-color: transparent;
          --yw-button-background-color-hover: var(--button-background-color, var(--color-grey-light));
          --yw-button-border-color: var(--button-color, var(--color-primary));
          --yw-button-border-color-hover: var(--button-color, var(--color-primary));
          --yw-button-color: var(--button-color, var(--color-primary));
        }

        :host([disabled]) {
            --yw-button-background-color: var(--button-background-color, var(--color-primary-disabled));
            --yw-button-background-color-hover: var(--button-background-color, var(--color-primary-disabled));
            --yw-button-border-color: var(--button-background-color, var(--color-primary-disabled));
            --yw-button-border-color-hover: var(--button-background-color, var(--color-primary-disabled));
            --yw-button-color: var(--button-background-color, var(--color-grey-dark));
            --yw-button-cursor: not-allowed;
        }      

        :host([variant='primary'][disabled]) {
          --yw-button-background-color: var(--button-background-color, var(--color-primary-disabled));
          --yw-button-background-color-hover: var(--button-background-color, var(--color-primary-disabled));
          --yw-button-border-color: var(--button-background-color, var(--color-primary-disabled));
          --yw-button-border-color-hover: var(--button-background-color, var(--color-primary-disabled));
          --yw-button-color: var(--button-background-color, var(--color-grey-dark));
        }

        :host([variant='ghost'][disabled]) {
          --yw-button-background-color: var(--button-background-color, --color-transparent);
          --yw-button-background-color-hover: var(--button-background-color, var(--color-transparent));
          --yw-button-border-color: var(--button-background-color, var(--color-primary-disabled));
          --yw-button-border-color-hover: var(--button-background-color, var(--color-primary-disabled));
          --yw-button-color: var(--button-background-color, var(--color-primary-disabled));
        }
      
        :host([loading]) .loader {
          display: inline-block !important;
        }

        :host([loading]) .text {
          display: none;
        }      

        .button {
          border: solid 2px var(--yw-button-border-color);
          border-radius: var(--yw-button-border-radius);
          cursor: var(--yw-button-cursor);
          appearance: none;
          background-color: var(--yw-button-background-color);
          color: var(--yw-button-color);
          display: inline-block;
          font-family: 'Helvetica Neue';
          font-size: 1rem;
          font-weight: 700;
          line-height: 24px;
          padding: var(--yw-button-padding);
          text-decoration: none;
          transition: background-color .25s, border-color .25s, color .25s;
        }
      
        .button:hover {
          background-color: var(--yw-button-background-color-hover);
          border-color: var(--yw-button-border-color-hover);
        }
        
        .loader {
          display: none;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background: var(--color-white);
          background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
          background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
          background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
          background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
          background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
          position: relative;
          -webkit-animation: load3 1.4s infinite linear;
          animation: load3 1.4s infinite linear;
          -webkit-transform: translateZ(0);
          -ms-transform: translateZ(0);
          transform: translateZ(0);
        }
        
        .loader:before {
          width: 50%;
          height: 50%;
          background: #ffffff;
          border-radius: 100% 0 0 0;
          position: absolute;
          top: 0;
          left: 0;
          content: '';
        }
        
        .loader:after {
          background: var(--yw-button-background-color);
          width: 75%;
          height: 75%;
          border-radius: 50%;
          content: '';
          margin: auto;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        }
        
        @-webkit-keyframes load3 {
            0% {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
        }
        @keyframes load3 {
            0% {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
        }
  `;

    private bindEvents(event: Event) {
        if(this.disabled) {
            event.preventDefault()
            return false;
        }

        this.loading = !this.loading;

        return true;
    }

    // Render the UI as a function of component state
    render() {
        if(this.href && this.href.length > 0) {
            return html`
                <a class="button" .href="${this.href}" .target="${this.target}" @click="${this.bindEvents}">
                    <div class="loader"></div><span class="text"><slot></slot></span>
                </a>
            `;
        }

        return html`
            <button class="button" @click="${this.bindEvents}">
                <div class="loader"></div><span class="text"><slot></slot></span>
            </button>
        `;
    }
}
