import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate} from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import NavigationStyles from '@patternfly/react-styles/css/components/Nav/nav.css';
import { PfWebComponent } from '../../models/PfWebComponent';

@customElement({
  name: 'pf-navigation-list-item',
  template: html`${(navigationListItem: PfNavigationListItem) => {
    return html`
    <li class="pf-v5-c-nav__item">
      <a href="#" class="pf-v5-c-nav__link">Link</a>
    </li>
    `
  }}`,
  styles: [
    BaseStyle
  ],
  shadowOptions: { mode: 'open' }
})

@customElement({
  name: 'pf-navigation-list',
  template: html`${(navigationList: PfNavigationList) => {
    return html`
    <ul class="pf-v5-c-nav__list" role="list">
        <slot></slot>
    </ul>
    `
  }}`,
  styles: [
    BaseStyle
  ],
  shadowOptions: { mode: 'open' }
})

@customElement({
  name: 'pf-navigation',
  template: html`${(navigation: PfNavigation) => {
    return html`
    <nav class="pf-v5-c-nav" aria-label="Global">
      <slot></slot>
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
export class PfNavigationList extends PfWebComponent{

}
export class PfNavigationListItem extends PfWebComponent{

}