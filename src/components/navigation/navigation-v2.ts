import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate} from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import NavigationStyles from '@patternfly/react-styles/css/components/Nav/nav.css';
import { PfWebComponent } from '../../models/PfWebComponent';

const style = css`
  :host{
    --pf-v5-c-nav--m-light__item--before--BorderColor: var(--pf-v5-global--BorderColor--300);
    --pf-v5-c-nav--m-light__item--m-current--not--m-expanded__link--BackgroundColor: var(--pf-v5-global--BackgroundColor--light-300);
    --pf-v5-c-nav--m-light__link--Color: var(--pf-v5-global--Color--dark-100);
    --pf-v5-c-nav--m-light__link--hover--Color: var(--pf-v5-global--Color--dark-100);
    --pf-v5-c-nav--m-light__link--focus--Color: var(--pf-v5-global--Color--dark-100);
    --pf-v5-c-nav--m-light__link--active--Color: var(--pf-v5-global--Color--dark-100);
    --pf-v5-c-nav--m-light__link--m-current--Color: var(--pf-v5-global--Color--dark-100);
    --pf-v5-c-nav--m-light__link--hover--BackgroundColor: var(--pf-v5-global--BackgroundColor--light-300);
    --pf-v5-c-nav--m-light__link--focus--BackgroundColor: var(--pf-v5-global--BackgroundColor--light-300);
    --pf-v5-c-nav--m-light__link--active--BackgroundColor: var(--pf-v5-global--BackgroundColor--light-300);
    --pf-v5-c-nav--m-light__link--m-current--BackgroundColor: var(--pf-v5-global--BackgroundColor--light-300);
    --pf-v5-c-nav--m-light__link--before--BorderColor: var(--pf-v5-global--BorderColor--300);
    --pf-v5-c-nav--m-light__link--after--BorderColor: var(--pf-v5-global--active-color--100);
    --pf-v5-c-nav--m-light__link--m-current--after--BorderColor: var(--pf-v5-global--active-color--100);
    --pf-v5-c-nav--m-light__section-title--Color: var(--pf-v5-global--Color--dark-200);
    --pf-v5-c-nav--m-light__section-title--BorderBottomColor: var(--pf-v5-global--BorderColor--300);
    --pf-v5-c-nav--m-light--c-divider--BackgroundColor: var(--pf-v5-global--BorderColor--300);
    --pf-v5-c-nav--m-light__subnav__link--hover--after--BorderColor: var(--pf-v5-global--BorderColor--dark-100);
    --pf-v5-c-nav--m-light__subnav__link--focus--after--BorderColor: var(--pf-v5-global--BorderColor--dark-100);
    --pf-v5-c-nav--m-light__subnav__link--active--after--BorderColor: var(--pf-v5-global--BorderColor--dark-100);
    --pf-v5-c-nav--m-light__subnav__link--m-current--after--BorderColor: var(--pf-v5-global--active-color--100);

    --pf-v5-c-nav__item--before--BorderColor: var(--pf-v5-c-nav--m-light__item--before--BorderColor);
    --pf-v5-c-nav__item--m-current--not--m-expanded__link--BackgroundColor: var(--pf-v5-c-nav--m-light__item--m-current--not--m-expanded__link--BackgroundColor);
    --pf-v5-c-nav__link--Color: var(--pf-v5-c-nav--m-light__link--Color);
    --pf-v5-c-nav__link--hover--Color: var(--pf-v5-c-nav--m-light__link--hover--Color);
    --pf-v5-c-nav__link--focus--Color: var(--pf-v5-c-nav--m-light__link--focus--Color);
    --pf-v5-c-nav__link--active--Color: var(--pf-v5-c-nav--m-light__link--active--Color);
    --pf-v5-c-nav__link--m-current--Color: var(--pf-v5-c-nav--m-light__link--m-current--Color);
    --pf-v5-c-nav__link--hover--BackgroundColor: var(--pf-v5-c-nav--m-light__link--hover--BackgroundColor);
    --pf-v5-c-nav__link--focus--BackgroundColor: var(--pf-v5-c-nav--m-light__link--focus--BackgroundColor);
    --pf-v5-c-nav__link--active--BackgroundColor: var(--pf-v5-c-nav--m-light__link--active--BackgroundColor);
    --pf-v5-c-nav__link--m-current--BackgroundColor: var(--pf-v5-c-nav--m-light__link--m-current--BackgroundColor);
    --pf-v5-c-nav__link--before--BorderColor: var(--pf-v5-c-nav--m-light__link--before--BorderColor);
    --pf-v5-c-nav__link--after--BorderColor: var(--pf-v5-c-nav--m-light__link--after--BorderColor);
    --pf-v5-c-nav__link--m-current--after--BorderColor: var(--pf-v5-c-nav--m-light__link--m-current--after--BorderColor);
    --pf-v5-c-nav__section-title--Color: var(--pf-v5-c-nav--m-light__section-title--Color);
    --pf-v5-c-nav__section-title--BorderBottomColor: var(--pf-v5-c-nav--m-light__section-title--BorderBottomColor);
    --pf-v5-c-nav--c-divider--BackgroundColor: var(--pf-v5-c-nav--m-light--c-divider--BackgroundColor);
    --pf-v5-c-nav__subnav__link--hover--after--BorderColor: var(--pf-v5-c-nav--m-light__subnav__link--hover--after--BorderColor);
    --pf-v5-c-nav__subnav__link--focus--after--BorderColor: var(--pf-v5-c-nav--m-light__subnav__link--focus--after--BorderColor);
    --pf-v5-c-nav__subnav__link--active--after--BorderColor: var(--pf-v5-c-nav--m-light__subnav__link--active--after--BorderColor);
    --pf-v5-c-nav__subnav__link--m-current--after--BorderColor: var(--pf-v5-c-nav--m-light__subnav__link--m-current--after--BorderColor);
  }
`;

