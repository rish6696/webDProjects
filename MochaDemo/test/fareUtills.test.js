const fareUtils = require('../fareUtills')
const mocha = require('mocha')
const chai = require('chai')


const expect = chai.expect

describe('fareUtils',function(){
    it('except fare to be 50 for 0km and 0min',function(){
          let fare = fareUtils.calFare(0,0);
          expect(fare).to.equal(50);
          
    } )
})