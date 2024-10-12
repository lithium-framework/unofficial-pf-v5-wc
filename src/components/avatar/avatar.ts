import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import AlertStyles from '@patternfly/react-styles/css/components/Alert/alert.css';
import { PfWebComponent } from '../../models/PfWebComponent';

@customElement({
  name: 'pf-avatar',
  template: html`${(avatar: PfAvatar) => {

    return html`<div 
        class="pf-v5-c-avatar pf-m-light"
        alt="Avatar image light"
        part = "wrapper">
        <pf-icons-user-circle part = "icon" >

        </pf-icons-user-circle>
    </div>`

  }}`
})
export class PfAvatar extends PfWebComponent{

  @attr() 'bordered-light': "true" | "false" | null = null;
  @attr() 'bordered-dark': "true" | "false" | null = null;
  @attr() small: "true" | "false" | null = null;
  @attr() medium: "true" | "false" | null = null;
  @attr() large: "true" | "false" | null = null;
  @attr() extra: "true" | "false" | null = null;

  @state() isBorderedLight:boolean = false;
  @state() isBorderedDark:boolean = false;
  @state() isSmall:boolean = false;
  @state() isMedium:boolean = false;
  @state() isLarge:boolean = false;
  @state() isExtra:boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    
    if( name == "bordered-light")this.isBorderedLight = this.handleBooleanAttribute(name, newValue);
    if( name == "bordered-dark")this.isBorderedDark = this.handleBooleanAttribute(name, newValue);
    if( name == "small")this.isSmall = this.handleBooleanAttribute(name, newValue);
    if( name == "medium")this.isMedium = this.handleBooleanAttribute(name, newValue);
    if( name == "large")this.isLarge = this.handleBooleanAttribute(name, newValue);
    if( name == "extra")this.isExtra = this.handleBooleanAttribute(name, newValue);

    super.attributeChangedCallback( name , oldValue , newValue );
  }
}
