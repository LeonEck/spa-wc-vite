import '../content/content';
import {
  APP_PAGE_TWO_TAG_NAME,
  AppPageTwoComponent,
} from './page-two.component';

if (customElements.get(APP_PAGE_TWO_TAG_NAME) === undefined) {
  customElements.define(APP_PAGE_TWO_TAG_NAME, AppPageTwoComponent);
}
