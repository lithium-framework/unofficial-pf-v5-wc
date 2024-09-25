import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import CheckboxStyles from '@patternfly/react-styles/css/components/Check/check.css';

@customElement({
    name: 'pf-checkbox',
    template: html`${(checkbox: PfCheckbox) => {
      return html`
        <div 
          class=${[
            "pf-v5-c-check",
            checkbox.isReversed ? "reverse" : ""
          ].join(' ')} 
        >
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            :checked = ${checkbox.isChecked}
            :disabled = ${checkbox.isDisabled}
          />
          <label class="pf-v5-c-check__label">
            <slot></slot>
            ${ 
              checkbox.isRequired ?  
              html`<span class="pf-v5-c-check__label-required" aria-hidden="true">&#42;</span>` :
              html ``
            }
          </label>
          ${
            checkbox.isDescription ?
            html`<span class="pf-v5-c-check__description">
              <slot name = "description">
                <p>Little description here</p>
              </slot>
            </span>` : 
            html``
          }
          ${
            checkbox.isBody ?
            html`<span class="pf-v5-c-check__body">
              <slot name = "body">
                <p>Little body here</p>
              </slot>
            </span>` : 
            html``
          }
        </div>`;
    }}`,
    styles: [ 
      BaseStyle,
      css`${String(CheckboxStyles)}`,
      css`
        .pf-v5-c-check.reverse > .pf-v5-c-check__label{
          grid-column: 1;
          grid-row: 1;
        }

        .pf-v5-c-check.reverse > .pf-v5-c-check__input{
          grid-row: 1;
          grid-column: 2;
        }
      `
    ],
    shadowOptions: { mode: 'open' }
})

export class PfCheckbox extends WebComponent {

  @attr disabled : "true" | "false" | null = null;
  @attr checked : "true" | "false" | null = null;
  @attr required : "true" | "false" | null = null;
  @attr reverse : "true" | "false" | null = null;
  @attr description : "true" | "false" | null = null;
  @attr body : "true" | "false" | null = null;

  @state isDisabled:boolean = false;
  @state isChecked:boolean = false;
  @state isRequired:boolean = false;
  @state isReversed:boolean = false;
  @state isDescription:boolean = false;
  @state isBody:boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    
    if(name == "required"){
      if( !this.attributes[name as unknown as number] )this.isRequired = false;
      else if(!newValue|| newValue == "true")this.isRequired = true;
      else this.isRequired = false;
    }

    if(name == "checked"){
      if( !this.attributes[name as unknown as number] )this.isChecked = false;
      else if(!newValue|| newValue == "true")this.isChecked = true;
      else this.isChecked = false;
    }

    if(name == "disabled"){
      if( !this.attributes[name as unknown as number] )this.isDisabled = false;
      else if(!newValue|| newValue == "true")this.isDisabled = true;
      else this.isDisabled = false;
    }

    if(name == "description"){
      if( !this.attributes[name as unknown as number] )this.isDescription = false;
      else if(!newValue|| newValue == "true")this.isDescription = true;
      else this.isDescription = false;
    }

    if(name == "body"){
      if( !this.attributes[name as unknown as number] )this.isBody = false;
      else if(!newValue|| newValue == "true")this.isBody = true;
      else this.isBody = false;
    }

    if( name == "reverse" ){
      if( !this.attributes[name as unknown as number] )this.isReversed = false;
      else if(!newValue|| newValue == "true")this.isReversed = true;
      else this.isReversed = false;
    }
  }

}



