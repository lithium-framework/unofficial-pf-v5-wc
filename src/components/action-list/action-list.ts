import { css, customElement , html, WebComponent } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';

import * as ActionListStyle from 'bundle-text:@patternfly/react-styles/css/components/ActionList/action-list.css';

@customElement({
  name : 'pf-action-list-item',
  template : html`<div class="pf-v5-c-action-list__item" part = "controller">
    <slot></slot>
  </div>`,
  styles : [ 
    BaseStyle,
    css`${String(ActionListStyle)}`
  ],
  shadowOptions: { mode: 'open' }
})
export class PfActionListItem extends WebComponent{

  

} 

@customElement({
  name : 'pf-action-list-group',
  template : html`<div class="pf-v5-c-action-list__group" part = "controller">
    <slot></slot>
  </div>`,
  styles : [ 
    BaseStyle,
    css`${String(ActionListStyle)}`
  ],
  shadowOptions: { mode: 'open' }
})
export class PfActionListGroup extends WebComponent{

  

} 

@customElement({
  name : 'pf-action-list',
  template : html`<div class="pf-v5-c-action-list" part = "controller">
    <slot></slot>
  </div>`,
  styles : [ 
    BaseStyle,
    css`${String(ActionListStyle)}`,
    css`
      .pf-v5-c-action-list{
        gap: var(--pf-v5-c-action-list--child--spacer-base);
      }
    `
  ],
  shadowOptions: { mode: 'open' }
})
export class PfActionList extends WebComponent{



} 