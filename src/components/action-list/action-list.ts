import { css, customElement , html, WebComponent } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';

import ActionListStyle from '@patternfly/react-styles/css/components/ActionList/action-list.css';

@customElement({
  name : 'pf-action-list-item',
  template : html`${() => {

    return html`<div 
      class="pf-v5-c-action-list__item" 
      part = "item">
        <slot></slot>
    </div>`

  }}`,
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
  template : html`${() => {

    return html`<div 
      class="pf-v5-c-action-list__group" 
      part = "container">
        <slot></slot>
    </div>`

  }}`,
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
  template : html`${() => {

    return html`<div 
      class="pf-v5-c-action-list" 
      part = "list">
        <slot></slot>
    </div>`

  }}`,
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

export { ActionListStyle };