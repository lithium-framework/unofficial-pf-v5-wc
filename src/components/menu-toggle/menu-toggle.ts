import { html, WebComponent , customElement, css, ViewTemplate , state, attr } from "@lithium-framework/core";

import MenuToggleStyles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle.css';
import IconStyles from '@patternfly/react-styles/css/components/Icon/icon.css';
import { BaseStyle } from "../../css/base";
import { PfWebComponent } from "../../models/PfWebComponent";

@customElement({
  name : 'pf-menu-toggle',
  template: html`${( menuToggle:PfMenuToggle ) => {

    return html`<button class=${[
      "pf-v5-c-menu-toggle",
      menuToggle.isExpanded ? "pf-m-expanded" : ""
    ].join(' ')} ?disabled = ${menuToggle.isDisabled} type="button" aria-expanded=${ String(menuToggle.isExpanded) }>
      <span class="pf-v5-c-menu-toggle__icon">
        <i class="fas fa-cog" aria-hidden="true">
          <span class="pf-v5-c-icon">
            <span class="pf-v5-c-icon__content">
              <i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i>
            </span>
          </span>
        </i>
      </span>
      <span class="pf-v5-c-menu-toggle__text">
        <slot></slot>
      </span>
      <span class="pf-v5-c-menu-toggle__controls">
        <span class="pf-v5-c-menu-toggle__toggle-icon">
          <i class="fas fa-caret-down" aria-hidden="true"></i>
          ${
            menuToggle.badge ?
            html `<pf-badge>
              <slot name = "badge" ></slot>
            </pf-badge>` :
            html``
          }
        </span>
      </span>
    </button>`

  }}`,
  styles : [
    BaseStyle,
    css`${MenuToggleStyles}`,
    css`${IconStyles}`
  ],
  shadowOptions: { mode: 'open' }
})
export class PfMenuToggle extends PfWebComponent{

  @attr() badge : "true" | "false" | null = null;
  @attr() expanded : "true" | "false" | null = null;
  @attr() disabled : "true" | "false" | null = null;

  @state isBadge : boolean = false;
  @state isExpanded : boolean = false;
  @state isDisabled : boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {

    if( name == "badge" )this.isBadge = this.handleBooleanAttribute( name , newValue );
    if( name == "expanded" )this.isExpanded = this.handleBooleanAttribute( name , newValue );
    if( name == "disabled" )this.isDisabled = this.handleBooleanAttribute( name , newValue );
    
    super.attributeChangedCallback( name , oldValue , newValue );

  }

}

export { MenuToggleStyles }