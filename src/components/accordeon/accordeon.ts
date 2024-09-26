import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import AccordeonStyles from '@patternfly/react-styles/css/components/Accordion/accordion.css';
import { PfWebComponent } from '../../models/PfWebComponent';

@customElement({
    name: 'pf-accordeon',
    template: html`${(accordeon: PfAccordeon) => {
      return html`
        <div>
          
        </div>`;
    }}`,
    styles: [ 
      BaseStyle,
      css`${String(AccordeonStyles)}`,
    ],
    shadowOptions: { mode: 'open' }
})

export class PfAccordeon extends PfWebComponent {
  
}



