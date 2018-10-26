import Route from "@ember/routing/route";
import { copy } from '@ember/object/internals';
import { inject } from '@ember/service';

export default Route.extend({
  storage: inject("storage"),
  questionnaire: inject("questionnaire"),
  model(params) {
    const id = Number(params.id);
    const questionnaire  = this.get('questionnaire').data;
    const totalCount = this.get('questionnaire').totalCount;
    const { questions } = questionnaire;
    const question = questions[id - 1];
    const answer = this.get("questionnaire").getAnswer(question.identifier);
    const t = copy(question, true);
    let selectedValue = [];

    if(Array.isArray(answer)) {
      selectedValue = [];
      const mapping = answer.reduce((acc, item) => {
        acc[item] = item;
        return acc;
      }, {});

      t.choices = t.choices.reduce((acc, choice) =>  {
        if(mapping[choice.value]) {
          choice.selected = true;
          selectedValue.push(choice.value);
        }
        acc.push(choice);
        return acc;
      }, []);
    } else if(t.choices) {
      t.choices = t.choices.reduce((acc, choice) =>  {
        if(choice.value === answer) {
          choice.selected = true;
          selectedValue = choice.value;
        }
        acc.push(choice);
        return acc;
      }, []);
    } else {
      selectedValue = answer || '';
    }
    return Object.assign({}, t, {
      id,
      totalCount,
      answer,
      selectedValue,
    });
  },
  setupController: function(controller, model) {
    controller.set("model", model);
    controller.set("selectedValue", model.selectedValue);
  }
});
