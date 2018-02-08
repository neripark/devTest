'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Animal3 = require('./Animal.js');

var _Animal4 = _interopRequireDefault(_Animal3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//es6 クラス構文の確認

//宣言（クラス宣言）
var polygon = function polygon() {
  _classCallCheck(this, polygon);

  this.heihgt = height;
  this.width = width;
};

//宣言（クラス式）
//名前なし


var polygon2 = function polygon2(height, width) {
  _classCallCheck(this, polygon2);

  this.height = height;
  this.width = width;
};

//名前つき
var polygon3 = function p(height, width) {
  _classCallCheck(this, p);

  this.height = height;
  this.width = width;
};

//いただいたサンプルソースを改造 --------------------------------------------------

var Cat = function (_Animal) {
  _inherits(Cat, _Animal);

  function Cat() {
    _classCallCheck(this, Cat);

    return _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).apply(this, arguments));
  }

  _createClass(Cat, [{
    key: 'nakigoe',
    get: function get() {
      return this.constructor.name + '\u306F\u30CB\u30E3\u30FC!!';
    }
    // voice(){
    //   console.log(this.nakigoe);
    // }

  }]);

  return Cat;
}(_Animal4.default);

var Tiger = function (_Animal2) {
  _inherits(Tiger, _Animal2);

  function Tiger() {
    _classCallCheck(this, Tiger);

    return _possibleConstructorReturn(this, (Tiger.__proto__ || Object.getPrototypeOf(Tiger)).apply(this, arguments));
  }

  _createClass(Tiger, [{
    key: 'nakigoe',
    get: function get() {
      return this.constructor.name + '\u306F\u30AC\u30AA\u30FC\uFF01';
    }
    // voice(){
    //   console.log(this.nakigoe);
    // }

  }]);

  return Tiger;
}(_Animal4.default);

var cat = new Cat();
var tiger = new Tiger();
console.log(cat.identifier); // Cat
console.log(tiger.identifier); // Tiger
cat.voice();
tiger.voice();