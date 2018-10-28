import Component from '@ember/component';

export default Component.extend({
    didInsertElement() {
      this.$('.card').addClass('bounce');
      this.$('.card').on('animationend', () => {
        this.$('.card').removeClass('bounce');
      });
    },
});
