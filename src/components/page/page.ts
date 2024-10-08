import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import PageStyles from '@patternfly/react-styles/css/components/Page/page.css';
import { PfWebComponent } from '../../models/PfWebComponent';
import  'unofficial-pf-v5-wc-icons';

@customElement({
  name: 'pf-page',
  template: html`${(page: PfPage) => {
    return html`<div class="pf-v5-c-page">
    <pf-masthead></pf-masthead>
  <div class="pf-v5-c-page__sidebar">
    <pf-drawer></pf-drawer>
  </div>
  <main class="pf-v5-c-page__main" tabindex="-1">
    <section class="pf-v5-c-page__main-section pf-m-dark-100">
      This
      <code>.pf-v5-c-page__main-section</code> uses
      <code>.pf-m-dark-100</code>.
    </section>
    <section class="pf-v5-c-page__main-section pf-m-dark-200">
      This
      <code>.pf-v5-c-page__main-section</code> uses
      <code>.pf-m-dark-200</code>.
    </section>
    <section class="pf-v5-c-page__main-section pf-m-light">
      This
      <code>.pf-v5-c-page__main-section</code> uses
      <code>.pf-m-light</code>.
    </section>
    <section class="pf-v5-c-page__main-section">
      This is a default
      <code>.pf-v5-c-page__main-section</code>.
    </section>
  </main>
</div>`
  }}`,
  styles : [
    css`${String(PageStyles)}`
  ]
})

export class PfPage extends PfWebComponent{

}