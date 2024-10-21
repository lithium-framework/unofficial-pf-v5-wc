import { html , customElement , WebComponent , css , state , attr, effect , ref , createRef } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';

import DrawerStyles from '@patternfly/react-styles/css/components/Drawer/drawer.css';
import { PfWebComponent } from '../../models/PfWebComponent';

@customElement({
  name : 'pf-drawer-close-button',
  template : html`${() => {

    return html`<div class="pf-v5-c-drawer__close" part = "wrapper" >
      <button
        class="pf-v5-c-button pf-m-plain"
        type="button"
        aria-label="Close drawer panel"
        part = "button"
      >
        <i class="fas fa-times" aria-hidden="true" part = "icon" ></i>
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

    return html`<div class="pf-v5-c-drawer__actions" part = "controller" >
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

  const body_template = html`<div class="pf-v5-c-drawer__body" part = "body" >

    ${
      !drawer.isNoPanelHead ?
      html`<div class="pf-v5-c-drawer__head" part = "head" >
        <slot name = "panel-header" ></slot>
      </div>` :
      html``
    }

    <slot name = "panel" ></slot>

  </div>`;

  return html`<div
      ${ref( drawer.$wrapper )}
      part = "wrapper"
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
    <div class="pf-v5-c-drawer__main" part = "main" >
      <div class="pf-v5-c-drawer__content" part = "content" >
        <div class="pf-v5-c-drawer__body" part = "body" >
          <slot></slot>
        </div>
      </div>
      <div 
        part = "panel"
        class=${[
          "pf-v5-c-drawer__panel" , 
          drawer.isResizable ? "pf-m-resizable" : null
        ].filter(x => x).join(' ')} 
        ?hidden = ${ !drawer.isExpanded }>

        ${
          drawer.isResizable ?
          html`<div
            part = "controller"
            class=${["pf-v5-c-drawer__splitter" , !drawer.isPanelBottom ? "pf-m-vertical" : null].filter( x => x ).join(' ')}
            role="separator"
            tabindex="0"
            aria-orientation=${ drawer.isPanelBottom ? "horizontal" : "vertical"}
            @mousedown=${ drawer.onResize }
          >
            <div class="pf-v5-c-drawer__splitter-handle" part = "toggle" ></div>
          </div>
          <div class="pf-v5-c-drawer__panel-main" part = "main" >
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
  @attr() 'no-panel-head' : "true" | "false" | null = null;

  @state({ lazy : true }) isExpanded : boolean = false;
  @state({ lazy : true }) isInline : boolean = false;
  @state({ lazy : true }) isStatic : boolean = false;
  @state() isResizable : boolean = false;
  @state() isPanelRight : boolean = false;
  @state() isPanelBottom : boolean = false;
  @state() isPanelLeft : boolean = false;
  @state() isNoPanelHead : boolean = false;

  @state({ lazy : true }) $wrapper = createRef< HTMLDivElement >();
  get wrapper(){ return this.$wrapper.value }
  get main(){ return this.wrapper?.getElementsByClassName("pf-v5-c-drawer__main")[0] }
  get content(){ return this.wrapper?.getElementsByClassName("pf-v5-c-drawer__content")[0] }
  get body(){ return this.wrapper?.getElementsByClassName("pf-v5-c-drawer__body")[0] }
  get panel(){ 
    const wrapper = this.wrapper;
    const panel = wrapper?.getElementsByClassName("pf-v5-c-drawer__panel")[0];
    return !panel ? null : Object.assign( panel , {
      get controller(){
        return wrapper?.getElementsByClassName("pf-v5-c-drawer__splitter")[0]
      },
      get main(){
        return wrapper?.getElementsByClassName("pf-v5-c-drawer__panel-main")[0]
      }
    } )
  }

  @effect(["isExpanded"]) handleExpanded = () => {

    if(!this.wrapper)return ;

    if(this.isExpanded){
      this.wrapper.classList.add( "pf-m-expanded" );
      this.panel?.removeAttribute('hidden');
    }
    else {
      this.wrapper.classList.remove( "pf-m-expanded" );
      this.panel?.setAttribute('hidden' , `${!this.isExpanded}`);
    }

  }

  @effect(["isInline"]) handleInline = () => {

    if(!this.wrapper)return ;

    if(this.isInline){this.wrapper.classList.add( "pf-m-inline" );}
    else {this.wrapper.classList.remove( "pf-m-inline" );}

  }

  @effect(["isStatic"]) handleStatic = () => {

    if(!this.wrapper)return ;

    if(this.isStatic){this.wrapper.classList.add( "pf-m-static" );}
    else {this.wrapper.classList.remove( "pf-m-static" );}

  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {

    let booleanAttribute = this.handleBooleanAttribute( name , newValue || oldValue );

    if( name == "expanded" && !this.isStatic )this.isExpanded = booleanAttribute;

    else if( name == "inline" )this.isInline = booleanAttribute;

    else if( name == "static" )this.isStatic = booleanAttribute;

    else if( name == "resizable" && !this.isStatic )this.isResizable = booleanAttribute;

    else if( name == "panel-right" ){
      this.isPanelRight = booleanAttribute;
      if(this.isPanelBottom && this.isPanelRight)this.removeAttribute( 'panel-bottom' );
      if(this.isPanelLeft && this.isPanelRight)this.removeAttribute( 'panel-left' );
    }

    else if( name == "panel-bottom" ){
      this.isPanelBottom = booleanAttribute;
      if(this.isPanelRight && this.isPanelBottom)this.removeAttribute( 'panel-right' );
      if(this.isPanelLeft && this.isPanelBottom)this.removeAttribute( 'panel-left' );
    }

    else if( name == "panel-left" ){
      this.isPanelLeft = booleanAttribute;
      if(this.isPanelRight && this.isPanelLeft)this.removeAttribute( 'panel-right' );
      if(this.isPanelBottom && this.isPanelLeft)this.removeAttribute( 'panel-bottom' );
    }

    else if(name = "no-panel-head")this.isNoPanelHead = this.handleBooleanAttribute( name , newValue );
    
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
        panel.setAttribute( 'style' , `--pf-v5-c-drawer__panel--md--FlexBasis : ${-resizeDelta}px; --pf-v5-c-drawer__panel--md--FlexBasis--min : ${"150px"}; width : var(--pf-v5-c-drawer__panel--md--FlexBasis)` );
      }
      else if (target.isPanelLeft) {
        // Calculer le delta de redimensionnement pour le panneau à gauche
        let resizeDelta = deltaMousePosition + initialPanelSize; // Différence par rapport à la taille initiale
        panel.setAttribute( 'style' , `--pf-v5-c-drawer__panel--md--FlexBasis : ${resizeDelta}px; --pf-v5-c-drawer__panel--md--FlexBasis--min : ${"150px"}; width : var(--pf-v5-c-drawer__panel--md--FlexBasis)` );
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