import { css } from '@lithium-framework/core';

export const BaseStyle = css`
  :host{
    display: inline-block;
    contain: content;
  }

  :host([hidden]) { 
    display: none;
  }
`;