import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import MastheadStyles from '@patternfly/react-styles/css/components/Masthead/masthead.css';
import { PfWebComponent } from '../../models/PfWebComponent';
import  'unofficial-pf-v5-wc-icons';

@customElement({
  name: 'pf-masthead',
  template: html`${(masthead: PfMasthead) => {
    return html`
    <header class="pf-v5-c-masthead" id="basic-masthead">
      <span class="pf-v5-c-masthead__toggle">
        <button
          class="pf-v5-c-button pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <i class="fas fa-bars" aria-hidden="true"></i>
        </button>
      </span>
      <div class="pf-v5-c-masthead__main">
        <a class="pf-v5-c-masthead__brand" href="#">Logo</a>
      </div>
      <div class="pf-v5-c-masthead__content">
        <span>Content</span>
      </div>
    </header>`
  }}`,
  styles: [
    css`${String(MastheadStyles)}`,
  ],
  shadowOptions: { mode: 'open' }
})
export class PfMasthead extends PfWebComponent{
  
}