

function reset(){
    const form =document.getElementById("form");
    form.reset();
}

window.onload = function run(){

    document.getElementById("submit").addEventListener("click" , function submit(e) {
        e.preventDefault();

  

        const arr =["rishabh","diksha","riohan ","mohan"];
        const a =arr.slice(1,3);

        console.log(arr);
        console.log(a);


        // const password =document.getElementById("pass");
        // const email =document.getElementById("email");
        // const roll =document.getElementById("roll");


        // if(roll.value==null||roll.value.length==0){
        //     alert("invalid roll");
        //     roll.focus();
        //     return ;
        // }

      })
}