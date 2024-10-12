import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import BackToTopStyles from '@patternfly/react-styles/css/components/BackToTop/back-to-top.css';
import { PfWebComponent } from '../../models/PfWebComponent';

@customElement({
  name: 'pf-back-to-top',
  template: html`${(backtotop: PfBackToTop) => {
    
    return html`<div class="pf-v5-c-back-to-top" part = "wrapper">
      <a class="pf-v5-c-button pf-m-primary" href="#" part = "controller">
        Back to top
        <span class="pf-v5-c-button__icon pf-m-end" part = "container" >
          <pf-icons-chevron-up part = "icon" ></pf-icons-chevron-up>
        </span>
      </a>
    </div>`;

  }}`,
  styles: [
    BaseStyle,
    css`${String(BackToTopStyles)}`
  ],
  shadowOptions: { mode: 'open' }
})
export class PfBackToTop extends PfWebComponent{

}