import faker from 'faker'


export class User {

    name:String

    location :{
        lat : Number,
        lon:  Number
    }

    constructor(){

        this.name=faker.name.firstName();
        this.location ={
            lat:parseFloat( faker.address.latitude()),
            lon:parseFloat( faker.address.longitude())
        }

    }
}