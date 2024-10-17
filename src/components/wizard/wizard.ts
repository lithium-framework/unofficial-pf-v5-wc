import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import WizardStyles from '@patternfly/react-styles/css/components/Wizard/wizard.css';
import { PfWebComponent } from '../../models/PfWebComponent';
import  'unofficial-pf-v5-wc-icons';

@customElement({
  name: 'pf-wizard',
  template: html`${(wizard: PfWizard) => {
    return html`
    <div class="pf-v5-c-wizard">
  <div class="pf-v5-c-wizard__header">
    <div class="pf-v5-c-wizard__close">
      <pf-icons-times></pf-icons-times>
    </div>
    <div class="pf-v5-c-wizard__title">
      <h1 class="pf-v5-c-wizard__title-text">Wizard title</h1>
    </div>
    <div class="pf-v5-c-wizard__description">Here is where the description goes</div>
  </div>
  <button
    aria-label="Wizard Header Toggle"
    class="pf-v5-c-wizard__toggle"
    aria-expanded="false"
  >
    <span class="pf-v5-c-wizard__toggle-list">
      <span class="pf-v5-c-wizard__toggle-list-item">
        <span class="pf-v5-c-wizard__toggle-num">2</span>
        Configuration
        <i
          class="fas fa-angle-right pf-v5-c-wizard__toggle-separator"
          aria-hidden="true"
        ></i>
      </span>
      <span class="pf-v5-c-wizard__toggle-list-item">Substep B</span>
    </span>
    <span class="pf-v5-c-wizard__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-v5-c-wizard__outer-wrap">
    <div class="pf-v5-c-wizard__inner-wrap">
      <nav class="pf-v5-c-wizard__nav" aria-label="Steps">
        <ol class="pf-v5-c-wizard__nav-list" role="list">
          <li class="pf-v5-c-wizard__nav-item">
            <button
              class="pf-v5-c-wizard__nav-link pf-m-current"
              type="button"
              aria-current="page"
            >Information</button>
          </li>
          <li class="pf-v5-c-wizard__nav-item pf-m-expandable">
            <button
              class="pf-v5-c-wizard__nav-link"
              type="button"
              aria-expanded="false"
            >
              <span class="pf-v5-c-wizard__nav-link-text">Configuration</span>
              <span class="pf-v5-c-wizard__nav-link-toggle">
                <span class="pf-v5-c-wizard__nav-link-toggle-icon">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </span>
              </span>
            </button>
            <ol class="pf-v5-c-wizard__nav-list" role="list">
              <li class="pf-v5-c-wizard__nav-item">
                <button class="pf-v5-c-wizard__nav-link" type="button">Substep A</button>
              </li>
              <li class="pf-v5-c-wizard__nav-item">
                <button class="pf-v5-c-wizard__nav-link" type="button">Substep B</button>
              </li>
              <li class="pf-v5-c-wizard__nav-item">
                <button class="pf-v5-c-wizard__nav-link" type="button">Substep C</button>
              </li>
            </ol>
          </li>
          <li class="pf-v5-c-wizard__nav-item">
            <button class="pf-v5-c-wizard__nav-link" type="button">Additional</button>
          </li>
          <li class="pf-v5-c-wizard__nav-item">
            <button
              class="pf-v5-c-wizard__nav-link"
              type="button"
              disabled
            >Review</button>
          </li>
        </ol>
      </nav>
      <main class="pf-v5-c-wizard__main" tabindex="0">
        <div class="pf-v5-c-wizard__main-body">
          <form class="pf-v5-c-form pf-m-limit-width" novalidate>
            <div class="pf-v5-c-form__group">
              <div class="pf-v5-c-form__group-label"><label
                  class="pf-v5-c-form__label"
                  for="wizard-expandable-collapsed-form-field1"
                >
                  <span class="pf-v5-c-form__label-text">Field 1</span>&nbsp;<span
                    class="pf-v5-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v5-c-form__group-control">
                <span class="pf-v5-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-collapsed-form-field1"
                    name="wizard-expandable-collapsed-form-field1"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v5-c-form__group">
              <div class="pf-v5-c-form__group-label"><label
                  class="pf-v5-c-form__label"
                  for="wizard-expandable-collapsed-form-field2"
                >
                  <span class="pf-v5-c-form__label-text">Field 2</span>&nbsp;<span
                    class="pf-v5-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v5-c-form__group-control">
                <span class="pf-v5-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-collapsed-form-field2"
                    name="wizard-expandable-collapsed-form-field2"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v5-c-form__group">
              <div class="pf-v5-c-form__group-label"><label
                  class="pf-v5-c-form__label"
                  for="wizard-expandable-collapsed-form-field3"
                >
                  <span class="pf-v5-c-form__label-text">Field 3</span>&nbsp;<span
                    class="pf-v5-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v5-c-form__group-control">
                <span class="pf-v5-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-collapsed-form-field3"
                    name="wizard-expandable-collapsed-form-field3"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v5-c-form__group">
              <div class="pf-v5-c-form__group-label"><label
                  class="pf-v5-c-form__label"
                  for="wizard-expandable-collapsed-form-field4"
                >
                  <span class="pf-v5-c-form__label-text">Field 4</span>&nbsp;<span
                    class="pf-v5-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v5-c-form__group-control">
                <span class="pf-v5-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-collapsed-form-field4"
                    name="wizard-expandable-collapsed-form-field4"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v5-c-form__group">
              <div class="pf-v5-c-form__group-label"><label
                  class="pf-v5-c-form__label"
                  for="wizard-expandable-collapsed-form-field5"
                >
                  <span class="pf-v5-c-form__label-text">Field 5</span>&nbsp;<span
                    class="pf-v5-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v5-c-form__group-control">
                <span class="pf-v5-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-collapsed-form-field5"
                    name="wizard-expandable-collapsed-form-field5"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v5-c-form__group">
              <div class="pf-v5-c-form__group-label"><label
                  class="pf-v5-c-form__label"
                  for="wizard-expandable-collapsed-form-field6"
                >
                  <span class="pf-v5-c-form__label-text">Field 6</span>&nbsp;<span
                    class="pf-v5-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v5-c-form__group-control">
                <span class="pf-v5-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-collapsed-form-field6"
                    name="wizard-expandable-collapsed-form-field6"
                  />
                </span>
              </div>
            </div>
            <div class="pf-v5-c-form__group">
              <div class="pf-v5-c-form__group-label"><label
                  class="pf-v5-c-form__label"
                  for="wizard-expandable-collapsed-form-field7"
                >
                  <span class="pf-v5-c-form__label-text">Field 7</span>&nbsp;<span
                    class="pf-v5-c-form__label-required"
                    aria-hidden="true"
                  >&#42;</span></label>
              </div>
              <div class="pf-v5-c-form__group-control">
                <span class="pf-v5-c-form-control">
                  <input
                    type="text"
                    id="wizard-expandable-collapsed-form-field7"
                    name="wizard-expandable-collapsed-form-field7"
                  />
                </span>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
    <footer class="pf-v5-c-wizard__footer">
      <pf-button>Back</pf-button>
      <pf-button>Next</pf-button>
      <div class="pf-v5-c-wizard__footer-cancel">
        <pf-button>Cancel</pf-button>
      </div>
    </footer>
  </div>
</div>;
    `
  }}`,
  styles: [
    BaseStyle,
    css`${String(WizardStyles)}`
  ],
  shadowOptions: { mode: 'open' }
})

export class PfWizard extends PfWebComponent{

}