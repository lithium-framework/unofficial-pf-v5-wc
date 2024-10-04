import { WebComponent } from "@lithium-framework/core";
import { HandleBooleanAttribute } from "../controllers/handle-boolean-attribute";
import { cretateOnSlotChangeHandler } from "../controllers/cretate-on-slot-change-handler";

export class PfWebComponent extends WebComponent{

  get handleBooleanAttribute():(name: string, newValue: string | null) => boolean{ return HandleBooleanAttribute.bind( this ) }
  get cretateOnSlotChangeHandler():(slotName?: null | string, callback?: (node: HTMLElement | null) => void)=> (target: PfWebComponent) => void{ return cretateOnSlotChangeHandler.bind(this) }

}