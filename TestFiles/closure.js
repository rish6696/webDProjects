function outer(){
    let a=10;
    return function inside(){
         a++
        console.log(a)
        
    }
}

const m=outer();
m();
m();
