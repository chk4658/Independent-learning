/*
	类与继承
*/
// function Animal(name) {
// 	this.name = name;
// }
// Animal.prototype.showName = function(){
// 	console.log(this.name);
// };
// var a = new Animal('Tom');
// a.showName();

// ------------------------------------------------

class Animal {
	// 静态方法(静态方法只能通过类名调用，不可以通过实例对象调用)
	static showInfo() {
		console.log('hi');
	}
	// 构造函数
	constructor(name) {
		this.name = name;
	}
	showName() {
		console.log(this.name);
	}
}
// let a = new Animal('spike');
// a.showName();
// Animal.showInfo();

// ------------------------------------------------

// 类的继承extends
class Dog extends Animal {
	constructor(name,color) {
		super(name);//super用来调用父类
		this.color = color;
	}
	showColor() {
		console.log(this.color);
	}
}
let d = new Dog('asda','yellow');
d.showName();
d.showColor();
Dog.showInfo();