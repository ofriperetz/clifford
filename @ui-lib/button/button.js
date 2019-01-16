import '@polymer/paper-button';

import { html, PolymerElement } from '@polymer/polymer';

class UioButton extends PolymerElement {
    static get template() { return button_template; };
}

const button_template = html
    `<paper-button class="green"><slot></slot></paper-button>`;

customElements.define('uio-button', UioButton);