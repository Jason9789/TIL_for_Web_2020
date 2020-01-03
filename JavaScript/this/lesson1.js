function MyClass() {
  this.property1 = "value1";
}

MyClass.prototype.method1 = function() {
  alert(this.property1);
};

var my1 = new MyClass();
my1.method1();
