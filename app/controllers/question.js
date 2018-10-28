import Controller from "@ember/controller";
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  questionnaire: inject("questionnaire"),
  isMultiple: computed("model.question_type", function() {
    return (
      this.get("model").question_type === "multiple-choice" &&
      this.get("model").multiple === "true"
    );
  }),
  isPrevDisabled: computed("model.id", function() {
    const id = this.get("model").id - 1;
    return id === 0;
  }),
  isNextDisabled: computed("model.id", function() {
    const id = this.get("model").id;
    const totalCount = this.get("model").totalCount;
    return id === totalCount;
  }),
  prorgess: computed("model.id", function() {
    const id = this.get("model").id;
    const totalCount = this.get("model").totalCount;
    return `${((id / totalCount) *100).toFixed()}%`;
  }),
  saveAnswer() {
    const key = this.get("model").identifier;
    this.get("questionnaire").saveAnswer(key, this.selectedValue);
  },
  actions: {
    handleChange(value) {
      if(this.isMultiple) {
        const selectedValue = this.get("selectedValue");
        const index = selectedValue.findIndex((item) => item === value);
        if(index === -1) {
          selectedValue.push(value);
        } else {
          selectedValue.splice(index, 1);
        }

        this.set("selectedValue", selectedValue);
      } else {
        this.set("selectedValue", value);
      }
      this.saveAnswer();
    },
    showNextQuestion() {
      const nextQuestionId = this.get("model").id + 1;
      this.transitionToRoute("question", nextQuestionId);
    },
    showPrevQuestion() {
      const nextQuestionId = this.get("model").id - 1;
      this.transitionToRoute("question", nextQuestionId);
    }
  }
});
