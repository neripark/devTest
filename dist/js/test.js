//es6 クラス構文の確認

//宣言（クラス宣言）
class polygon {
  constructor() {
    this.heihgt = height;
    this.width = width;
  }
}

//宣言（クラス式）
//名前なし
var polygon2 = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

//名前つき
var polygon3 = class p {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

//いただいたサンプルソースを改造 --------------------------------------------------
import Animal from './module/Animal.js';
class Cat extends Animal {
  get nakigoe() {
    return "ニャー";
  }
  // voice(){
  //   console.log(this.nakigoe);
  // }
}

class Tiger extends Animal {
  get nakigoe() {
    return "ガオー";
  }
  // voice(){
  //   console.log(this.nakigoe);
  // }
}

const cat = new Cat();
const tiger = new Tiger();
console.log(cat.identifier); // Cat
console.log(tiger.identifier); // Tiger
cat.voice();
tiger.voice();