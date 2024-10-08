import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import MastheadStyles from '@patternfly/react-styles/css/components/Masthead/masthead.css';
import { PfWebComponent } from '../../models/PfWebComponent';
import  'unofficial-pf-v5-wc-icons';

@customElement({
  name: 'pf-masthead',
  template: html`${(masthead: PfMasthead) => {
    return html`
    <header class=${[
      "pf-v5-c-masthead",
      masthead.isDisplayInline ? 'pf-m-display-inline': '',
      masthead.isDisplayStack ? 'pf-m-display-stack': '',
      masthead.isLight ? 'pf-m-light': '',
      masthead.isInsets ? 'pf-m-inset-sm': '',
    ].join(' ')}>
      ${masthead.isMixedContent ? html`<span class="pf-v5-c-masthead__toggle">
        <slot name="toggle-icon"></slot>
      </span>
      <div class="pf-v5-c-masthead__main">
        <a class="pf-v5-c-masthead__brand" href="#">
          <slot name="brand"></slot>
        </a>
      </div>
      <div class="pf-v5-c-masthead__content">
        <div class="pf-v5-l-flex">
          <slot></slot>
        </div>
      </div>`: html`<span class="pf-v5-c-masthead__toggle">
        <slot name="toggle-icon"></slot>
      </span>
      <div class="pf-v5-c-masthead__main">
        <a class="pf-v5-c-masthead__brand" href="#">
          <slot name="brand"></slot>
        </a>
      </div>`}
    </header>`
  }}`,
  styles: [
    css`${String(MastheadStyles)}`,
    css`
    .pf-v5-c-masthead{
      padding-right: 20px !important
    }  
    .pf-v5-c-masthead__toggle > slot{
      padding-right: 10px;
      display: inline-flex;
      gap: 10px;
    }
    .pf-v5-c-masthead__toggle{
      padding-left: 20px !important;
    }
    .pf-v5-c-masthead__brand {
    display: inline-flex !important;
    align-self: center !important;
    text-decoration: none !important;
    }
    .pf-v5-c-masthead__content > .pf-v5-l-flex{
      display: flex;
      align-items: center;
    }
    .pf-v5-c-masthead__content > .pf-v5-l-flex > slot{
      display: inline-flex;
      gap: 10px;
      align-items: center;
      padding: 10px;
    }
    `
  ],
  shadowOptions: { mode: 'open' }
})
export class PfMasthead extends PfWebComponent{

  @attr() 'mixed-content': "true" | "false" | null = null;
  @attr() 'display-inline': "true" | "false" | null = null;
  @attr() 'display-stack': "true" | "false" | null = null;
  @attr() 'responsive': "true" | "false" | null = null;
  @attr() 'light': "true" | "false" | null = null;
  @attr() 'insets': "true" | "false" | null = null;

  @state() isMixedContent:boolean = false;
  @state() isDisplayInline:boolean = false;
  @state() isDisplayStack:boolean = false;
  @state() isResponsive:boolean = false;
  @state() isLight:boolean = false;
  @state() isInsets:boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if( name == "mixed-content")this.isMixedContent = this.handleBooleanAttribute(name, newValue);
    if( name == "display-inline")this.isDisplayInline = this.handleBooleanAttribute(name, newValue);
    if( name == "display-stack")this.isDisplayStack = this.handleBooleanAttribute(name, newValue);
    if( name == "responsive")this.isResponsive = this.handleBooleanAttribute(name, newValue);
    if( name == "light")this.isLight = this.handleBooleanAttribute(name, newValue);
    if( name == "insets")this.isInsets = this.handleBooleanAttribute(name, newValue);

    super.attributeChangedCallback( name , oldValue , newValue );
  }

}