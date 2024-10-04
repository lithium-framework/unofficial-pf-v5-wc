import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import AlertStyles from '@patternfly/react-styles/css/components/Alert/alert.css';
import { PfWebComponent } from '../../models/PfWebComponent';
import  'unofficial-pf-v5-wc-icons';


@customElement({
  name: 'pf-alert',
  template: html`${(alert: PfAlert) => {

    return html`
      <div class='pf-alert'>
        <div class="${[
          'pf-v5-c-alert',
          alert.isCustom ? 'pf-m-custom' : '',
          alert.isInfo ? 'pf-m-info' : '',
          alert.isSuccess ? 'pf-m-success' : '',
          alert.isWarning ? 'pf-m-warning' : '',
          alert.isDanger ? 'pf-m-danger' : ''
        ].join(' ')}">
          <div class="pf-v5-c-alert__icon">
            ${alert.isCustom ? html`<pf-icons-bell></pf-icons-bell>` : ''}
            ${alert.isInfo ? html`<pf-icons-info-circle></pf-icons-info-circle>` : ''}
            ${alert.isSuccess ? html`<pf-icons-check-circle></pf-icons-check-circle>` : ''}
            ${alert.isWarning ? html`<pf-icons-exclamation-triangle></pf-icons-exclamation-triangle>` : ''}
            ${alert.isDanger ? html`<pf-icons-exclamation-circle></pf-icons-exclamation-circle>` : ''}
          </div>
          <p class="pf-v5-c-alert__title">
            <slot name="content"></slot>
          </p>
        </div>
      </div>
    `;
  }}`,
  styles: [
    BaseStyle,
    css`${String(AlertStyles)}`,
    css`
      .pf-v5-c-alert {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }
    `
  ],
  shadowOptions: { mode: 'open' }
})

export class PfAlert extends PfWebComponent{

  @attr() custom: "true" | "false" | null = null;
  @attr() info: "true" | "false" | null = null;
  @attr() success: "true" | "false" | null = null;
  @attr() warning: "true" | "false" | null = null;
  @attr() danger: "true" | "false" | null = null;

  @state() isCustom:boolean = false;
  @state() isInfo:boolean = false;
  @state() isSuccess:boolean = false;
  @state() isWarning:boolean = false;
  @state() isDanger:boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if( name == "custom")this.isCustom = this.handleBooleanAttribute(name, newValue);
    if( name == "info")this.isInfo = this.handleBooleanAttribute(name, newValue);
    if( name == "success")this.isSuccess = this.handleBooleanAttribute(name, newValue);
    if( name == "warning")this.isWarning = this.handleBooleanAttribute(name, newValue);
    if( name == "danger")this.isDanger = this.handleBooleanAttribute(name, newValue);

    super.attributeChangedCallback( name , oldValue , newValue );
  }
}