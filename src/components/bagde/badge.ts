import { html , WebComponent , customElement , attr , attrState , state, css } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';

import BadgeStyle from '@patternfly/react-styles/css/components/Badge/badge.css'

@customElement({
  name : 'pf-badge',
  template : html`${( badge:PfBadge ) => {

    return html`<span class=${[
      "pf-v5-c-badge",
      badge.isRead ? "pf-m-read" : "pf-m-unread"
    ].join(' ')}>
      <slot></slot>
    </span>`;

  } }`,
  styles : [
    BaseStyle,
    css`${String(BadgeStyle)}`
  ],
  shadowOptions: { mode: 'open' }
})
export class PfBadge extends WebComponent{

  @attr readed : "true" | "false" | null = null;

  @state() isRead = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {

    if( name == "readed" ){
      this.isRead = newValue == "true" || newValue == "" ? true : false;
    }
    
    super.attributeChangedCallback( name , oldValue , newValue );

  }

}

export { BadgeStyle };