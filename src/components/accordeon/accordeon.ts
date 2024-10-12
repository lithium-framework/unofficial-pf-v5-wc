import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import AccordeonStyles from '@patternfly/react-styles/css/components/Accordion/accordion.css';
import { PfWebComponent } from '../../models/PfWebComponent';

export const PfAccordeonStyles = css`AccordeonStyles`;

@customElement({
  name: 'pf-accordeon',
  template: html`${(accordeon: PfAccordeon) => {
    return html`
      <div 
        class="pf-v5-c-accordion"
        part = "wrapper"
        >
        <h3 
          @mousedown=${(accordeon) => accordeon.accordeonToggle(accordeon)}
          part = "titre"
          >

          <button
            class="pf-v5-c-accordion__toggle ${accordeon.isExpanded ? 'pf-m-expanded' : ''}" ?hidden="${!accordeon.isExpanded}"
            type="button"
            aria-expanded="${accordeon.isExpanded ? 'true' : 'false'}"
            part = "toggle"
          >
            <span 
              class="pf-v5-c-accordion__toggle-text"
              part = "text"
              >
              <slot name = "text">

              </slot>
            </span>

            ${accordeon.isExpanded ? 
              html`<pf-icons-chevron-down part = "icon" ></pf-icons-chevron-down>` : 
              html`<pf-icons-chevron-right part = "icon" ></pf-icons-chevron-right>`
            }

          </button>

        </h3>

        <div 
          class=${[
            "pf-v5-c-accordion__expandable-content",
            accordeon.isExpanded ? 'pf-m-expanded' : null
          ].filter( x => x ).join(' ')} 
          part = "content"
          ?hidden="${!accordeon.isExpanded}">
          <div 
            class="pf-v5-c-accordion__expandable-content-body"
            part = "body"
            >
            <slot></slot>
          </div>
        </div>

      </div>`;
  }}`,
  styles: [ 
    BaseStyle,
    PfAccordeonStyles,
    css`
      .pf-v5-c-accordion__expandable-content.pf-m-expanded {
        display: block !important;
      }

      h3 {
        padding: 0;
        margin: 0;
      }
      .pf-v5-c-accordion__toggle{
        align-items: center !important;
        justify-content: space-between !important;
      }
      .pf-v5-c-accordion__toggle-text{
        text-overflow: inherit !important;
        width: 6rem !important;
      }
    `
  ],
  shadowOptions: { mode: 'open' }
})
export class PfAccordeon extends PfWebComponent {

  @attr expanded: "true" | "false" | null = null;

  @state() isExpanded: boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === "expanded") this.isExpanded = this.handleBooleanAttribute(name, newValue);
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  accordeonToggle(accordeon: PfAccordeon) {
  
    this.isExpanded = !this.isExpanded;

    this.expanded = this.isExpanded ? "true" : "false";
  }
}





