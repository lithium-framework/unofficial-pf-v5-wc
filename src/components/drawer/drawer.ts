import { html , customElement , WebComponent , css , state , attr } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';

import DrawerStyles from '@patternfly/react-styles/css/components/Drawer/drawer.css';
import { PfWebComponent } from '../../models/PfWebComponent';

@customElement({
  name : 'pf-drawer-close-button',
  template : html`${() => {

    return html`<div class="pf-v5-c-drawer__close">
      <button
        class="pf-v5-c-button pf-m-plain"
        type="button"
        aria-label="Close drawer panel"
      >
        <i class="fas fa-times" aria-hidden="true"></i>
      </button>
    </div>`;

  }}`,
  styles : [
    BaseStyle,
    css`${DrawerStyles}`,
  ]
})
export class PfDrawerCloseButton extends PfWebComponent{

}

@customElement({
  name : 'pf-drawer-action',
  template : html`${() => {

    return html`<div class="pf-v5-c-drawer__actions">
      <slot></slot>
    </div>`

  }}`,
  styles : [
    BaseStyle,
    css`${DrawerStyles}`,
  ]
})
export class PfDrawerAction extends PfWebComponent{

}

export const drawerTemplate = html`${( drawer : PfDrawer ) => {

  const body_template = html`<div class="pf-v5-c-drawer__body">
    <div class="pf-v5-c-drawer__head">
      <slot name = "panel" ></slot>
    </div>
  </div>`;

  return html`<div
      class=${[
        "pf-v5-c-drawer",
        drawer.isExpanded ? "pf-m-expanded" : null,
        drawer.isInline ? "pf-m-inline" : null,
        drawer.isStatic ? "pf-m-static" : null,
        drawer.isPanelRight ? "pf-m-panel-right" : null,
        drawer.isPanelBottom ? "pf-m-panel-bottom" : null,
        drawer.isPanelLeft ? "pf-m-panel-left" : null,
      ].filter( x  => x ).join(' ')}
    >
    <div class="pf-v5-c-drawer__main">
      <div class="pf-v5-c-drawer__content">
        <div class="pf-v5-c-drawer__body">
          <slot></slot>
        </div>
      </div>
      <div class=${["pf-v5-c-drawer__panel" , drawer.isResizable ? "pf-m-resizable" : null].filter(x => x).join(' ')} ?hidden = ${ !drawer.isExpanded }>

        ${
          drawer.isResizable ?
          html`<div
            class=${["pf-v5-c-drawer__splitter" , !drawer.isPanelBottom ? "pf-m-vertical" : null].filter( x => x ).join(' ')}
            role="separator"
            tabindex="0"
            aria-orientation=${ drawer.isPanelBottom ? "horizontal" : "vertical"}
            @mousedown=${ drawer.onResize }
          >
            <div class="pf-v5-c-drawer__splitter-handle"></div>
          </div>
          <div class="pf-v5-c-drawer__panel-main">
            ${body_template}
          </div>` :
          body_template
        }

      </div>
    </div>
  </div>`;

}}`;

@customElement({
  name : 'pf-drawer',
  template : drawerTemplate,
  styles : [
    BaseStyle,
    css`${DrawerStyles}`,
  ]
})
export class PfDrawer extends PfWebComponent{

  @attr() expanded : "true" | "false" | null = null;
  @attr() inline : "true" | "false" | null = null;
  @attr() static : "true" | "false" | null = null;
  @attr() resizable : "true" | "false" | null = null;
  @attr() 'panel-right' : "true" | "false" | null = null;
  @attr() 'panel-bottom' : "true" | "false" | null = null;
  @attr() 'panel-left' : "true" | "false" | null = null;

  @state() isExpanded : boolean = false;
  @state() isInline : boolean = false;
  @state() isStatic : boolean = false;
  @state() isResizable : boolean = false;
  @state() isPanelRight : boolean = false;
  @state() isPanelBottom : boolean = false;
  @state() isPanelLeft : boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {

    if( name == "expanded" && !this.isStatic )this.isExpanded = this.handleBooleanAttribute( name , newValue );
    if( name == "inline" )this.isInline = this.handleBooleanAttribute( name , newValue );
    if( name == "static" )this.isStatic = this.handleBooleanAttribute( name , newValue );
    if( name == "resizable" && !this.isStatic )this.isResizable = this.handleBooleanAttribute( name , newValue );
    if( name == "panel-right" ){
      this.isPanelRight = this.handleBooleanAttribute( name , newValue );
      if(this.isPanelBottom && this.isPanelRight)this.removeAttribute( 'panel-bottom' );
      if(this.isPanelLeft && this.isPanelRight)this.removeAttribute( 'panel-left' );
    }
    if( name == "panel-bottom" ){
      this.isPanelBottom = this.handleBooleanAttribute( name , newValue );
      if(this.isPanelRight && this.isPanelBottom)this.removeAttribute( 'panel-right' );
      if(this.isPanelLeft && this.isPanelBottom)this.removeAttribute( 'panel-left' );
    }
    if( name == "panel-left" ){
      this.isPanelLeft = this.handleBooleanAttribute( name , newValue );
      if(this.isPanelRight && this.isPanelLeft)this.removeAttribute( 'panel-right' );
      if(this.isPanelBottom && this.isPanelLeft)this.removeAttribute( 'panel-bottom' );
    }
    
    super.attributeChangedCallback( name , oldValue , newValue )
  }

