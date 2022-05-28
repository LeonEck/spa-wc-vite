import html from './card.component.html?inline';
import css from './card.component.scss?inline';

const template = document.createElement('template');
template.innerHTML = `<style>${css}</style>${html}`;

export const APP_CARD_TAG_NAME = 'app-card';

export class AppCardComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
}
