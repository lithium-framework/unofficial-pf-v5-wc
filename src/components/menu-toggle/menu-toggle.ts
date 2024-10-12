import { html, WebComponent , customElement, css, ViewTemplate , state, attr , ref , createRef } from "@lithium-framework/core";

import MenuToggleStyles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle.css';
import IconStyles from '@patternfly/react-styles/css/components/Icon/icon.css';
import { BaseStyle } from "../../css/base";
import { PfWebComponent } from "../../models/PfWebComponent";

@customElement({
  name : 'pf-menu-toggle',
  template: html`${( menuToggle:PfMenuToggle ) => {

    return html`<button ${ ref( menuToggle.$_controller ) } class=${[
      "pf-v5-c-menu-toggle",
      menuToggle.isExpanded ? "pf-m-expanded" : null,
      menuToggle.isPrimary ? "pf-m-primary" : null,
      menuToggle.isSecondary ? "pf-m-secondary" : null,
      menuToggle.isPlain ? "pf-m-plain" : null,
    ].filter( x => x ).join(' ')} 
    ?disabled = ${menuToggle.isDisabled} 
    type="button" 
    part = "wrapper"
    aria-expanded=${ String(menuToggle.isExpanded) }>
      ${
        menuToggle.isIcon ?
        html`<span class="pf-v5-c-menu-toggle__icon" part = "icon" >
          <span class="pf-v5-c-icon" part = "container" >
            <span class="pf-v5-c-icon__content" part = "content" >
              <slot name = "icon" onSlotChange=${ menuToggle.cretateOnSlotChangeHandler( "icon" ) }></slot>
            </span>
          </span>
        </span>` :
        html``
      }
      <span class="pf-v5-c-menu-toggle__text" part = "text" >
        <slot
          onSlotChange=${ menuToggle.cretateOnSlotChangeHandler( null , ( node ) => {
            if( node )menuToggle.isText = true;
            else menuToggle.isText = false;
          } ) }
        ></slot>
      </span>
      ${
        menuToggle.badge ?
        html `<span class="pf-v5-c-menu-toggle__count" part = "badge" >
          <pf-badge part = "container" >
            <slot 
              name = "badge" 
              onSlotChange=${ menuToggle.cretateOnSlotChangeHandler( "badge" , ( nodes ) => {

              } ) }>
            </slot>
          </pf-badge>
        </span>` :
        html``
      }
      ${
        menuToggle.isPlain ?
        menuToggle.isText ?
        html`<span class="pf-v5-c-menu-toggle__controls" part = "controller" >
          <span class="pf-v5-c-menu-toggle__toggle-icon">
            <pf-icons-caret-down part = "icon" ></pf-icons-caret-down>
          </span>
        </span>`:
        html`<span class="pf-v5-c-menu-toggle__controls" part = "controller">
          <span class="pf-v5-c-menu-toggle__toggle-icon" part = "toggle" ></span>
        </span>` :
        html`<span class="pf-v5-c-menu-toggle__controls" part = "controller">
          <span class="pf-v5-c-menu-toggle__toggle-icon"  part = "toggle" >
            <pf-icons-caret-down part = "icon" ></pf-icons-caret-down>
          </span>
        </span>`
      }
    </button>`

  }}`,
  styles : [
    BaseStyle,
    css`${MenuToggleStyles}`,
    css`${IconStyles}`,
    css`
      pf-icons-caret-down{
        display: flex;
        align-items: center;
      }

      .pf-v5-c-menu-toggle.pf-m-plain{
        display: inline-flex !important;
      }

      .pf-v5-c-menu-toggle__toggle-icon{
        min-width : 16px;
        aspect-ratio: 1/1;
      }
    `
  ],
  shadowOptions: { mode: 'open' }
})
export class PfMenuToggle extends PfWebComponent{

  @attr() badge : "true" | "false" | null = null;
  @attr() icon : "true" | "false" | null = null;
  @attr() expanded : "true" | "false" | null = null;
  @attr() disabled : "true" | "false" | null = null;

  @attr() primary : "true" | "false" | null = null;
  @attr() secondary : "true" | "false" | null = null;
  @attr() plain : "true" | "false" | null = null;

  @state() isBadge : boolean = false;
  @state() isIcon : boolean = false;
  @state() isExpanded : boolean = false;
  @state() isDisabled : boolean = false;
  @state() isText : boolean = false;

  @state() isPrimary = false;
  @state() isSecondary = false;
  @state() isPlain = false;

  $_controller = createRef< HTMLButtonElement >();

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {

    if( name == "badge" )this.isBadge = this.handleBooleanAttribute( name , newValue );
    if( name == "icon" )this.isIcon = this.handleBooleanAttribute( name , newValue );
    if( name == "expanded" )this.isExpanded = this.handleBooleanAttribute( name , newValue );
    if( name == "disabled" )this.isDisabled = this.handleBooleanAttribute( name , newValue );

    if( name == "primary" ){
      this.isPrimary = this.handleBooleanAttribute( name , newValue );
      if(this.isPrimary && this.isSecondary)this.removeAttribute('secondary');
      if(this.isPrimary && this.isPlain)this.removeAttribute('plain');
    }
    if( name == "secondary" ){
      this.isSecondary = this.handleBooleanAttribute( name , newValue );
      if(this.isSecondary && this.isPrimary)this.removeAttribute('primary');
      if(this.isSecondary && this.isPlain)this.removeAttribute('plain');
    }
    if( name == "plain" ){
      this.isPlain = this.handleBooleanAttribute( name , newValue );
      if(this.isSecondary && this.isPrimary)this.removeAttribute('primary');
      if(this.isSecondary && this.isSecondary)this.removeAttribute('secondary');
    }
    
    super.attributeChangedCallback( name , oldValue , newValue );

  }

}

export { MenuToggleStyles }