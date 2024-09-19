import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import '@patternfly/react-core/dist/styles/base.css';

@customElement({
    name: 'pf-checkbox',
    template: html`${(checkbox: PfCheckbox) => {
        return html`
        <div class="pf-v5-c-check">
            ${checkbox.renderCheckbox()}
        </div>`;
    }}`
})


export class PfCheckbox extends WebComponent {

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
    @attrState() description: string = "";
    @attrState() text: string | ViewTemplate = "";

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

    // Getter/Setter pour "reversed"
    @attrState()
    get reversed() {
        return this._reversed;
    }
    set reversed(value: "true" | "false") {
        if (value === "true") {
            this.resetAttributesExcept("reversed");
        }
        this._reversed = value;
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

    // Getter/Setter pour "label wrapping input"
    @attrState()
    get labelWrappingInput() {
        return this._labelWrappingInput;
    }
    set labelWrappingInput(value: "true" | "false") {
        if (value === "true") {
            this.resetAttributesExcept("labelWrappingInput");
        }
        this._labelWrappingInput = value;
    }

    // Getter/Setter pour "with description"
    @attrState()
    get withDescription() {
        return this._description;
    }
    set withDescription(value: "true" | "false") {
        if (value === "true") {
            this.resetAttributesExcept("description");
        }
        this._description = value;
    }

    // Getter/Setter pour "with body"
    @attrState()
    get withBody() {
        return this._body;
    }
    set withBody(value: "true" | "false") {
        if (value === "true") {
            this.resetAttributesExcept("body");
        }
        this._body = value;
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

    get isStandalone() {
        return this.label ? true : false;
    }

    // Méthode pour générer le bon input en fonction des attributs
    renderCheckbox() {
        
        // Rendu pour l'input 'labelWrappingInput'
        if (this.labelWrappingInput === "true") {
            return html`
                <label
                    class="pf-v5-c-check"
                    id="check-label-wrapping-input-example"
                    for="check-label-wrapping-input-example-input"
                >
                    <input
                        class="pf-v5-c-check__input"
                        type="checkbox"
                        id="check-label-wrapping-input-example-input"
                        name="check-label-wrapping-input-example-input"
                        ?checked=${this.checked === "true"}
                        ?disabled=${this.disabled === "true"}
                    />
                    <span class="pf-v5-c-check__label">
                        ${this.label}
                    </span>
                </label>
            `;
        }

        

        // Rendu pour l'input 'reversed'
        if (this.reversed === "true") {
            return html`
                <label class="pf-v5-c-check__label" for="check-reversed-example-input">
                    ${this.label}
                </label>
                <input
                    class="pf-v5-c-check__input"
                    type="checkbox"
                    id="check-reversed-example-input"
                    name="check-reversed-example-input"
                    ?checked=${this.checked === "true"}
                    ?disabled=${this.disabled === "true"}
                />
            `;
        }

         // Rendu pour l'input 'disabled'
        if (this._disabled === "true") {
            return html`
            <div class="pf-v5-c-check" id="check-disabled-example">
                <input
                    class="pf-v5-c-check__input"
                    type="checkbox"
                    id="check-disabled-example-input"
                    name="check-disabled-example-input"
                    ?checked=${this.checked === "true"}
                    ?disabled=${this.disabled === "true"}
                />
                <label
                    class="pf-v5-c-check__label pf-m-disabled"
                    for="check-disabled-example-input"
                >${this._checked === "true" ? "Check disabled checked" : "Check disabled"}</label>
            </div>
        `;
        }
        
        console.log(this._description)
        // Rendu pour un input avec description
        if (this._description) {
            return html`
                <div class="pf-v5-c-check" id="check-with-description-example">
                    <input
                        class="pf-v5-c-check__input"
                        type="checkbox"
                        aria-describedby="check-with-description-example-description"
                        id="check-with-description-example-input"
                        name="check-with-description-example-input"
                        ?checked=${this.checked === "true"}
                        ?disabled=${this.disabled === "true"}
                    />
                    <label
                        class="pf-v5-c-check__label"
                        for="check-with-description-example-input"
                    >${this.label}</label>
                    <span
                        class="pf-v5-c-check__description"
                        id="check-with-description-example-description"
                    >${this.text}</span>
                </div>
            `;
        }

        console.log(this._body)
        // Rendu pour un input avec body
        if (this._body) {
            return html`
                <div class="pf-v5-c-check" id="check-with-body-example">
                    <input
                        class="pf-v5-c-check__input"
                        type="checkbox"
                        id="check-with-body-example-input"
                        name="check-with-body-example-input"
                        ?checked=${this.checked === "true"}
                        ?disabled=${this.disabled === "true"}
                    />
                    <label
                        class="pf-v5-c-check__label"
                        for="check-with-body-example-input"
                    >${this.label}</label>
                    <span class="pf-v5-c-check__body">
                        ${this.text}
                    </span>
                </div>
            `;
        }

        

        // Rendu pour 'basic' et 'required'
        return html`
            <input
                class="pf-v5-c-check__input"
                type="checkbox"
                id="checkbox-example"
                name="checkbox-example"
                ?checked=${this.checked === "true"}
                ?required=${this.required === "true"}
                ?disabled=${this.disabled === "true"}
            />
        `;
    }
}


