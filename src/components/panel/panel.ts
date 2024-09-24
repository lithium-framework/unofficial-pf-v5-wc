import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import PanelStyles from '@patternfly/react-styles/css/components/Panel/panel.css';
import { PfWebComponent } from '../../models/PfWebComponent';

@customElement({
  name: 'pf-panel',
  template: html`${(panel: PfPanel) => {
    return html`
    <div class=${[
      "pf-v5-c-panel",
      panel.isRaised ? "pf-m-raised" : "",
      panel.isBordered ? "pf-m-bordered" : "",
      panel.isScrollable ? "pf-m-scrollable" : ""
    ].filter(Boolean).join(' ')}>

      ${panel.isNoBody ? html`` : html`
        ${panel.isHeader ? html`
          <div class="pf-v5-c-panel__header">Header content</div>
          <hr class="pf-v5-c-divider" />
        ` : ''}

        ${panel.isScrollable ? html`<div class="pf-v5-c-panel__main" tabindex="0">
          <div class="pf-v5-c-panel__main-body">
            <slot name="body"></slot>
          </div>
        </div>` : ''}

        <div class="pf-v5-c-panel__main"
          <div class="pf-v5-c-panel__main-body">
            Main content
            <slot name="body"></slot>
          </div>
        </div>

        ${panel.isFooter ? html`
          <div class="pf-v5-c-panel__footer">
            Footer content
            <slot name="footer"></slot>
          </div>
        ` : ''}`
      }

    </div>`;
  }}`,
  styles: [
    BaseStyle,
    css`${String(PanelStyles)}`,
    css`
      pf-v5-c-panel pf-m-raised{
        background-color: red;
      }
    `
  ]
})





export class PfPanel extends PfWebComponent{
  @attr() header: "true" | "false" | null = null;
  @attr() footer: "true" | "false" | null = null;
  @attr() 'no-body': "true" | "false" | null = null;
  @attr() raised: "true" | "false" | null = null;
  @attr() bordered: "true" | "false" | null = null;
  @attr() scrollable: "true" | "false" | null = null;

  @state isHeader:boolean = false;
  @state isFooter:boolean = false;
  @state isNoBody:boolean = false;
  @state isRaised:boolean = false;
  @state isBordered:boolean = false;
  @state isScrollable:boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if( name == "header")this.isHeader = this.handleBooleanAttribute(name, newValue);
    if( name == "footer")this.isFooter = this.handleBooleanAttribute(name, newValue);
    if( name == "no-body")this.isNoBody = this.handleBooleanAttribute(name, newValue);
    if( name == "raised")this.isRaised = this.handleBooleanAttribute(name, newValue);
    if( name == "bordered")this.isBordered = this.handleBooleanAttribute(name, newValue);
    if( name == "scrollable")this.isScrollable = this.handleBooleanAttribute(name, newValue);

    super.attributeChangedCallback( name , oldValue , newValue );
  }
}