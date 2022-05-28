import '../card/card';
import '../content/content';
import {
  APP_PAGE_ONE_TAG_NAME,
  AppPageOneComponent,
} from './page-one.component';

if (customElements.get(APP_PAGE_ONE_TAG_NAME) === undefined) {
  customElements.define(APP_PAGE_ONE_TAG_NAME, AppPageOneComponent);
}
