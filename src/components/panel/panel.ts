import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import CheckboxStyles from '@patternfly/react-styles/css/components/Check/check.css';

@customElement({
    name: 'pf-panel',
    template: html`${(panel: PfPanel) => {
      return html`<div class="pf-v5-c-panel">
      <div class="pf-v5-c-panel__main">
          <div class="pf-v5-c-panel__main-body">Main content</div>
        </div>
      </div>`
    }}`
})

export class PfPanel extends WebComponent{
  
}