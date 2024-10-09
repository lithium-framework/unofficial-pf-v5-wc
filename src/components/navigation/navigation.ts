import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate} from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import NavigationStyles from '@patternfly/react-styles/css/components/Nav/nav.css';
import { PfWebComponent } from '../../models/PfWebComponent';

@customElement({
  name: 'pf-navigation',
  template: html`${(navigation: PfNavigation) => {
    return html`
    <nav class="pf-v5-c-nav" aria-label="Global">
      <ul class="pf-v5-c-nav__list" role="list">
        <li class="pf-v5-c-nav__item">
          <a href="#" class="pf-v5-c-nav__link">Link 1</a>
        </li>
        <li class="pf-v5-c-nav__item">
          <a
            href="#"
            class="pf-v5-c-nav__link pf-m-current"
            aria-current="page"
          >Current link</a>
        </li>
        <li class="pf-v5-c-nav__item">
          <a href="#" class="pf-v5-c-nav__link">Link 3</a>
        </li>
        <li class="pf-v5-c-nav__item">
          <a href="#" class="pf-v5-c-nav__link">Link 4</a>
        </li>
      </ul>
    </nav>`
  }}`,
  styles: [
    BaseStyle,
    css`${String(NavigationStyles)}`,
    css`
    .pf-v5-c-nav__item {
      list-style: none !important;
      background-color: #212427 !important;
    }
    `
  ],
  shadowOptions: { mode: 'open' }
})
export class PfNavigation extends PfWebComponent{

}