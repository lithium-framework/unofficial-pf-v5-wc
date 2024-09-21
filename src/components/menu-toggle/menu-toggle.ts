import { html, WebComponent , customElement, css, ViewTemplate , state, attr } from "@lithium-framework/core";

import MenuToggleStyles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle.css';
import { BaseStyle } from "../../css/base";

@customElement({
  name : 'pf-menu-toggle',
  template: html`${( menuToggle ) => {

    return html`<button class="pf-v5-c-menu-toggle" type="button" aria-expanded="false">
      <span class="pf-v5-c-menu-toggle__text">
        <slot></slot>
      </span>
      <span class="pf-v5-c-menu-toggle__controls">
        <span class="pf-v5-c-menu-toggle__toggle-icon">
          <i class="fas fa-caret-down" aria-hidden="true"></i>
          ${
            menuToggle.badge ?
            html `<pf-badge>
              <slot name = "badge" >

              </slot>
            </pf-badge>` :
            html``
          }
        </span>
      </span>
    </button>`

  }}`,
  styles : [
    BaseStyle,
    css`${MenuToggleStyles}`
  ]
})
export class PfMenuToggle extends WebComponent{

  @attr() badge : "true" | "false" | null = null;

  @state isBadge : boolean = false;
  @state isExpanded : boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {

    if( name == "badge" ){
      this.isBadge = newValue == "true" && newValue == null ? true : false;
    }
    
    super.attributeChangedCallback( name , oldValue , newValue );

  }

}

export { MenuToggleStyles }