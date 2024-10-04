import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import DividerStyles from '@patternfly/react-styles/css/components/Divider/divider.css';

import { PfWebComponent } from "../../models/PfWebComponent";

@customElement({
  name : 'pf-divider',
  template : html`${() => {

    return html`<li class="pf-v5-c-divider" role="separator"></li>`

  }}`,
  styles : [
    BaseStyle,
    css`${ DividerStyles }`
  ]
})
export class PfDivider extends PfWebComponent{

}

export { DividerStyles };