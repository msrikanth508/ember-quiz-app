import Route from '@ember/routing/route';
import { inject } from '@ember/service';

/**
 *
 * ScoreCardRoute
 */
export default class ScoreCardRoute extends Route {
  constructor() {
    super(...arguments);
    // Get questionnaire service
    this.questionnaire = inject("questionnaire");
  }
  /**
   *
   * Get model
   */
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
  }
  /**
   * [setupController description]
   * @param  {[type]} controller [description]
   * @param  {[type]} model      [description]
   * @return {[type]}            [description]
   */
  setupController(controller, model) {
    controller.set("model", model);
  }
}
