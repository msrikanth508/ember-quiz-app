import Component from '@ember/component';

export default Component.extend({
  animationDir: 'bounce-right',
  animate() {
    const questionBoxEle = this.$('.question-box');
    if(questionBoxEle) {
        questionBoxEle.addClass(`${this.animationDir}`);
        questionBoxEle.on('animationend', () => {
        questionBoxEle.removeClass(`${this.animationDir}`);
      });
    }
},
  didInsertElement() {
    this.animate();
  },
  didReceiveAttrs() {
    this.animate();
  },
  actions: {
    handleChange(a) {
      this.onChange(a);
    },
    showNextQuestion() {
      this.set('animationDir', 'bounce-right');
      this.onShowNextQuestion();
    },
    showPrevQuestion() {
      this.set('animationDir', 'bounce-left');
      this.onShowPrevQuestion();
    }
  }
});