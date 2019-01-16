import '@polymer/paper-ripple/paper-ripple';


import { html, PolymerElement } from '@polymer/polymer';

class TdButton extends PolymerElement {
    static get template() { return button_template; };

    constructor() {
        super();
    }
}

const button_style = html`<link rel="stylesheet" href="./@ui-lib/button/button.css">`;
const button_template = html
`
<custom-style>${button_style}</custom-style>

<div class="center"><slot></slot></div>
<paper-ripple></paper-ripple>
</div>`;



customElements.define('td-button', TdButton);