import { css } from '@lithium-framework/core';

export const BaseStyle:any = css`
  :host{
    display: block;
    position: relative;
  }

  :host([hidden]) { 
    display: none;
  }

  * {
    overflow: visible;
  }
`;