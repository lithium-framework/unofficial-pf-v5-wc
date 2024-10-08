import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import PageStyles from '@patternfly/react-styles/css/components/Page/page.css';
import { PfWebComponent } from '../../models/PfWebComponent';
import  'unofficial-pf-v5-wc-icons';

@customElement({
  name: 'pf-page',
  template: html`${(page: PfPage) => {
    return html`
    <div class="pf-v5-c-page">
      <pf-masthead display-inline></pf-masthead>
      <div class="pf-v5-c-page__sidebar">
        <pf-drawer inline></pf-drawer>
      </div>
      <pf-panel></pf-panel>
    </div>`
  }}`,
  styles : [
    css`${String(PageStyles)}`
  ]
})

export class PfPage extends PfWebComponent{

}