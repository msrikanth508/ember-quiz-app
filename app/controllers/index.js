import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  questionnaire: inject("questionnaire"),
  init() {
    this._super(...arguments);
    const { data: { name, description, questions }} = this.get('questionnaire');
    this.set('name', name);
    this.set('description',description);
    this.set('totalCount', questions.length)
  },
  actions: {
    start() {
      this.get('questionnaire').clearAllAnswers();
      this.transitionToRoute("question", 1);
    }
  }
});
