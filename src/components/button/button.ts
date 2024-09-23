import { html , WebComponent , customElement , attr , attrState , state, css } from '@lithium-framework/core';

import { BaseStyle } from '../../css/base';
import ButtonStyles from '@patternfly/react-styles/css/components/Button/button.css';
import { PfWebComponent } from '../../models/PfWebComponent';

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
      part = "controller"
      type="button">
        <slot></slot>
      </button>`
  }}`,
  styles : [ 
    BaseStyle,
    css`${String(ButtonStyles)}`,
  ],
  shadowOptions: { mode: 'open' }
})
export class PfButton extends PfWebComponent{

  @attrState() variant: "primary" | "secondary" | "tertiary" = "primary";
  @attrState() kind: "warning" | "danger" | null = null;
  @attrState() disabled:"false" | "true" | null = null;
  
  @state isDisabled = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {

    let isAttribute = this.attributes[name as unknown as number] ? true : false;
    let isValue = newValue ? true : false;
    
    if( name == 'disabled' ){

      console.log({ name , oldValue , newValue , isAttribute , isValue })
      
      // this.isDisabled = newValue == "true" || newValue == "" ? true : false;
      if( !isAttribute )this["isDisabled"] = false;
      else if( isAttribute ){

        if(newValue == 'true')this.isDisabled = true;
        else if(newValue == '')this.isDisabled = true;
        else if( !newValue )this.isDisabled = true;
        else this.isDisabled = false;

      }
      // else if(!newValue || newValue == "true" || newValue == "")(this as any)["isDisabled"] = true;
      // else if( newValue == "false" )(this as any)["isDisabled"] = false;
      // else (this as any)["isDisabled"] = false;
    }

    super.attributeChangedCallback( name , oldValue , newValue );

  }

}

export { ButtonStyles };