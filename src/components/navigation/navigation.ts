import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate} from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import NavigationStyles from '@patternfly/react-styles/css/components/Nav/nav.css';
import { PfWebComponent } from '../../models/PfWebComponent';



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
    css`${String(NavigationStyles)}`
  ],
  shadowOptions: { mode: 'open' }
})
export class PfNavigation extends PfWebComponent{

}

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
    BaseStyle,
    css`${String(NavigationStyles)}`,
  ],
  shadowOptions: { mode: 'open' }
})
export class PfNavigationList extends PfWebComponent{

}

@customElement({
  name: 'pf-navigation-list-item',
  template: html`${(navigationListItem: PfNavigationListItem) => {
    return html`
      <li class="pf-v5-c-nav__item" @click=${(navigationListItem) => navigationListItem.selectCurrent(navigationListItem)}>
        <a href="#" class="pf-v5-c-nav__link">
          <slot></slot>
        </a>
      </li>
    `;
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
export class PfNavigationListItem extends PfWebComponent {
  @attr current: "true" | "false" | null = null;

  @state() isCurrent: boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === "current") this.isCurrent = this.handleBooleanAttribute(name, newValue);
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  selectCurrent(navigationListItem: PfNavigationListItem) {
    const liElement = this.shadowRoot?.querySelector('li');
    
    if (liElement) {
      liElement.classList.toggle('pf-m-current');
    }

    this.isCurrent = !this.isCurrent;
    this.current = this.isCurrent ? "true" : "false";
  }
}


