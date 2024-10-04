import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import CheckboxStyles from '@patternfly/react-styles/css/components/Check/check.css';
import { PfWebComponent } from '../../models/PfWebComponent';

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
              <slot name = "description"></slot>
            </span>` : 
            html``
          }
          ${
            checkbox.isBody ?
            html`<span class="pf-v5-c-check__body">
              <slot name = "body"></slot>
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

export class PfCheckbox extends PfWebComponent {

  @attr disabled : "true" | "false" | null = null;
  @attr checked : "true" | "false" | null = null;
  @attr required : "true" | "false" | null = null;
  @attr reverse : "true" | "false" | null = null;
  @attr description : "true" | "false" | null = null;
  @attr body : "true" | "false" | null = null;

  @state() isDisabled:boolean = false;
  @state() isChecked:boolean = false;
  @state() isRequired:boolean = false;
  @state() isReversed:boolean = false;
  @state() isDescription:boolean = false;
  @state() isBody:boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if( name == "disabled")this.isDisabled = this.handleBooleanAttribute(name, newValue);
    if( name == "checked")this.isChecked = this.handleBooleanAttribute(name, newValue);
    if( name == "required")this.isRequired = this.handleBooleanAttribute(name, newValue);
    if( name == "reverse")this.isReversed = this.handleBooleanAttribute(name, newValue);
    if( name == "description")this.isDescription = this.handleBooleanAttribute(name, newValue);
    if( name == "body")this.isBody = this.handleBooleanAttribute(name, newValue);

    super.attributeChangedCallback( name , oldValue , newValue );
  }

}



