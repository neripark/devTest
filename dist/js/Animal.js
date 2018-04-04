export default class Animal {
  get identifier() {
    return this.constructor.name;
  }
  voice() {
    console.log(this.nakigoe);
  }
}