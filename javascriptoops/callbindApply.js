
let object={
    firstname:"rishabh",
    lastname:"sharma",
    printFullName:function (place){
        console.log(this.firstname+" "+this.lastname+" "+place)
    }
}
let ob ={
    firstname:"sachin",
    lastname:"tendulkar"
}


const printName = function(){
    console.log(this.firstname+", "+this.lastname)
}

const printMyName = printName.bind(ob)
printMyName()


Function.prototype.mybind=function(objectToCall){
    let func = this;
    return function(){
       func.call(objectToCall)
    }
}

const printMyNameNew = printName.mybind(object)
printMyNameNew()