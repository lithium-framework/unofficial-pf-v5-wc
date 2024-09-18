import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate} from '@lithium-framework/core';
//import { BaseStyle } from '../../css/base';
//import * as ButtonStyles from 'bundle-text:@patternfly/react-styles/css/components/Button/button.css';

console.log("jfeoz")

@customElement({
    name: 'pf-radiobox',
    template: html`${(radio:PfRadio) => {
        return html`<div class="pf-v5-c-radio" id="radio-basic-example">
            ${radio.renderRadio()}
        </div>`
    }}`
})

export class PfRadio extends WebComponent{
    // Propriétés internes sans rendu dans le DOM
    private _basic: "true" | "false" = "false";
    private _required: "true" | "false" = "false";
    private _checked: "true" | "false" = "false";
    private _reversed: "true" | "false" = "false";
    private _disabled: "true" | "false" = "false";
    private _labelWrappingInput: "true" | "false" = "false";
    private _description: "true" | "false" = "false";
    private _body: "true" | "false" = "false";


    @attrState() label: string = "";
    @attrState() description: string;
    @attrState() text: string | ViewTemplate;

    // Getter/Setter pour "basic"
    @attrState()
    get basic() {
        return this._basic;
    }
    set basic(value: "true" | "false") {
        if (value === "true") {
            this.resetAttributesExcept("basic");
        }
        this._basic = value;
    }

    // Getter/Setter pour "required"
    @attrState()
    get required() {
        return this._required;
    }
    set required(value: "true" | "false") {
        if (value === "true") {
            this.resetAttributesExcept("required");
        }
        this._required = value;
    }

    // Getter/Setter pour "checked"
    @attrState()
    get checked() {
        return this._checked;
    }
    set checked(value: "true" | "false") {
        if (value === "true") {
            this.resetAttributesExcept("checked");
        }
        this._checked = value;
    }

    // Getter/Setter pour "disabled"
    @attrState()
    get disabled() {
        return this._disabled;
    }
    set disabled(value: "true" | "false") {
        if (value === "true") {
            this.resetAttributesExcept("disabled");
        }
        this._disabled = value;
    }

    // Méthode pour désactiver les autres attributs
    private resetAttributesExcept(activeAttr: string) {
        this._basic = activeAttr === "basic" ? "true" : "false";
        this._required = activeAttr === "required" ? "true" : "false";
        this._checked = activeAttr === "checked" ? "true" : "false";
        this._reversed = activeAttr === "reversed" ? "true" : "false";
        this._disabled = activeAttr === "disabled" ? "true" : "false";
        this._labelWrappingInput = activeAttr === "labelWrappingInput" ? "true" : "false";
        this._description = activeAttr === "description" ? "true" : "false";
        this._body= activeAttr === "body" ? "true" : "false";
        
    }


    renderRadio(){


        // Rendu pour le radio 'labelWrappingInput'
        if (this._labelWrappingInput === "true") {
            return html`
                <label
                    class="pf-v5-c-radio"
                    id="radio-label-wrapping-input-example"
                    for="radio-label-wrapping-input-example-input"
                >
                    <input
                        class="pf-v5-c-radio__input"
                        type="radio"
                        id="radio-label-wrapping-input-example-input"
                        name="radio-label-wrapping-input-example-input"
                        ?checked=${this.checked === "true"}
                        ?disabled=${this.disabled === "true"}
                    />
                    <span class="pf-v5-c-radio__label">
                        ${this.label}
                    </span>
                </label>
            `;
        }

        // Rendu pour le radio 'reversed'
        if (this._reversed === "true") {
            return html`
                <label class="pf-v5-c-radio__label" for="radio-reversed-example-input">
                    ${this.label}
                </label>
                <input
                    class="pf-v5-c-radio__input"
                    type="radio"
                    id="radio-reversed-example-input"
                    name="radio-reversed-example-input"
                    ?checked=${this.checked === "true"}
                    ?disabled=${this.disabled === "true"}
                />
            `;
        }

        if (this.disabled === "true") {
            return html`
                <div class="pf-v5-c-radio" id="radio-disabled-example">
                    <input
                        class="pf-v5-c-radio__input"
                        type="radio"
                        id="radio-disabled-example-input"
                        name="radio-disabled-example-input"
                        disabled
                    />
                    <label
                        class="pf-v5-c-radio__label pf-m-disabled"
                        for="radio-disabled-example-input"
                    >Radio disabled</label>
                </div>
                ${this.checked === "true" ? html`
                <div class="pf-v5-c-radio" id="radio-disabled-checked-example">
                    <input
                        class="pf-v5-c-radio__input"
                        type="radio"
                        id="radio-disabled-checked-example-input"
                        name="radio-disabled-checked-example-input"
                        checked
                        disabled
                    />
                    <label
                        class="pf-v5-c-radio__label pf-m-disabled"
                        for="radio-disabled-checked-example-input"
                    >Radio disabled checked</label>
                </div>
                ` : null}
            `;
        }

        // Rendu pour le radio avec description
        if (this.description === "true") {
            return html`
                <div class="pf-v5-c-radio" id="radio-with-description-example">
                    <input
                        class="pf-v5-c-radio__input"
                        type="radio"
                        aria-describedby="radio-with-description-example-description"
                        id="radio-with-description-example-input"
                        name="radio-with-description-example-input"
                    />
                    <label
                        class="pf-v5-c-radio__label"
                        for="radio-with-description-example-input"
                    >${this.label}</label>
                    <span
                        class="pf-v5-c-radio__description"
                        id="radio-with-description-example-description"
                    >${this.description}</span>
                </div>
            `;
        }

        // Rendu pour le radio avec body
        if (this._body === "true") {
            return html`
                <div class="pf-v5-c-radio" id="radio-with-body-example">
                    <input
                        class="pf-v5-c-radio__input"
                        type="radio"
                        id="radio-with-body-example-input"
                        name="radio-with-body-example-input"
                    />
                 <label
                        class="pf-v5-c-radio__label"
                        for="radio-with-body-example-input"
                    >${this.label}</label>
                    <span class="pf-v5-c-radio__body">${this._body}</span>
                </div>
            `;
        }

        
        // Rendu pour 'basic' et 'required'
        return html`
            <input
                class="pf-v5-c-radio__input"
                type="radio"
                id="radio-basic-example-input"
                name="radio-basic-example-input"
                ?checked=${this.checked === "true"}
                ?required=${this.required === "true"}
                ?disabled=${this._disabled === "true"}
            />
            <label class="pf-v5-c-radio__label" for="radio-basic-example-input">
                ${this.label}
                ${this._required === "true" ? html`<span class="pf-v5-c-check__label-required" aria-hidden="true">*</span>` : null}
            </label>
        `;
    }
}


