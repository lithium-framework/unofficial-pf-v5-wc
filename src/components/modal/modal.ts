import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import ModalStyles from '@patternfly/react-styles/css/components/ModalBox/modal-box.css';
import { PfWebComponent } from '../../models/PfWebComponent';
import  'unofficial-pf-v5-wc-icons';

@customElement({
  name: 'pf-modal',
  template: html`${(modal: PfModalBox) => {
    return html`<div
  class="pf-v5-c-modal-box pf-m-sm"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-sm-title"
  aria-describedby="modal-sm-description"
>
  <div class="pf-v5-c-modal-box__close">
    <pf-icons-times></pf-icons-times>
  </div>
  <header class="pf-v5-c-modal-box__header">
    <slot name="title"></slot>
  </header>
  <div class="pf-v5-c-modal-box__body" id="modal-sm-description">
    <slot></slot>
  </div>
  <footer class="pf-v5-c-modal-box__footer">
    <slot name="footer"></slot>
  </footer>
</div>`
  }}`,
  styles : [
    BaseStyle,
    css`${String(ModalStyles)}`
  ]
})
export class PfModalBox extends PfWebComponent{

}