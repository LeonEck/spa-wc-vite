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

  connectedCallback() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const number = urlParams.get('number');
    if (number) {
      this.shadowRoot?.querySelector('app-content')?.setAttribute('number', number);
    }
  }
}
