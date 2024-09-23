import { PfWebComponent } from "../models/PfWebComponent";

export function HandleBooleanAttribute( this : PfWebComponent , name : string , newValue : string| null ):boolean{

  if( !this.attributes[name as unknown as number] )return false;
  else if(!newValue|| newValue != "false")return true;
  else return false;

}