  onResize(target: PfDrawer, { event }: { event: MouseEvent }) {
    
    // Récupère la référence du panneau et du conteneur parent
    const panel = target.shadowRoot?.querySelector('.pf-v5-c-drawer__panel') as HTMLElement;
    const mainContainer = target.shadowRoot?.querySelector('.pf-v5-c-drawer__main') as HTMLElement;
  
    // Si le panneau ou le conteneur parent n'existe pas, on sort de la fonction
    if (!panel || !mainContainer) return;
  
    // Récupérer les transformations déjà appliquées (si existantes)
    const style = window.getComputedStyle(panel);
    const matrix = new DOMMatrixReadOnly(style.transform);
  
    // Récupérer les valeurs de translation initiales (X et Y)
    let initialTranslateX = matrix.m41 || 0; // translation X initiale (valeur par défaut 0)
    let initialTranslateY = matrix.m42 || 0; // translation Y initiale (valeur par défaut 0)
  
    // Position initiale de la souris (en fonction de la direction du panneau)
    const initialMousePosition = target.isPanelBottom ? event.clientY : event.clientX;
    
    // Taille initiale du panneau (hauteur ou largeur)
    const initialPanelSize = target.isPanelBottom ? panel.offsetHeight : panel.offsetWidth;
  
    const onMouseMove = (moveEvent: MouseEvent) => {
      // Récupérer la position actuelle de la souris
      let currentMousePosition = target.isPanelBottom ? moveEvent.clientY : moveEvent.clientX;
      
      // Calculer le delta de mouvement de la souris par rapport à la position initiale
      let deltaMousePosition = currentMousePosition - initialMousePosition;
  
      // Appliquer le transform en fonction de la direction (vertical/horizontal)
      if (target.isPanelBottom) {
        // Calculer le delta de redimensionnement pour le panneau en bas
        let resizeDelta = deltaMousePosition - initialPanelSize; // Différence par rapport à la taille initiale
        let translateY = initialTranslateY + initialPanelSize; // Nouvelle position Y à appliquer
        let finalValue = translateY + resizeDelta; // Valeur finale après redimensionnement
  
        // Appliquer le transform seulement si la valeur finale est dans la limite
        if (finalValue > -initialPanelSize) panel.style.transform = `translateY(${finalValue}px)`;
      }
      else if (target.isPanelRight) {
        // Calculer le delta de redimensionnement pour le panneau à droite
        let resizeDelta = deltaMousePosition - initialPanelSize; // Différence par rapport à la taille initiale
        let translateX = initialTranslateX + initialPanelSize; // Nouvelle position X à appliquer
        let finalValue = translateX + resizeDelta; // Valeur finale après redimensionnement
  
        // Appliquer le transform seulement si la valeur finale est dans la limite
        if (finalValue > -initialPanelSize) panel.style.transform = `translateX(${finalValue}px)`;
      }
      else if (target.isPanelLeft) {
        // Calculer le delta de redimensionnement pour le panneau à gauche
        let resizeDelta = deltaMousePosition - initialPanelSize; // Différence par rapport à la taille initiale
        let translateX = initialTranslateX - initialPanelSize; // Nouvelle position X à appliquer (négatif pour aller à gauche)
        let finalValue = translateX + resizeDelta; // Valeur finale après redimensionnement
  
        // Appliquer le transform seulement si la valeur finale est dans la limite
        if (finalValue < initialPanelSize) panel.style.transform = `translateX(${finalValue}px)`;
      }
    };
  
    const onMouseUp = (moveEvent: MouseEvent) => {
      // Supprime les écouteurs après la fin du redimensionnement
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  
    // Ajoute les écouteurs pour suivre les mouvements de la souris et la fin du redimensionnement
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

}
export { DrawerStyles }