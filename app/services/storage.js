import Service from "@ember/service";

export default Service.extend({
  setItem(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },
  getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  clearItem(key) {
    localStorage.removeItem(key);
  },
  has(key) {
    return localStorage.hasOwnProperty(key);
  },
  clearAll() {
    localStorage.clear();
  },
  getAllItemKeys() {
    return Object.keys(localStorage);
  }
});
