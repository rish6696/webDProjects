
//factory functions 
function  createObject(radius){
  return {
      radius, x :10 ,y:20,
      draw  : function draw(){
        console.log("draw");
      }
  }
}



const ob =createObject(1);


console.log(Object.getPrototypeOf(ob));


// constructor functions

function CreateObject(radius){
    this.radius =radius;
    this.x =20;

    this.draw = function draw(){
        console.log("draw");
    }
     
}


const ob1 = new CreateObject(20);
console.log(Object.getPrototypeOf(ob1))








const circle  = new CreateObject(1);

const a =circle.constructor;




// funtions are also objects

const Circle1 = new Function('radius',` this.radius =radius;
this.x =20;

this.draw = function draw(){
    console.log("draw");
}`)


const ob2 = new Circle1(20);
