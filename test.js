//es6 クラス構文の確認

//宣言（クラス宣言）
class polygon {
  constructor(){
    this.heihgt = height;
    this.width = width;
  }
}

//宣言（クラス式）
//名前なし
var polygon2 = class {
  constructor(height, width){
    this.height = height;
    this.width = width;
  }
}

//名前つき
var polygon3 = class p{
  constructor(height, width){
    this.height = height;
    this.width = width;
  }
}


//いただいたサンプルソース
class Animal {
  // constructor(){
  //   // console.log('constructorが呼ばれました'　+ this.constructor.name);
  // }
  get identifier() {
    return this.constructor.name;
  }
}

class Cat extends Animal { }
class Tiger extends Animal { }

const cat = new Cat();
const tiger = new Tiger();
console.log(cat.identifier); // Cat
console.log(tiger.identifier);  // Tiger

console.log(cat);


const catcat = new Animal();
console.log(catcat);

//functionでやるとどうなるか
function testAnimal(){
  // this.name = "dog";
}

//
const testAni = new testAnimal();
console.log(testAni.constructor.name);







