import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import MastheadStyles from '@patternfly/react-styles/css/components/Masthead/masthead.css';
import { PfWebComponent } from '../../models/PfWebComponent';

import { BaseStyle } from '../../css/base';

@customElement({
  name: 'pf-masthead',
  template: html`${(masthead: PfMasthead) => {

    return html`
      <header 
        part = "wrapper"
        class=${[
          "pf-v5-c-masthead",
          masthead.isDisplayStack ? 'pf-m-display-stack': 'pf-m-display-inline',
          masthead.isLight ? 'pf-m-light': null,
          masthead.isInsets ? 'pf-m-inset-sm': null,
        ].filter( x => x ).join(' ')}>
          ${
            !masthead.isNoIcon ?
            html`
              <span class="pf-v5-c-masthead__toggle" part = "toggle" >
                <slot name="toggle-icon"></slot>
              </span>
            ` :
            html``
          }
          ${
            !masthead.isNoBranding ?
            html`
              <div class="pf-v5-c-masthead__main" part = "main" >
                <a class="pf-v5-c-masthead__brand" href="#" part = "content" >
                  <slot name="brand"></slot>
                </a>
              </div>
            ` :
            html``
          }
          <div class="pf-v5-c-masthead__content" part = "content" >
            <div class="pf-v5-l-flex" part = "container" >
              <slot></slot>
            </div>
          </div>
      </header>
    `;

  }}`,
  styles: [
    css`${ BaseStyle }`,
    css`${String(MastheadStyles)}`,
  ],
  shadowOptions: { mode: 'open' }
})
export class PfMasthead extends PfWebComponent{

  @attr() 'no-toggle': "true" | "false" | null = null;
  @attr() 'no-branding': "true" | "false" | null = null;
  @attr() 'display-stack': "true" | "false" | null = null;
  @attr() 'light': "true" | "false" | null = null;
  @attr() 'insets': "true" | "false" | null = null;

  @state() isNoIcon:boolean = false;
  @state() isNoBranding:boolean = false;
  @state() isDisplayStack:boolean = false;
  @state() isLight:boolean = false;
  @state() isInsets:boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {

    if( name == "no-toggle")this.isNoIcon = this.handleBooleanAttribute(name, newValue);
    if( name == "no-branding")this.isNoBranding = this.handleBooleanAttribute(name, newValue);
    if( name == "display-stack")this.isDisplayStack = this.handleBooleanAttribute(name, newValue);
    if( name == "light")this.isLight = this.handleBooleanAttribute(name, newValue);
    if( name == "insets")this.isInsets = this.handleBooleanAttribute(name, newValue);

    super.attributeChangedCallback( name , oldValue , newValue );
  }

}