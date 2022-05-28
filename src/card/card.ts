import { APP_CARD_TAG_NAME, AppCardComponent } from './card.component';

if (customElements.get(APP_CARD_TAG_NAME) === undefined) {
  customElements.define(APP_CARD_TAG_NAME, AppCardComponent);
}
