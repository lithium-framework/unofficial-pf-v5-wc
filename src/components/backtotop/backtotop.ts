import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import BackToTopStyles from '@patternfly/react-styles/css/components/BackToTop/back-to-top.css';
import { PfWebComponent } from '../../models/PfWebComponent';
import  'unofficial-pf-v5-wc-icons';

@customElement({
  name: 'pf-back-to-top',
  template: html`${(backtotop: PfBackToTop) => {
    return html`<div class="pf-v5-c-back-to-top">
    <a class="pf-v5-c-button pf-m-primary" href="#">
      Back to top
      <span class="pf-v5-c-button__icon pf-m-end">
        <pf-icons-chevron-up></pf-icons-chevron-up>
      </span>
    </a>
  </div>`
  }}`,
  styles: [
    BaseStyle,
    css`${String(BackToTopStyles)}`
  ],
  shadowOptions: { mode: 'open' }
})
export class PfBackToTop extends PfWebComponent{

}