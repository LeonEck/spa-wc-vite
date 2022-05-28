import html from './page-one.component.html?inline';

const template = document.createElement('template');
template.innerHTML = `${html}`;

export const APP_PAGE_ONE_TAG_NAME = 'app-page-one';

export class AppPageOneComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}
