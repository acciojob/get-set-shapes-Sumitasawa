//complete this code
class Rectangle{
	constructor(width,height){
	this.width=width;
	this.height=height;
	}
	get width(){
		return  this._width;
	}
	get height(){
		return this._height;
	}

	get area(){
		return this._width*this._height;
	}
}

class Square extends Animal {
	constructor(side){
		super(side,side);
		this.side=side;
	}

	get Perimeter(){
		return 4*this._side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
