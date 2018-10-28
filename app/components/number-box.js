import Component from '@ember/component';

/**
 * 
 * NumberBoxComponent
 * @export
 * @class NumberBoxComponent
 * @extends {Component}
 */
export default class NumberBoxComponent extends Component {
  /**
   * 
   * didInsertElement
   * @memberof NumberBoxComponent
   */
  didInsertElement() {
    this.$('.card').addClass('bounce');
    this.$('.card').on('animationend', () => {
      this.$('.card').removeClass('bounce');
    });
  }
}
