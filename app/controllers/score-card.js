import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  questionnaire: inject("questionnaire"),
  actions: {
    startAgain() {
      this.get('questionnaire').clearAllAnswers();
      this.transitionToRoute("question", 1);
    }
  }
});
