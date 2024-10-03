import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate} from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import * as RadioStyles from '@patternfly/react-styles/css/components/Radio/radio.css';

@customElement({
    name: 'pf-radiobox',
    template: html`${(radio:PfRadio) => {
        return html`<div 
            class=${[
                `pf-v5-c-radio`,
                radio.isReversed ? "reverse" : ""
            ].join(' ')}
            >
            <input
                class="pf-v5-c-radio__input"
                type="radio"
                :checked = ${radio.isChecked}
                :disabled = ${radio.isDisabled}
            />
            <label class="pf-v5-c-radio__label">
                <slot></slot>
            </label>
            ${
                radio.isDescription ? 
                html`<span class="pf-v5-c-radio__description">
                    <slot name="description">
                        <p>Little description here</p>
                    </slot>
                </span>` : 
                html``
            }
            ${
                radio.isBody ? 
                html`<span class="pf-v5-c-radio__body">
                    <slot name="body">
                        <p>Little body here</p>
                    </slot>
                </span>` : 
                html``
            }
        </div>`
    }}`,
    styles: [
        BaseStyle,
        css`${String(RadioStyles)}`,
        css`

        .pf-v5-c-radio.reverse{
            display: grid;
        }

        .pf-v5-c-radio.reverse > .pf-v5-c-radio__label{
            grid-column: 1;
            grid-row: 1;
        }

        .pf-v5-c-radio.reverse > .pf-v5-c-radio__input{
            grid-row: 1;
            grid-column: 2;
        }
      `
    ]
})

export class PfRadio extends WebComponent{
    @attr() disabled: "true" | "false" | null = null;
    @attr() checked: "true" | "false" | null = null;
    @attr() reverse: "true" | "false" | null = null;
    @attr() body: "true" | "false" | null = null;
    @attr() description: "true" | "false" | null = null;

    @state() isDisabled:boolean = false;
    @state() isChecked:boolean = false;
    @state() isReversed:boolean = false;
    @state() isDescription:boolean = false;
    @state() isBody:boolean = false;
    
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
        
        // looking on change attribute 'disabled' //
        if(name === 'disabled'){
            if(!this.attributes[name as unknown as number]){this.isDisabled = false;}
            else if(!newValue || newValue === "true"){this.isDisabled = true;}
            else this.isDisabled = false;
        }

        // looking on change attribute 'checked' //
        if(name === 'checked'){
            if(!this.attributes[name as unknown as number]){this.isChecked = false;}
            else if(!newValue || newValue === "true"){this.isChecked = true;}
            else this.isChecked = false;
        }

        // looking on change attribute 'reversed' //
        if(name === 'reverse'){
            if(!this.attributes[name as unknown as number]){this.isReversed = false;}
            else if(!newValue || newValue === "true"){this.isReversed = true;}
            else this.isReversed = false;
        }

        // looking on change attribute 'description' //
        if(name === 'description'){
            if(!this.attributes[name as unknown as number]){this.isDescription = false;}
            else if(!newValue || newValue === "true"){this.isDescription = true;}
            else this.isDescription = false;
        }

        // looking on change attribute 'body' //
        if(name === 'body'){
            if(!this.attributes[name as unknown as number]){this.isBody = false;}
            else if(!newValue || newValue === "true"){this.isBody = true;}
            else this.isBody = false;
        }
    }
}


