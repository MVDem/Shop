import eventEmiter from '../helpers/eventEmmiter.js';

export default class GoodList {
  constructor() {
    this._goodList = [];
    this._eventEmiter = eventEmiter;
  }

  load(callBack, goodClass) {
    callBack().then((data) => {
      this._goodList = data.map((item) => new goodClass(item));
      this._eventEmiter.emit('loaded');
    });
  }

  get(id) {
    return this._goodList.find((good) => good.id == id);
  }

  getAll() {
    return this._goodList;
  }

  add(good) {
    this._goodList.push(good);
  }

  remove(id) {
    this.goodList = this._goodList.filter((good) => good !== id);
  }
}
