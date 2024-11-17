import { html , css , customElement , attr , state } from '@lithium-framework/core';
import { PfWebComponent } from '../../models';

import TreeviewStyles from '@patternfly/react-styles/css/components/TreeView/tree-view.css';
import { BaseStyle } from '../../css/base';

@customElement({
  name : 'pf-tree-view-item',
  template : html`${(treeViewItem:PfTreeViewItem) => {

    return html`<li
      class=${[
        "pf-v5-c-tree-view__list-item", 
        treeViewItem.isExpanded ? "pf-m-expanded" : null
      ].filter( x => x ).join(' ')}
      role="treeitem"
      aria-selected=${treeViewItem.isSelected ? "true" : "false"}
      aria-expanded=${treeViewItem.isExpanded ? "true" : "false"}
      tabindex="0"
    >
      <div class="pf-v5-c-tree-view__content">
        <button class="pf-v5-c-tree-view__node" @mousedown = ${context => {
          console.log({ context , treeViewItem })
          return treeViewItem.handleSelect as any;
        }}>
          <span class="pf-v5-c-tree-view__node-container">
            ${
              !treeViewItem.isNoToggle ?
              html`<span class="pf-v5-c-tree-view__node-toggle">
                <span class="pf-v5-c-tree-view__node-toggle-icon" @mousedown = ${treeViewItem.handleToggle} >
                  <pf-icons-angle-right></pf-icons-angle-right>
                </span>
              </span>` :
              html``
            }
            <span class="pf-v5-c-tree-view__node-text"><slot name = "label"></slot></span>
          </span>
        </button>

        ${
          !treeViewItem.isNoAction ?
          html`<div class="pf-v5-c-tree-view__action">
            <slot name = "action" ></slot>
          </div>` :
          html``
        }

      </div>
      <ul class="pf-v5-c-tree-view__list" role="group">
        <slot></slot>
      </ul>
    </li>`

  }}`,
  styles : [
    BaseStyle,
    css`${TreeviewStyles}`,
    css`
      :host{
        list-style: none;
      }

      .pf-v5-c-tree-view__node-toggle{
        margin : 0;
      }

      .pf-v5-c-tree-view__list-item .pf-v5-c-tree-view__list{
        max-height: 0;
        overflow: hidden;
        margin-top: 0;
      }

      .pf-v5-c-tree-view__list-item.pf-m-expanded .pf-v5-c-tree-view__list{
        max-height: fit-content;
        overflow: visible;
        margin-top: 1em;
      }

      .pf-v5-c-tree-view__node-text{
        width: 100%;
      }
    `
  ]
})
export class PfTreeViewItem extends PfWebComponent{

  @attr() expanded : "true" | "false" | null = null;
  @attr() selected : "true" | "false" | null = null;
  @attr() "no-toggle" : "true" | "false" | null = null;
  @attr() "no-action" : "true" | "false" | null = null;

  @attr({
    attribute: "handle-select",
    mode: "fromView"
  }) handleSelect = null;

  @state() isExpanded : boolean = false;
  @state() isSelected : boolean = false;
  @state() isNoToggle : boolean = false;
  @state() isNoAction : boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {

    if(name == "expanded")this.isExpanded = this.handleBooleanAttribute( name , newValue );
    if(name == "selected")this.isSelected = this.handleBooleanAttribute( name , newValue );
    if(name == "no-toggle")this.isNoToggle = this.handleBooleanAttribute( name , newValue );
    if(name == "no-action")this.isNoAction = this.handleBooleanAttribute( name , newValue );

    super.attributeChangedCallback( name , oldValue , newValue );
  }

  handleToggle = () => {
    this.expanded = `${!this.isExpanded}`;
  };

}

@customElement({
  name : 'pf-tree-view',
  template : html`${() => {

    return html`<div class="pf-v5-c-tree-view">
      <ul
          class="pf-v5-c-tree-view__list"
          role="tree"
          aria-label="Tree View single selectable example"
        >
          <slot></slot>
      </ul>
    </div>`;

  }}`,
  styles : [
    BaseStyle,
    css`${TreeviewStyles}`,
    css`
      .pf-v5-c-tree-view__list {
        padding: 0;
      }
    `
  ]
})
export class PfTreeView extends PfWebComponent{

}