@customElement({
  name: 'pf-navigation-v2',
  template: html`${(navigation: PfNavigationV2) => {
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
      background-color: var(--pf-v5-global--BackgroundColor--100) !important;
    }
    `,
    style
  ],
  shadowOptions: { mode: 'open' }
})
export class PfNavigationV2 extends PfWebComponent{

}



@customElement({
  name: 'pf-navigation-list-v2',
  template: html`${(navigationList: PfNavigationListV2) => {
    return html`
      ${navigationList.isGrouped 
        ? html`
          <section class="pf-v5-c-nav__section" aria-labelledby="grouped-title1">
            ${navigationList.isNoTitle 
              ? '' 
              : html`<h2 class="pf-v5-c-nav__section-title" id="grouped-title1">
                  <slot name="section-title"></slot>
                </h2>`}
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
        padding-left: 0;
      }
    `,
    style
  ],
  shadowOptions: { mode: 'open' }
})
export class PfNavigationListV2 extends PfWebComponent {
  @attr group: "true" | "false" | null = null;
  @attr 'no-title': "true" | "false" | null = null;
  @attr expanded: "true" | "false" | null = null;
  @attr multilevel: "true" | "false" | null = null;

  @state() isGrouped: boolean = false;
  @state() isNoTitle: boolean = false;
  @state() isExpanded: boolean = false;
  @state() isMultiLevel: boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === "group")this.isGrouped = this.handleBooleanAttribute(name, newValue);
    if (name === "no-title")this.isNoTitle = this.handleBooleanAttribute(name, newValue);
    if (name === "expanded")this.isExpanded = this.handleBooleanAttribute(name, newValue);
    if (name === "multilevel")this.isExpanded = this.handleBooleanAttribute(name, newValue);
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  connectedCallback() {
    super.connectedCallback();
    this.isExpanded = this.handleBooleanAttribute('expanded', this.expanded);
  }
}




@customElement({
  name: 'pf-navigation-list-item-v2',
  template: html`${(navigationListItem: PfNavigationListItemV2) => {
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
        ${
          !navigationListItem.isNoSubnav ? 
          navigationListItem.isFlyout ?
          html`
            <div class="pf-v5-c-menu pf-m-flyout pf-m-nav" @mouseenter = ${navigationListItem.handleFlyout} @mouseleave = ${navigationListItem.handleFlyout}>
              <slot name="flyoutItem"></slot>
            </div>
          `:
          html`
            <section class="pf-v5-c-nav__subnav ${navigationListItem.isExpanded ? 'pf-m-expanded' : ''}">
              <ul class="pf-v5-c-nav__list" role="list">
                <slot name="subItem"></slot>
              </ul>
            </section>
          ` : 
          html``
        }
      </li>
    `;
  }}`,
  styles: [
    BaseStyle,
    css`${String(NavigationStyles)}`,
    css`
      .pf-v5-c-nav__link {
        justify-content: space-between;
        width: inherit;
      }
      .pf-v5-c-nav__subnav {
        padding-block-end: 0;
      }
      .pf-v5-c-nav__subnav.pf-m-expanded {
        padding-block-end: var(--pf-v5-c-nav__subnav--PaddingBottom);
        max-height: initial;
      }
      .pf-v5-c-nav__item .pf-v5-c-nav__list{
        padding: 0;
        margin: 0;
      }
    `,
    style
  ],
  shadowOptions: { mode: 'open' }
})
export class PfNavigationListItemV2 extends PfWebComponent {

  @attr current: "true" | "false" | null = null;
  @attr 'no-icon': "true" | "false" | null = null;
  @attr expanded: "true" | "false" | null = null;
  @attr 'no-subnav': "true" | "false" | null = null;
  @attr flyout: "true" | "false" | null = null;

  @state() isCurrent: boolean = false;
  @state() isNoIcon: boolean = false;
  @state() isNoSubnav: boolean = false;
  @state() isExpanded: boolean = false;
  @state() isFlyout: boolean = false;
  @state() isHover: boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === "current") this.isCurrent = this.handleBooleanAttribute(name, newValue);
    if (name === "no-icon") this.isNoIcon = this.handleBooleanAttribute(name, newValue);
    if (name === "expanded") this.isExpanded = this.handleBooleanAttribute(name, newValue);
    if (name === 'no-subnav') this.isNoSubnav = this.handleBooleanAttribute(name, newValue);
    if (name === 'flyout') this.isFlyout = this.handleBooleanAttribute(name, newValue);
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  connectedCallback() {
    this.isExpanded = this.handleBooleanAttribute('expanded', this.expanded);
    super.connectedCallback();
  }

  selectCurrent() {
    this.isCurrent = !this.isCurrent;
    this.isExpanded = !this.isExpanded;
    this.current = this.isCurrent ? "true" : "false";
    this.expanded = this.isExpanded ? "true" : "false";
  }

  handleFlyout(){
    if(this.isFlyout)this.isHover = !this.isHover;
  }

};








