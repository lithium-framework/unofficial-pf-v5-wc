import { html , WebComponent , customElement , attr , attrState , state, css } from '@lithium-framework/core';

import { BaseStyle } from '../../css/base';
import ButtonStyles from '@patternfly/react-styles/css/components/Button/button.css';
import { PfWebComponent } from '../../models/PfWebComponent';

@customElement({
  name : 'pf-button',
  template : html`${( button:PfButton ) => {

    let variant = button.isPrimary ? 
    "primary" :
    button.isSecondary ?
    "secondary" :
    button.isTertiary ?
    "tertiary" :
    "primary";

    let kind = button.isWarning ? 
    "warning" :
    button.isDanger ?
    "danger" :
    null;

    return html`<button 
      class=${[
        'pf-v5-c-button',
        `pf-m-${variant}`,
        kind ? `pf-m-${kind}` : null,
        !button.isDisabled ? `` : button.isDisabled || button.isDisabled == true ? `pf-m-aria-disabled` : null,
        button.isLink ? `pf-m-link` : null
      ].filter( x => x ).join(' ')}
      part = "controller"
      type="button"
      @mousedown = ${ () => (button.onmousedown as any)()() }
      >
        <slot></slot>
      </button>`;

  }}`,
  styles : [ 
    BaseStyle,
    css`${String(ButtonStyles)}`,
  ],
  shadowOptions: { mode: 'open' }
})
export class PfButton extends PfWebComponent{

  @attr primary : "true" | "false" | null = null;
  @attr secondary : "true" | "false" | null = null;
  @attr tertiary : "true" | "false" | null = null;
  @attr warning : "true" | "false" | null = null;
  @attr danger : "true" | "false" | null = null;
  @attr disabled : "true" | "false" | null = null;
  @attr link : "true" | "false" | null = null;
  
  @state() isPrimary = false;
  @state() isSecondary = false;
  @state() isTertiary = false;
  @state() isWarning = false;
  @state() isDanger = false;
  @state() isDisabled = false;
  @state() isLink = false;

  connectedCallback(): void {
    super.connectedCallback();
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {

    if( name == "primary" ){
      this.isPrimary = this.handleBooleanAttribute( name , newValue );
      if(this.isSecondary)this.removeAttribute('secondary');
      if(this.isTertiary)this.removeAttribute('tertiary');
    }
    if( name == "secondary" ){
      this.isSecondary = this.handleBooleanAttribute( name , newValue );
      if(this.isPrimary)this.removeAttribute('primary');
      if(this.isTertiary)this.removeAttribute('tertiary');
    }
    if( name == "tertiary" ){
      this.isTertiary = this.handleBooleanAttribute( name , newValue );
      if(this.isPrimary)this.removeAttribute('primary');
      if(this.isSecondary)this.removeAttribute('secondary');
    }
    if( name == "warning" ){
      this.isWarning = this.handleBooleanAttribute( name , newValue );
      if(this.isDanger)this.removeAttribute('danger');
    }
    if( name == "danger" ){
      this.isDanger = this.handleBooleanAttribute( name , newValue );
      if(this.isWarning)this.removeAttribute('warning');
    }
    if( name == "link" ){
      this.isLink = this.handleBooleanAttribute( name , newValue );
    }
    if( name == "disabled" )this.isDisabled = this.handleBooleanAttribute( name , newValue );

    super.attributeChangedCallback( name , oldValue , newValue );

  }

}

export { ButtonStyles };