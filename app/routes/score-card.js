import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
    questionnaire: inject("questionnaire"),
    model() {
        const questionnaire = this.get("questionnaire");
        const { answers, totalCount } = questionnaire;
        const correctAnswersCount = Object.keys(answers).length;
        const wrongAnswersCount = totalCount - correctAnswersCount;

        return {
            correctAnswersCount,
            wrongAnswersCount,
            score: correctAnswersCount,
        };
    },
    setupController: function(controller, model) {
      controller.set("model", model);
    }
});
