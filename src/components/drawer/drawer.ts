import { html , customElement , WebComponent , css , state , attr } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';

import DrawerStyles from '@patternfly/react-styles/css/components/Drawer/drawer.css';
import { PfWebComponent } from '../../models/PfWebComponent';

export const drawerTemplate = html`${( drawer : PfDrawer ) => {

  console.log({ drawer })

  return html`<div
      class=${[
        "pf-v5-c-drawer",
        drawer.isExpanded ? "pf-m-expanded" : null
      ].filter( x  => x ).join(' ')}
    >
    <div class="pf-v5-c-drawer__main">
      <div class="pf-v5-c-drawer__content">
        <div
          class="pf-v5-c-drawer__body"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
      </div>
      <div class="pf-v5-c-drawer__panel" ?hidden = ${ !drawer.isExpanded }>
        <div class="pf-v5-c-drawer__body">
          <div class="pf-v5-c-drawer__head">
            <span>drawer-panel</span>
            <div class="pf-v5-c-drawer__actions">
              <div class="pf-v5-c-drawer__close">
                <button
                  class="pf-v5-c-button pf-m-plain"
                  type="button"
                  aria-label="Close drawer panel"
                >
                  <i class="fas fa-times" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

}}`;

@customElement({
  name : 'pf-drawer',
  template : drawerTemplate,
  styles : [
    BaseStyle,
    css`${DrawerStyles}`
  ]
})
export class PfDrawer extends PfWebComponent{

  @attr() expanded : "true" | "false" | null = null;

  @state() isExpanded : boolean = true;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {

    if( name == "expanded" )this.isExpanded = this.handleBooleanAttribute( name , newValue );
    
    super.attributeChangedCallback( name , oldValue , newValue )
  }

}
export { DrawerStyles }