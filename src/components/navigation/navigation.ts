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
            <ul part="navigation-list" class="pf-v5-c-nav__list" role="list" ?hidden="${!navigationList.isExpanded}">
              <slot></slot>
            </ul>
          </section>`
        : html`
          <ul part="navigation-list" class="pf-v5-c-nav__list" role="list" ?hidden="${!navigationList.isExpanded}">
            <slot></slot>
          </ul>`}
    `;
  }}`,
  styles: [
    BaseStyle,
    css`${String(NavigationStyles)}`,
    css`
      .pf-v5-c-nav__list {
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
  @attr expanded: "true" | "false" | null = null;

  @state() isGrouped: boolean = false;
  @state() isNoTitle: boolean = false;
  @state() isExpanded: boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === "group") {
      this.isGrouped = this.handleBooleanAttribute(name, newValue);
    }
    if (name === "no-title") {
      this.isNoTitle = this.handleBooleanAttribute(name, newValue);
    }
    if (name === "expanded") {
      this.isExpanded = this.handleBooleanAttribute(name, newValue);
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }
}



@customElement({
  name: 'pf-navigation-list-item',
  template: html`${(navigationListItem: PfNavigationListItem) => {
    return html`
      <li class="pf-v5-c-nav__item ${navigationListItem.isCurrent ? 'pf-m-current' : ''}">
        <a href="#" class="pf-v5-c-nav__link" @click=${() => navigationListItem.selectCurrent()} aria-expanded=${navigationListItem.isExpanded}>
          <slot></slot>
          ${navigationListItem.isNoIcon ? '' : 
            navigationListItem.isExpanded 
              ? html`<pf-icons-chevron-down></pf-icons-chevron-down>` 
              : html`<pf-icons-chevron-right></pf-icons-chevron-right>`
          }
        </a>
        ${navigationListItem.hasSubItems ? html`
          <section class="pf-v5-c-nav__subnav ${navigationListItem.isExpanded ? 'pf-m-expanded' : ''}">
            <ul class="pf-v5-c-nav__list" role="list">
              <slot name="subItems"></slot>
            </ul>
          </section>
        ` : ''}
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
      .pf-v5-c-nav__link {
        justify-content: space-between !important;
        width: 96% !important;
      }
      .pf-v5-c-nav__subnav {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
      }
      .pf-m-expanded {
        max-height: 200px; /* Ajuste selon le contenu */
      }
    `
  ],
  shadowOptions: { mode: 'open' }
})
export class PfNavigationListItem extends PfWebComponent {
  @attr current: "true" | "false" | null = null;
  @attr 'no-icon': "true" | "false" | null = null;
  @attr expandable: "true" | "false" | null = null;
  @attr expanded: "true" | "false" | null = null;

  @state() isCurrent: boolean = false;
  @state() isNoIcon: boolean = false;
  @state() hasSubItems: boolean = false;
  @state() isExpanded: boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === "current") this.isCurrent = this.handleBooleanAttribute(name, newValue);
    if (name === "no-icon") this.isNoIcon = this.handleBooleanAttribute(name, newValue);
    if (name === "expanded") this.isExpanded = this.handleBooleanAttribute(name, newValue);
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  connectedCallback() {
    super.connectedCallback();
    this.hasSubItems = !!this.querySelector('[slot="subItems"]');
    this.isExpanded = this.handleBooleanAttribute('expanded', this.expanded);
  }

  selectCurrent() {
    const liElement = this.shadowRoot?.querySelector('li');
    
    if (liElement) {
      liElement.classList.toggle('pf-m-current');
      liElement.classList.toggle('pf-m-expandable');
      liElement.classList.toggle('pf-m-expanded');
    }

    this.isCurrent = !this.isCurrent;
    this.isExpanded = !this.isExpanded;

    this.current = this.isCurrent ? "true" : "false";
    this.expanded = this.isExpanded ? "true" : "false";
  }
}







