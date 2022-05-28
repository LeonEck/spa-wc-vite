import html from './content.component.html?inline';
import css from './content.component.css?inline';

const template = document.createElement('template');
template.innerHTML = `<style>${css}</style>${html}`;

export const APP_CONTENT_TAG_NAME = 'app-content';

export class AppContentComponent extends HTMLElement {
  static get observedAttributes() {
    return ['number'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  attributeChangedCallback(
    attrName: string,
    oldVal: string | null,
    newVal: string | null
  ) {
    if (attrName === 'number' && newVal) {
      this.shadowRoot!.querySelector('.number')!.textContent = ` ${newVal}`;
    }
  }
}
