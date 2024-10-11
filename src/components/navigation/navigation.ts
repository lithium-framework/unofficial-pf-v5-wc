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
    css`${String(NavigationStyles)}`,
    css`
    ::slotted(.pf-navigation-list) {
      padding-right: 50px !important;
      background-color: #212427 !important;
    }
    `
  ],
  shadowOptions: { mode: 'open' }
})
export class PfNavigation extends PfWebComponent{

}

@customElement({
  name: 'pf-navigation-list',
  template: html`${(navigationList: PfNavigationList) => {
    return html`
      ${navigationList.isGrouped 
        ? html`
          <section class="pf-v5-c-nav__section" aria-labelledby="grouped-title1">
            ${!navigationList.isNoTitle 
              ? html`<h2 class="pf-v5-c-nav__section-title" id="grouped-title1">Section title 1</h2>`
              : ''}
            <ul part="navigation-list" class="pf-v5-c-nav__list" role="list">
              <slot></slot>
            </ul>
          </section>`
        : html`
          <ul part="navigation-list" class="pf-v5-c-nav__list" role="list">
            <slot></slot>
          </ul>`}
    `;
  }}`,
  styles: [
    BaseStyle,
    css`${String(NavigationStyles)}`,
    css`
      .pf-navigation-list {
        padding-right: 50px !important;
        background-color: #212427 !important;
      }

      .pf-v5-c-nav__section {
        background-color: #212427 !important;
      }
      pf-navigation-list::part(navigation-list) {
        background-color: #212427;
      }
    `
  ],
  shadowOptions: { mode: 'open' }
})
export class PfNavigationList extends PfWebComponent {
  @attr group: "true" | "false" | null = null;
  @attr 'no-title': "true" | "false" | null = null;

  @state() isGrouped: boolean = false;
  @state() isNoTitle: boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === "group") this.isGrouped = this.handleBooleanAttribute(name, newValue);
    if (name === "no-title") this.isNoTitle = this.handleBooleanAttribute(name, newValue);
    super.attributeChangedCallback(name, oldValue, newValue);
  }
}

@customElement({
  name: 'pf-navigation-list-item',
  template: html`${(navigationListItem: PfNavigationListItem) => {
    return html`
      <li class="pf-v5-c-nav__item" @click=${(navigationListItem) => navigationListItem.selectCurrent(navigationListItem)}>
        <a href="#" class="pf-v5-c-nav__link">
          <slot></slot>
          ${navigationListItem.isNoIcon ? html`` : html`<pf-icons-chevron-down></pf-icons-chevron-down>`}
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
      .pf-v5-c-nav__link{
        justify-content: space-between !important;
        width: 96% !important
      }
      .pf-navigation-list {
        padding-right: 50px !important;
        background-color: #212427 !important;
      }
    `
  ],
  shadowOptions: { mode: 'open' }
})
export class PfNavigationListItem extends PfWebComponent {
  @attr current: "true" | "false" | null = null;
  @attr 'no-icon': "true" | "false" | null = null;
  @attr 'expandable': "true" | "false" | null = null;
  

  @state() isCurrent: boolean = false;
  @state() isNoIcon: boolean = false;
  @state() isExpandable: boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === "current") this.isCurrent = this.handleBooleanAttribute(name, newValue);
    if (name === "no-icon") this.isNoIcon = this.handleBooleanAttribute(name, newValue);
    if (name === "expandable") this.isNoIcon = this.handleBooleanAttribute(name, newValue);
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


