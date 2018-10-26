import Service from '@ember/service';
import data from './quizData';
import { inject } from '@ember/service';

export default Service.extend({
    storage: inject("storage"),
    data: null,
    answers: null,
    totalCount: null,
    init() {
        this._super(...arguments);
        const { questions } = data.questionnaire;
        this.set("data", data.questionnaire);
        this.set('totalCount', questions.length);
        // populate answers from storage if any;
        const answers = this.getAllAnswers();
        this.set("answers", answers);
    },
    saveAnswer(key, data) {
        const answers = this.get("answers");
        answers[key] = data;
        this.set("answers", answers);
        this.get("storage").setItem(key, data);
    },
    getAnswer(key) {
        const storage = this.get("storage");
        if(storage.has(key)) {
            const answer = storage.getItem(key);
            const answers = this.get("answers");
            answers[key] = answer;
            this.set("answers", answers);
            return this.get("answers")[key];
        }
        return null;
    },
    getAllAnswers() {
        const storage = this.get("storage");
        const allItemKeys = storage.getAllItemKeys();
        if(allItemKeys && allItemKeys.length) {
            return storage.getAllItemKeys().reduce((acc, key) => {
                acc[key] = storage.getItem(key);
                return acc;
            }, {});
        }
        return {};
    },
    clearAllAnswers() {
      const storage = this.get("storage");
      storage.clearAll();
      this.set('answers', {});
    }
});
