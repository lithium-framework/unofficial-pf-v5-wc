import { customElement , html , css, attr, state } from '@lithium-framework/core';

import { BaseStyle } from '../../css/base';
import EmptyStateStyle from '@patternfly/react-styles/css/components/EmptyState/empty-state.css';
import { PfWebComponent } from '../../models';

@customElement({
  name : 'pf-empty-state-actions',
  template : html`${() => {

    return html`<div class="pf-v5-c-empty-state__actions">
      <slot>

      </slot>
    </div>`;

  }}`,
  styles : [
    css`${BaseStyle}`,
    css`${EmptyStateStyle}`
  ]
})
export class PfEmptyStateActions extends PfWebComponent{



}

@customElement({
  name : 'pf-empty-state',
  template : html`${( emptyState:PfEmptyState ) => {

    return html`<div class="pf-v5-c-empty-state">
      <div class="pf-v5-c-empty-state__content">

        ${
          !emptyState.isNoHeader ?
          html`<div class="pf-v5-c-empty-state__header">

            ${
              !emptyState.isNoIcon ?
              html`<div class="pf-v5-c-empty-state__icon">
                <slot name = "icon">

                </slot>
              </div>` :
              html``
            }

            ${
              !emptyState.isNoTitle ?
              html`<div class="pf-v5-c-empty-state__title">
                <h1 class="pf-v5-c-empty-state__title-text">
                  <slot name = "title">
                    
                  </slot>
                </h1>
              </div>` :
              html``
            }

          </div>` :
          html``
        }

        ${
          !emptyState.isNoBody ?
          html`<div class="pf-v5-c-empty-state__body">
            <slot>

            </slot>
          </div>` :
          html``
        }

        ${
          !emptyState.isNoFooter ?
          html`<div class="pf-v5-c-empty-state__footer">
            <slot name = "footer">

            </slot>
          </div>` :
          html``
        }

      </div>
    </div>`;

  }}`,
  styles : [
    css`${BaseStyle}`,
    css`${EmptyStateStyle}`
  ]
})
export class PfEmptyState extends PfWebComponent{

  @attr() 'no-header' : "true" | "false" | null = null;
  @attr() 'no-icon' : "true" | "false" | null = null;
  @attr() 'no-title' : "true" | "false" | null = null;
  @attr() 'no-body' : "true" | "false" | null = null;
  @attr() 'no-footer' : "true" | "false" | null = null;

  @state() isNoHeader : boolean = false;
  @state() isNoIcon : boolean = false;
  @state() isNoTitle : boolean = false;
  @state() isNoBody : boolean = false;
  @state() isNoFooter : boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {

    if(name == "no-header")this.isNoHeader = this.handleBooleanAttribute( name , newValue );
    if(name == "no-icon")this.isNoIcon = this.handleBooleanAttribute( name , newValue );
    if(name == "no-title")this.isNoTitle = this.handleBooleanAttribute( name , newValue );
    if(name == "no-body")this.isNoBody = this.handleBooleanAttribute( name , newValue );
    if(name == "no-footer")this.isNoFooter = this.handleBooleanAttribute( name , newValue );
    
    super.attributeChangedCallback( name , oldValue , newValue );
  }

}