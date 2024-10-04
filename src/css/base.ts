import { css } from '@lithium-framework/core';

export const BaseStyle:any = css`
  :host{
    display: block;
    contain: content;
  }

  :host([hidden]) { 
    display: none;
  }
`;