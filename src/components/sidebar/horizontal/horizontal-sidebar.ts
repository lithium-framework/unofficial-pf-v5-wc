import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';

@customElement({
   name: "horizontal-navbar",
   template : html`${(horizontalNavBar: HorizontalNavBar) => {
      return html`
        <nav id="sidebar">
         <ul class="header-sidebar">
            <li>
               <a class="member-info-initial" href="/pages/profil">HB</a>
               <button class="toggle-btn" @click="${() => horizontalNavBar.toggleButton()}">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
               </button>
            </li>
         </ul>
         <ul id="right-sidebar">
            <li>
               <div class="member-infos">
                  <span class="member-info-nom"><a href="/pages/profil">Houthoofd Benoit</a></span>
               </div>
            </li>
            <li>
               <a href="/pages/messages">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
               </a>
            </li>
            <li>
               <a href="/pages/notifications">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
               </a>
            </li>
            <li>
               <a>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
               </a>
            </li>
            <li id="switch-mode" @click="${() => horizontalNavBar.switchMode()}">
               <div class="moon-sun">
                  <div class="moon-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
                  </div>
                  <div class="sun-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
                  </div>
               </div>
            </li>
         </ul>
        </nav>
      `
   }}`,
   styles: [
      css`
      #sidebar{
         box-sizing: border-box;
         background-color: #11121a;
         display: grid;
         grid-template-columns: 250px 1fr;
         align-items: center;
         height: 10vh;
         border-bottom: 1px solid #42434a;
         transition: all 0.3s ease;
      }
      #sidebar.close{
         grid-template-columns: 84px 1fr;
      }
      .header-sidebar{
         padding: 0;
         border-right: 1px solid #42434a;
         justify-content: space-between;
         align-items: center;
         display: flex;
         background-color: #222533;
      }
      .header-sidebar li{
         list-style: none;
         width: 100%;
         padding: 0;
         margin: 0;
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
      #sidebar ul{
         list-style: none;
         height: 100%;
         padding: 0;
         margin: 0;
      }
      #sidebar ul li.active a{
         color: #5e63ff;

         svg{
            fill: #5e63ff;
         }
      }
      #sidebar a{
         padding: .85rem;
         text-decoration: none;
         color: #e6e6ef;
         display: flex;
         align-items: center;
         gap: 1em;
         transition: all 0.3s ease;

         svg{
            fill: #e6e6ef;
         }
      }
      .toggle-btn{
         width: 35px;
         height: 35px;
         border-radius: 50%;
         border: none;
         background-color: #5e63ff;
         transform: translateX(18px) translateY(0px);
         transition: all 0.3s ease;

         svg{
            fill: #e6e6ef;
            transform: translateX(0px) translateY(2px);
         }
      }
      .toggle-btn.close{
         width: 23px;
         height: 23px;
         transform: translateX(12px) translateY(0px);

         svg{
            width: 15px;
            height: 15px;
            transform: translateX(-1px) translateY(2px);
         }
      }
      #right-sidebar{
         display: flex;
         align-items: center;
         justify-content: flex-end;
      }
      .member-info-initial{
         background-color: #5e63ff;
         border-radius: 10px;
         /* margin-left: 20px; */
         transform: translateX(19px);
      }
      #switch-mode{
         background-color: #222533;
         display: flex;
         padding: 10px 10px;
         justify-content: space-between;
         align-items: center;
         border-radius: 10px;
         transition: all 0.3s ease;
      }
      #switch-mode.close{
         width: 130px;
      }
      .moon-sun{
         display: grid;
         align-items: center;
         transform: translateX(2px) translateY(3px);
         transition: all 0.3s ease;

         .moon-icon, .sun-icon {
            grid-column: 1;
            grid-row: 1;

            svg{
               fill: #e6e6ef;
            }
         }
      }
      .moon-sun.close{
         width: 150px;
      }
      .sun-icon{
         opacity: 0;
      }
      `
   ]
})
export class HorizontalNavBar extends WebComponent{
   @state() isOpen: boolean = true;

   @attr() open: "true" | "false" | null = null;

   connectedCallback() {
      super.connectedCallback();

      console.log('horizontal navbar connecté');

      this.onMounting();
   }

  onMounting() {
    // Récupérer la valeur du localStorage et gérer le cas où elle est null
    const navbarState: string | null = localStorage.getItem('navigation');
    
    if (navbarState) {
       // Parse la chaîne JSON seulement si elle n'est pas null
       const parsedNavbarState = JSON.parse(navbarState);
       
       // Vérifie que l'objet a bien la propriété horizontal_vertical_state
       if (parsedNavbarState.horizontal_vertical_state === false) {
          this.Minimize();
       } else if (parsedNavbarState.horizontal_vertical_state === true) {
          this.Expand();
       }
    } else {
       console.error("La clé 'navigation' n'existe pas dans le localStorage");
    }
  }
 

