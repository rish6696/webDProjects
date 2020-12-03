
function Shape(color){
    this.color=color;
}


Shape.prototype.duplicate = function duplicate(){
    console.log(this.color);
    console.log("duplicate is running");
}

function Circle(radius,color ) {
    Shape.call(this,color);
    this.radius=radius
    this.x =20;
    this.y =40;

    this.draw = function draw (){
       console.log("draw");
    }
}

function extend(Child ,Parent){
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

extend(Circle,Shape);

Circle.prototype.duplicate =function (){
    Shape.prototype.duplicate.call(this);
    
    console.log("duplicate circle running");
}



const ob = new Circle(45,"red");
ob.duplicate();

console.log(ob);

