const rates ={
    fixedRate : 50,
    perkm:10,
    freeMin : 15,
    freekm:5,
    perMin:2
}


function calFare(km,min){
    let fare = rates.fixedRate;
    fare +=  ( km > rates.freekm ) ? ( km-rates.freekm )* rates.perkm : 0 ;
    fare +=  ( min > rates.freeMin ) ? (min -rates.freeMin )* rates.perMin :0;
    return fare;
}

module.exports={
    calFare ,rates 
}