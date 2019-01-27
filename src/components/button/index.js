import '@polymer/paper-ripple/paper-ripple';


import { html, PolymerElement } from '@polymer/polymer';

/**
 * `td-button`
 * Tadow's button element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TdButton extends PolymerElement {
    static get template() { 
        //#region Style
        const style = html`
        <style>
        :host {
        
            /* Display */
            display: inline-flex;
            justify-content: center;
            align-items: center;
            
            /* Colors */
            color: var(--secondary, var(--d-secondary));;
            background-color: var(--primary, var(--d-primary));
        
            /* Font */
            font: var(--button-font, var(--d-button-font));
            letter-spacing: var(--button-letter-spacing, var(--d-button-letter-spacing));
        
            /* Size and behavior */
            width: 130px;
            height: 35px;
            margin: 1px;
            user-select: none;
            cursor: pointer;
        
            /* for ripple */
            position: relative;
        }
        
        [part="ripple"] {
            color: var(--ripple, var(--d-ripple));
        }
        </style>
        `;
        //#endregion Style
        //#region Template
        const template = html`
        <!-- Button styles -->
        <custom-style>${style}</custom-style>
        <!-- Button elements START -->
        <div class="center"><slot></slot></div>
        <paper-ripple part="ripple"></paper-ripple>
        <!-- Button elements END -->
        `;
        //#endregion Template

        return template;
    };

    static get properties() {
        return {
            value: {
                type: String,
                value: "Click me!"
            }
        };
    }

    constructor() {
        super();
    }
}

customElements.define('td-button', TdButton);