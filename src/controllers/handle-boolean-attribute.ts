import { PfWebComponent } from "../models/PfWebComponent";

export function HandleBooleanAttribute(this: PfWebComponent, name: string, newValue: string | null): boolean {
  
  // Si l'attribut n'existe pas du tout, retourne false
  if (!this.hasAttribute(name)) {
    return false;
  }

  // Si l'attribut existe mais n'a pas de valeur (null), considère cela comme true
  if (newValue === null) {
    return true;
  }

  // Si la nouvelle valeur est présente, on vérifie qu'elle n'est pas "false"
  return newValue.toLowerCase() !== "false";
}