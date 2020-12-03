import faker from 'faker'


export class Company {

    companyName:String
    catchPhrase:String
    location :{
        lat : Number,
        lon:  Number
    }

    constructor(){

        this.companyName=faker.company.companyName();
        this.catchPhrase=faker.company.catchPhrase();
        this.location ={
            lat:parseFloat( faker.address.latitude()),
            lon:parseFloat( faker.address.longitude())
        }

    }
}