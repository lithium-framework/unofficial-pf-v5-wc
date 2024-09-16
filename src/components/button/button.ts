import { html , WebComponent , customElement , attr , attrState , state, css } from '@lithium-framework/core';

import { BaseStyle } from '../../css/base';
import ButtonStyles from 'bundle-text:@patternfly/react-styles/css/components/Button/button.css';

@customElement({
  name : 'pf-button',
  template : html`${( button:PfButton ) => {
    return html`<button 
      class=${[
        'pf-v5-c-button',
        `pf-m-${button.variant}`,
        `${button.kind ? `pf-m-${button.kind}` : ``}`,
        `${ !button.isDisabled ? `` : button.isDisabled || button.isDisabled == true ? `pf-m-aria-disabled` : `` }`
      ].join(' ')}
      type="button">
        <slot></slot>
      </button>`
  }}`,
  styles : [ 
    BaseStyle,
    css`${ButtonStyles}` 
  ],
  shadowOptions: { mode: 'open' }
})
export class PfButton extends WebComponent{

  @attrState() variant: "primary" | "secondary" | "tertiary" = "primary";
  @attrState() kind: "warning" | "danger";
  @attrState() disabled:"false" | "true" = null;
  
  @state isDisabled = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    
    if( name == 'disabled' ){
      this.isDisabled = newValue == "true" || newValue == "" ? true : false;
    }

  }

}