function MyParent() {
  this.property1 = "value1";
}

MyParent.prototype.method1 = function() {
  console.log("MyParent.method1() " + this.property1);
};

function MyChild() {}

MyChild.prototype = new MyParent();

var child1 = new MyChild();

console.log("child1.property1 : " + child1.property1);
child1.method1();
