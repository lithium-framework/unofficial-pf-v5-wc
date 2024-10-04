import { PfWebComponent } from "../models/PfWebComponent";

export function cretateOnSlotChangeHandler( this : PfWebComponent , slotName: null | string = null , callback?:( node : HTMLElement | null ) => void ){

  return ( target:PfWebComponent ) => {
    let childrens = target.childNodes;

    let [children] = [...(target.childNodes as unknown as HTMLElement[])].map(( element ) => {

      if(element instanceof PfWebComponent == false)return null;

      /// ## Aucun slot
      if( !slotName && element?.getAttribute('slot') == null )return element;
      /// ## Avec slot + correspondance
      else if( slotName && element?.getAttribute('slot') == slotName )return element;
      /// ### Sinon return null
      else return null;
    }).filter( x => x )

    if( callback )callback( children );

  }

}