  toggleButton() {
    const navbarStateString: string | null = localStorage.getItem('navigation');
    const navbarState = navbarStateString ? JSON.parse(navbarStateString) : null;  // Parsage sécurisé de la chaîne JSON
    console.log("toggle initial", this.open, navbarState?.horizontal_vertical_state, this.isOpen);
  
    // Cas où open est null et isOpen est true (Initialisation avec état synchronisé)
    if (this.open === null && this.isOpen === true) {
      console.log("Synchronisation initiale : open est null et isOpen est true");
      this.open = 'true';  // Synchronisation de l'état 'open'
      this.isOpen = true;  // Assurez-vous que isOpen est aussi 'true'
      this.openEmitSignal(this.isOpen);  // Emission du signal pour signaler l'ouverture
      return;
    }
  
    // Cas où open est null et isOpen est false (Initialisation avec état synchronisé)
    if (this.open === null && this.isOpen === false) {
      console.log("Synchronisation initiale : open est null et isOpen est false");
      this.open = 'false';  // Synchronisation de l'état 'open'
      this.isOpen = false;  // Assurez-vous que isOpen est aussi 'false'
      this.closeEmitSignal(this.isOpen);  // Emission du signal pour signaler la fermeture
      return;
    }
  
    // Cas où open est 'true' et isOpen est true (Fermeture de la navigation)
    if (this.open === 'true' && this.isOpen === true) {
      console.log("Fermeture de la navigation");
      this.isOpen = false;
      this.open = 'false';
      this.closeEmitSignal(this.isOpen);  // Fermeture de la navigation
      return;
    }
  
    // Cas où open est 'false' et isOpen est false (Ouverture de la navigation)
    if (this.open === 'false' && this.isOpen === false) {
      console.log("Ouverture de la navigation");
      this.isOpen = true;
      this.open = 'true';
      this.openEmitSignal(this.isOpen);  // Ouverture de la navigation
      return;
    }
  
    // Cas par défaut : quand open et isOpen ne sont ni 'true' ni 'false', basculer l'état
    console.log("Basculer l'état : toggle");
    this.isOpen = !this.isOpen;  // Inverser l'état de isOpen
    this.open = this.isOpen ? 'true' : 'false';  // Synchroniser open avec isOpen
  
    // Après le basculement, envoyer le signal approprié
    if (this.isOpen) {
      console.log("Ouverture de la navigation après basculement");
      this.openEmitSignal(this.isOpen);
    } else {
      console.log("Fermeture de la navigation après basculement");
      this.closeEmitSignal(this.isOpen);
    }
  }
  
  
  switchMode(){

  }

   closeEmitSignal(state: boolean) {
   
      // Émettre un événement personnalisé pour notifier qu'il faut manipuler les navbars à l'extérieur
      const event = new CustomEvent('close-navbars', {
         bubbles: true, // Permet à l'événement de remonter dans le DOM
         composed: true,
         detail: { message: 'Close all external navbars', horizontalstate: this.isOpen}
      });
      this.Minimize();
      console.log(event);
      // Dispatch l'événement depuis le composant
      this.dispatchEvent(event);
   }
   
   openEmitSignal(state: boolean){
   
      // Émettre un événement personnalisé pour notifier qu'il faut manipuler les navbars à l'extérieur
      const event = new CustomEvent('open-navbars', {
         bubbles: true, // Permet à l'événement de remonter dans le DOM
         composed: true,
         detail: { message: 'Open all external navbars', horizontalstate: this.isOpen }
      });
      this.Expand();
      console.log(event)
      // Dispatch l'événement depuis le composant
      this.dispatchEvent(event);
   }
   Minimize() {
      const btn = this.shadowRoot?.querySelectorAll('.toggle-btn')[0] as HTMLElement;
      const sidebar = this.shadowRoot?.querySelectorAll('#sidebar')[0] as HTMLElement;

      btn.classList.toggle('close');
      sidebar.classList.toggle('close');
   }
   
   Expand(){
      const btn = this.shadowRoot?.querySelectorAll('.toggle-btn')[0] as HTMLElement;
      const sidebar = this.shadowRoot?.querySelectorAll('#sidebar')[0] as HTMLElement;
      
      btn.classList.remove('close');
      sidebar.classList.remove('close');
   }
   attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
      
      if (name === 'isopen') {
         // Assigner directement la valeur de newValue à this.open
         this.open = newValue as any;
      }
   
      super.attributeChangedCallback(name, oldValue, newValue);
   }
}

