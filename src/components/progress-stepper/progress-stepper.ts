import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate } from '@lithium-framework/core';
import { BaseStyle } from '../../css/base';
import ProgressStepperStyles from '@patternfly/react-styles/css/components/ProgressStepper/progress-stepper.css';
import { PfWebComponent } from '../../models/PfWebComponent';

@customElement({
  name: 'pf-progress-stepper-item',
  template: html`${(progress_stepper_list: PfProgressStepperItem) => {

    return html`
    <li
      class="pf-v5-c-progress-stepper__step pf-m-success"
      role="listitem"
      aria-label="current step,in process step,"
    >
      <div class="pf-v5-c-progress-stepper__step-connector">
        <span class="pf-v5-c-progress-stepper__step-icon">
          <pf-icons-check-circle></pf-icons-check-circle>
        </span>
      </div>
      <div class="pf-v5-c-progress-stepper__step-main">
        <div class="pf-v5-c-progress-stepper__step-title">First step</div>
        <div
          class="pf-v5-c-progress-stepper__step-description"
        >This is the first thing to happen</div>
      </div>
    </li>
    `;
  }}`,
  styles: [
    BaseStyle,
    css`${String(ProgressStepperStyles)}`
  ],
  shadowOptions: { mode: 'open' }
})
export class PfProgressStepperItem extends PfWebComponent{

}


@customElement({
  name: 'pf-progress-stepper',
  template: html`${(orogress_stepper: PfProgressStepper) => {

    return html`
      <ol class="pf-v5-c-progress-stepper pf-m-vertical" role="list">
        <slot></slot>
      </ol>
    `;
  }}`,
  styles: [
    BaseStyle,
    css`${String(ProgressStepperStyles)}`,
    css`
    .pf-v5-c-progress-stepper.pf-m-vertical{
      display: flow-root !important;
    }
    `
  ],
  shadowOptions: { mode: 'open' }
})
export class PfProgressStepper extends PfWebComponent{

}