import Component from '@ember/component';

/**
 * 
 * ProgressBarComponent
 * @export
 * @class ProgressBarComponent
 * @extends {Component}
 */
export default class ProgressBarComponent extends Component {
  /**
   * 
   * didInsertElement
   * @memberof ProgressBarComponent
   */
  didInsertElement() {
    this.element.querySelector('.progress').style.height = '2px';
    this.element.querySelector('.progress-bar').style.width = this.progress;
  }
  /**
   * 
   * didReceiveAttrs
   * @memberof ProgressBarComponent
   */
  didReceiveAttrs() {
    if(this.element) {
      this.element.querySelector('.progress-bar').style.width = this.progress;
    }
  }
}
