import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import ModalStyles from '@patternfly/react-styles/css/components/ModalBox/modal-box.css';
import { PfWebComponent } from '../../models/PfWebComponent';
import  'unofficial-pf-v5-wc-icons';

@customElement({
  name: 'pf-modal',
  template: html`${(modal: PfModalBox) => {
    return html`
    ${modal.isOpen ? html`
      <div
        class=${[
          "pf-v5-c-modal-box",
          modal.isSmall ? "pf-m-sm" : null,
          modal.isMedium ? "pf-m-md" : null,
          modal.isLarge ? "pf-m-lg" : null
        ].filter(Boolean).join(' ')}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-sm-title"
        aria-describedby="modal-sm-description"
      >
        <div class="pf-v5-c-modal-box__close" @click=${() => modal.closeModal()}>
          <pf-icons-times></pf-icons-times>
        </div>
        <header class="pf-v5-c-modal-box__header">
          ${!modal.isNoHeader ? html`<slot name="header"></slot>` : html``}
        </header>
        <div class="pf-v5-c-modal-box__body" id="modal-sm-description">
          <slot></slot>
        </div>
        <footer class="pf-v5-c-modal-box__footer">
          ${!modal.isNoFooter ? html`<slot name="footer"></slot>` : html``}
        </footer>
      </div>` : html``}`
  }}`,
  styles: [
    BaseStyle,
    css`${String(ModalStyles)}`,
    css`
      .pf-v5-c-modal-box.pf-m-sm {
        margin-bottom: 20px !important;
      }
      .pf-v5-c-modal-box.pf-m-md {
        margin-bottom: 20px !important;
      }
      .pf-v5-c-modal-box.pf-m-lg {
        margin-bottom: 20px !important;
      }
      .pf-v5-c-modal-box__close {
        cursor: pointer;
      }
    `
  ]
})
export class PfModalBox extends PfWebComponent {
  @attr() 'no-header': "true" | "false" | null = null;
  @attr() 'no-footer': "true" | "false" | null = null;
  @attr() small : "true" | "false" | null = null;
  @attr() medium : "true" | "false" | null = null;
  @attr() large : "true" | "false" | null = null;

  @state() isNoHeader: boolean = false;
  @state() isNoFooter: boolean = false;
  @state() isOpen: boolean = true;
  @state() isSmall: boolean = false;
  @state() isMedium: boolean = false;
  @state() isLarge: boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === "no-header") this.isNoHeader = this.handleBooleanAttribute(name, newValue);
    if (name === "no-footer") this.isNoFooter = this.handleBooleanAttribute(name, newValue);
    if (name === "small") this.isSmall = this.handleBooleanAttribute(name, newValue);
    if (name === "medium") this.isMedium = this.handleBooleanAttribute(name, newValue);
    if (name === "large") this.isLarge = this.handleBooleanAttribute(name, newValue);
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  closeModal() {
    this.isOpen = false;
  }
}


