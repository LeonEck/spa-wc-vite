import html from './page-two.component.html?inline';

const template = document.createElement('template');
template.innerHTML = `${html}`;

export const APP_PAGE_TWO_TAG_NAME = 'app-page-two';

export class AppPageTwoComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}
