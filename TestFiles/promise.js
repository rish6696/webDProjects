function returnsPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data=['a','b','c']
            resolve(data)
        },200)
    })
}
function newreturnsPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data=['1','2','3']
            resolve(data)
        },200)
    })
}



async function handler(){
   const m=returnsPromise().then(x=>newreturnsPromise()).then(x=>console.log(x))
   console.log(m)
}
handler()