export default {
  _listeners: {}, // объкт который хранит обработчики событий

  // фукция которая добавляет обработчки событий
  addListener(type, callBack) {
    if (this._listeners[type]) {
      this._listeners[type].push(callBack);
    } else {
      this._listeners[type] = [callBack];
    }
  },

  emit(type, ...params) {
    this._listeners[type].forEach((callback) => {
      callback(...params);
    });
  },
};
