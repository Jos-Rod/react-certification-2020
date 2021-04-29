const storage = {
  get(key) {
    const rawValue = window.localStorage.getItem(key);
    return JSON.parse(rawValue);
  },

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
};

export { storage };
