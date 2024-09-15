import { html , render , WebComponent , customElement , attr , attrState , state, css } from '@lithium-framework/core';
import '@patternfly/react-core/dist/styles/base.css';

const x = attrState as any


@customElement({
  name : 'pf-button',
  template : html`${( button:PfButton ) => {
    return html`<button 
      class=${`pf-v5-c-button pf-m-${button.variant} ${button.kind ? `pf-m-${button.kind}` : ``} ${!button.disabled || button.disabled == "true" ? `pf-m-aria-disabled` : ``}`} 
      type="button">
        ${button.text}
      </button>`
  }}`,
  shadowOptions: null
})
export class PfButton extends WebComponent{

  @x() text:string = "coucou";
  @x() variant: "primary" | "secondary" | "tertiary" = "primary";
  @x() kind: "warning" | "danger";
  @x() disabled:"false" | "true" = "false";

}