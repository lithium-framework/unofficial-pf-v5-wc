import { html, WebComponent , customElement, css, ViewTemplate , state, attr , ref , createRef } from "@lithium-framework/core";

import DropDownStyles from '@patternfly/react-styles/css/components/Dropdown/dropdown.css';
import { BaseStyle } from "../../css/base";
import { PfWebComponent } from "../../models/PfWebComponent";
import { PfMenu } from "../menu/menu";

@customElement({
  name : 'pf-dropdown-menu-item',
  template : html`${( item:PfDropDownMenuItem ) => {

    return html`<li role="none">
      ${ 
        item.isLink? 
        html`<a 
          class=${[
            "pf-v5-c-dropdown__menu-item",
            item.isDisabled ? "pf-m-disabled" : "",
            item.isAreaDisabled ? "pf-m-aria-disabled" : ""
          ].filter( x => x ).join(' ')}
          role="menuitem" 
          href=${`${item.link}`}>
            <slot></slot>
        </a>` :
        html`<button
          class=${[
            "pf-v5-c-dropdown__menu-item",
            item.isDisabled ? "pf-m-disabled" : "",
            item.isAreaDisabled ? "pf-m-aria-disabled" : ""
          ].filter( x => x ).join(' ')}
          role="menuitem"
          type="button">
            <slot></slot>
        </button>`
      }
    </li>`

  }}`,
  styles : [
    BaseStyle,
    css`${DropDownStyles}`,
    css`
      :host{
        display: block;
      }
    `
  ]
})
export class PfDropDownMenuItem extends PfWebComponent{

  @attr disabled : "true" | "false" | null = null;
  @attr "area-disabled" : "true" | "false" | null = null;
  @attr link : "string" | null = null;

  @state() isDisabled = false;
  @state() isAreaDisabled = false;
  @state() isLink = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {

    if(name == "disabled")this.isDisabled = this.handleBooleanAttribute( name , newValue );
    if(name == "area-disabled")this.isAreaDisabled = this.handleBooleanAttribute( name , newValue );
    else if( name == "link" )this.isLink = this.handleBooleanAttribute( name , newValue );
    
    super.attributeChangedCallback( name , oldValue , newValue );
  }

}

@customElement({
  name : 'pf-dropdown-menu',
  template : html`${( menu : PfDropDownMenu ) => {

    return html`<ul
      class="pf-v5-c-dropdown__menu"
      aria-labelledby="dropdown-expanded-button"
      role="menu"
    >
      <slot></slot>
    </ul>`

  }}`,
  styles : [
    css`${DropDownStyles}`,
    css`
      .pf-v5-c-dropdown__menu{
        padding: 8px;
        margin: 0;
      }
    `
  ]
})
export class PfDropDownMenu extends PfWebComponent{

  @state() direction : "up" | "down" = "down";
  @state() maxWidth : string = "";
  @state() minWidth : string = "";
  @state() position : 'right' | 'left' | 'center' | 'start' | 'end' = "center";
  @state() width : string = "";

}

@customElement({
  name : 'pf-dropdown',
  template : html`${( dropdown:PfDropDown ) => {

    return html`<div 
      class=${[
        "pf-v5-c-dropdown",
        dropdown.isExpanded ? "pf-m-expanded" : null,
        `dropdown-direction-${dropdown.direction}`,
        `dropdown-position-${dropdown.position}`
      ].filter( x => x ).join(' ')}>
        <pf-menu-toggle 
          @mousedown = ${( ) => { dropdown.expanded = String(!dropdown.isExpanded) as any }} 
          ?plain = ${ dropdown.isPlain }
          ?icon = ${ dropdown.isPlain }>
            <pf-icons-ellipsis-v slot = "icon"></pf-icons-ellipsis-v>
            <slot name = "label" ></slot>
          </pf-menu-toggle>
        <div class = "pf-v5-c-dropdown__container" >
          <ul
            class="pf-v5-c-dropdown__menu"
            aria-labelledby="dropdown-expanded-button"
            role="menu"
          >
            <slot></slot>
          </ul>
        </div>
      </div>`

  }}`,
  styles : [
    css`${DropDownStyles}`,
    css`
      .pf-v5-c-dropdown{
        display : flex;
        flex-direction: column;
        overflow: visible;
      }

      pf-menu-toggle{
        width: fit-content;
        order: 1;
      }

      .pf-v5-c-dropdown__container{
        height: 0;
        width: 100%;
        overflow: visible;
        display: none;
        order: 1;
      }

      .pf-v5-c-dropdown.pf-m-expanded > .pf-v5-c-dropdown__container{
        display: block;
      }

      .pf-v5-c-dropdown__menu{
        padding: 8px;
        margin: 0;
      }

      .dropdown-direction-up{
        flex-direction: column-reverse;
      }

      .dropdown-direction-up .pf-v5-c-dropdown__menu{
        position: relative !important;
        transform: translateY(-102%);
        padding-bottom: 8px;
      }
    `
  ]
})
export class PfDropDown extends PfWebComponent{

  @attr() expanded : "true" | "false" | null = null;
  @attr() plain : "true" | "false" | null = null;

  @state() isExpanded = false;
  @state() isPlain = false;

  @state() direction : "up" | "down" = "down";
  @state() maxWidth : string = "";
  @state() minWidth : string = "";
  @state() position : 'right' | 'left' | 'center' | 'start' | 'end' = "center";
  @state() width : string = "";

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {

    if( name == "expanded" )this.isExpanded = this.handleBooleanAttribute( name , newValue );
    if( name == "plain" )this.isPlain = this.handleBooleanAttribute( name , newValue );
    
    super.attributeChangedCallback( name , oldValue , newValue );
  }

  connectedCallback(): void {

    const handlePosition = () => {
      let { x , y } = this.getBoundingClientRect();
      let screen_height = document.body.clientHeight;
      if( screen_height / 2 > y )this.direction = "down";
      else this.direction = "up";
    }

    document.addEventListener( "scroll" , handlePosition)
    document.addEventListener( "resize" , handlePosition)

    handlePosition();

    super.connectedCallback();
    
  }

}