import { WebComponent } from "@lithium-framework/core";
import { HandleBooleanAttribute } from "../controllers/handle-boolean-attribute";

export class PfWebComponent extends WebComponent{

  get handleBooleanAttribute():(name: string, newValue: string | null) => boolean{ return HandleBooleanAttribute.bind( this ) }

}