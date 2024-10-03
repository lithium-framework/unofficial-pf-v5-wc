import { html , css, customElement, state , attr } from "@lithium-framework/core";

import MenuStyle from "@patternfly/react-styles/css/components/Menu/menu.css";
import { BaseStyle } from "../../css/base";
import { PfWebComponent } from "../../models/PfWebComponent";

// @customElement({
//   name : 'pf-menu-list-item',
//   template : html`${() => {

//     return html`<li class="pf-v5-c-menu__list-item" role="group">
//       <slot></slot>
//     </li>`;

//   }}`,
//   styles : [
//     BaseStyle,
//     css`${MenuStyle}`
//   ]
// })
// export class PfMenuListItem extends WebComponent{

// }

@customElement({
  name : 'pf-menu-list',
  template : html`${() => {

    return html`<ul class="pf-v5-c-menu__list" role="menu">
      <slot></slot>
    </ul>`

  }}`,
  styles : [
    BaseStyle,
    css`${MenuStyle}`,
    css`
    :host{
      display: block;
    }

    .pf-v5-c-menu__list{
      padding-left: 0;
      margin: 0;
    }
  `
  ]
})
export class PfMenuList extends PfWebComponent{

}

@customElement({
  name : 'pf-menu-content',
  template : html`<div class="pf-v5-c-menu__content"><slot></slot></div>`,
  styles : [
    BaseStyle,
    css`${MenuStyle}`,
    css`
    :host{
      display: block;
    }
  `
  ],
  shadowOptions: { mode: 'open' }
})
export class PfMenuContent extends PfWebComponent{

}

@customElement({
  name : 'pf-menu-item',
  template : html`${( item : PfMenuItem ) => {

    return html`<li 
      class=${[
        "pf-v5-c-menu__list-item",
        item.isDisabled ? "pf-m-disabled" : null,
        item.isAreaDisabled ? "pf-m-aria-disabled" : null,
        item.isDanger ? "pf-m-danger" : null,
      ].filter( x => x ).join(' ')}
      role="group">
      ${
        item.isLink ?
        html`<a class="pf-v5-c-menu__item" href=${`${item.link}`} role="menuitem">
          <span class="pf-v5-c-menu__item-main">
            <span class="pf-v5-c-menu__item-icon">
              <slot name = "icon"></slot>
            </span>
            <span class="pf-v5-c-menu__item-text"><slot></slot></span>
          </span>
        </a>`:
        html`<button class="pf-v5-c-menu__item" type="button" role="menuitem">
          <span class="pf-v5-c-menu__item-main">
            <span class="pf-v5-c-menu__item-icon">
              <slot name = "icon"></slot>
            </span>
            <span class="pf-v5-c-menu__item-text"><slot></slot></span>
          </span>
        </button>`
      }
    </li>`;

  }}`,
  styles : [
    BaseStyle,
    css`${MenuStyle}`,
    css`
      :host{
        display: block;
      }
    `
  ],
  shadowOptions: { mode: 'open' }
})
export class PfMenuItem extends PfWebComponent{

  @attr disabled : "true" | "false" | null = null;
  @attr "area-disabled" : "true" | "false" | null = null;
  @attr link : "string" | null = null;
  @attr danger : "true" | "false" | null = null;

  @state() isDisabled = false;
  @state() isAreaDisabled = false;
  @state() isLink = false;
  @state() isDanger = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {

    if(name == "disabled")this.isDisabled = this.handleBooleanAttribute( name , newValue );
    if(name == "area-disabled")this.isAreaDisabled = this.handleBooleanAttribute( name , newValue );
    if( name == "link" )this.isLink = this.handleBooleanAttribute( name , newValue );
    if( name == "danger" )this.isDanger = this.handleBooleanAttribute( name , newValue );
    
    super.attributeChangedCallback( name , oldValue , newValue );
  }

}

@customElement({
  name : 'pf-menu',
  template : html`${( menu:PfMenu ) => {

    return html`<div 
      class="pf-v5-c-menu"
      class=${[
        "pf-v5-c-menu",
        menu.isScrollable ? "pf-m-scrollable" : null,
      ].filter( x => x ).join(' ')}>
      <slot></slot>
    </div>`

  }}`,
  styles : [
    BaseStyle,
    css`${MenuStyle}`,
    css`
      :host{
        padding: 8px;
      }
    `
  ]
})
export class PfMenu extends PfWebComponent{

  @attr scrollable : "true" | "false" | null = null;

  @state() isScrollable = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {

    if( name == "scrollable" )this.isScrollable = this.handleBooleanAttribute( name , newValue );
    
    super.attributeChangedCallback( name , oldValue , newValue );
  }

}

export { MenuStyle };