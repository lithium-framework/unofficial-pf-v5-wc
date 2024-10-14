import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import PageStyles from '@patternfly/react-styles/css/components/Page/page.css';
import { BaseStyle } from '../../css/base';
import { PfWebComponent } from '../../models/PfWebComponent';

@customElement({
  name: 'pf-page',
  template: html`${(page: PfPage) => {

    return html`
      <div class="pf-v5-c-page" part = "wrapper" >
        <pf-masthead
          ?no-toggle = ${ page.isNoMasterheadIcon }
          ?no-branding = ${ page.isNoMasterheadBranding }
          ?display-stack = ${ page.isMasterheadStack }
          ?light = ${ page.isMasterheadLight }
          ?insets = ${ page.isMasterheadInsets }
          part = "header"
        >
          <div slot = "icon-toggle" part = "toggle">
            <slot name = "masthead-icon-toggle" >

            </slot>
          </div>
          <slot name = "masthead-content">

          </slot>
        </pf-masthead>
        <pf-drawer
          ?expanded = ${ page.isDrawerExpanded }
          ?inline = ${ page.isDrawerInline }
          ?static = ${ page.isDrawerStatic }
          ?resizable = ${ page.isDrawerResizable }
          ?panel-right = ${ page.isDrawerPanelRight }
          ?panel-bottom = ${ page.isDrawerPanelBottom }
          ?panel-left = ${ page.isDrawerPanelLeft }
          part = "main"
        >
          ${
            !page.isNoDrawerPanelHeader ?
            html`<div slot = "panel-header" part = "panel-header" >
              <slot name = "drawer-panel-header" >

              </slot>
            </div>` :
            html``
          }
          <div slot = "panel" part = "panel" >
            <slot name = "drawer-panel" >

            </slot>
          </div>
          <slot>

          </slot>
        </pf-drawer>
      </div>
    `;

  }}`,
  styles : [
    css`${BaseStyle}`,
    css`${String(PageStyles)}`,
    css`
      :host{
        height: 100%;
        width: 100%;
      }
      .pf-v5-c-page{
        display: grid;
        grid-template-rows: min-content minmax(0, 1fr);
        grid-template-areas: none;
        grid-template-columns: 1fr;
      }
      pf-drawer::part(body){
        padding: 0px;
        display: grid;
      }
      pf-drawer::part(panel){
        max-width: var(--page-drawer-panel_max-width);
      }
    `
  ]
})

export class PfPage extends PfWebComponent{

  @attr "drawer-expanded" : "true" | "false" | null = null;
  @attr "drawer-no-panel-header" : "true" | "false" | null = null;
  @attr "drawer-panel-right" : "true" | "false" | null = null;
  @attr "drawer-panel-bottom" : "true" | "false" | null = null;
  @attr "drawer-panel-left" : "true" | "false" | null = null;
  @attr "drawer-inline" : "true" | "false" | null = null;
  @attr "drawer-resizable" : "true" | "false" | null = null;
  @attr "drawer-static" : "true" | "false" | null = null;
  @attr "masterhead-stack" : "true" | "false" | null = null;
  @attr "masterhead-light" : "true" | "false" | null = null;
  @attr "masterhead-insets" : "true" | "false" | null = null;
  @attr "masterhead-no-icon" : "true" | "false" | null = null;
  @attr "masterhead-no-branding" : "true" | "false" | null = null;

  @state() isDrawerExpanded : boolean = false; 
  @state() isNoDrawerPanelHeader : boolean = false; 
  @state() isDrawerPanelRight : boolean = false; 
  @state() isDrawerPanelBottom : boolean = false; 
  @state() isDrawerPanelLeft : boolean = false; 
  @state() isDrawerInline : boolean = false; 
  @state() isDrawerResizable : boolean = false; 
  @state() isDrawerStatic : boolean = false; 
  @state() isMasterheadStack : boolean = false; 
  @state() isMasterheadLight : boolean = false; 
  @state() isMasterheadInsets : boolean = false; 
  @state() isNoMasterheadIcon : boolean = false; 
  @state() isNoMasterheadBranding : boolean = false; 

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {

    if( name == "drawer-expanded" )this.isDrawerExpanded = this.handleBooleanAttribute(name, newValue);
    if( name == "drawer-no-panel-header" )this.isNoDrawerPanelHeader = this.handleBooleanAttribute(name, newValue);
    if( name == "drawer-panel-right" )this.isDrawerPanelRight = this.handleBooleanAttribute(name, newValue);
    if( name == "drawer-panel-bottom" )this.isDrawerPanelBottom = this.handleBooleanAttribute(name, newValue);
    if( name == "drawer-panel-left" )this.isDrawerPanelLeft = this.handleBooleanAttribute(name, newValue);
    if( name == "drawer-inline" )this.isDrawerInline = this.handleBooleanAttribute(name, newValue);
    if( name == "drawer-resizable" )this.isDrawerResizable = this.handleBooleanAttribute(name, newValue);
    if( name == "drawer-static" )this.isDrawerStatic = this.handleBooleanAttribute(name, newValue);
    if( name == "masterhead-stack" )this.isMasterheadStack = this.handleBooleanAttribute(name, newValue);
    if( name == "masterhead-light" )this.isMasterheadLight = this.handleBooleanAttribute(name, newValue);
    if( name == "masterhead-insets" )this.isMasterheadInsets = this.handleBooleanAttribute(name, newValue);
    if( name == "masterhead-no-icon" )this.isNoMasterheadIcon = this.handleBooleanAttribute(name, newValue);
    if( name == "masterhead-no-branding" )this.isNoMasterheadBranding = this.handleBooleanAttribute(name, newValue);

    super.attributeChangedCallback( name , oldValue , newValue );
  }

}