export default class Good {
  constructor({ id, title, description, image, price }) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._image = image;
    this._price = price;
  }
  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get image() {
    return this._image;
  }

  get price() {
    return this._price;
  }
}
