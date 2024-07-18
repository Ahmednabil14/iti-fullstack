// test sum function --> index.js
// call sum 
const index = require("../index") // sum function

    // console.log(sum)
    //  index == {sum, convertToarray}
    // /  index.sum
    // index.convert

const assert = require("assert"); // mocha

// calling from CHAI
var expect = require("chai").expect;
var assertChai = require("chai").assert;
var should = require("chai").should()



// unit test use mocha: 
describe("unit test function sum use mocha", function(){
    // test cases 
    it("test sum that accept positive numbers", function(){
            // mocha --> assert --> test 
        assert.equal(index.sum(2,2),4)
    })
    it("test sum that accept negative numbers", function(){
        assert.equal(index.sum(-2,-2), -4)
    })
})    

//  chai 

describe("unit test function sum use chai", function(){
    it("add two postive numbers using EXPECT", function(){
        expect(index.sum(5,2)).to.be.equal(7);
    })

    it("add two postive numbers using ASSERT", function(){
        assertChai.equal(index.sum(5,8), 13)
    })

    it("add two postive numbers using SHOULD", function(){
        index.sum(1,1).should.equal(2)
    })

})


describe("unit test for convert to array function using ASSERT style fom CHAI", function(){
        // assertChai
        it("returned array", function(){
            assertChai.isArray(index.convertToArray(1,2,3,4))
        })

        it("return array include my params", function(){
            assertChai.include(index.convertToArray(1,2,3,4), 2)
        })

        it("length of array", function(){
            assertChai.lengthOf(index.convertToArray(1,2,3,4), 4)
        })
})


describe("unit test for convert to array function using EXPECT style fom CHAI", function(){
    it("returned array", function(){
        expect(index.convertToArray(1,2,3,4)).to.be.an("array").that.includes(4).that.lengthOf(4)
    })
    it("return array include my params", function(){
       expect(index.convertToArray(1,2,3,4)).to.be.includes(3)
    })

    it("length of array", function(){
        expect(index.convertToArray(1,2,3,4)).to.be.lengthOf(4)
    })
})


describe("unit test for convert to array function using SHOULD style fom CHAI", function(){
    it("returned array", function(){
        index.convertToArray(1,2,3,4).should.be.an("array").that.includes(2).that.lengthOf(4)
    })
    it("return array include my params", function(){
        index.convertToArray(1,2,3,4).should.be.includes(2)
    })

    it("length of array", function(){
        index.convertToArray(1,2,3,4).should.have.lengthOf(4)
    })
})


describe("unit test math function use expect style", function(){

    before(function(){
        console.log("BEFORE ALL")
    })

    beforeEach(function(){
        var test= 0
        console.log("BEFORE EACH")
    })

    after(function(){
        console.log("after ALL")
    })

    afterEach(function(){
        console.log("after EACH")
    })

    it("without params should return 0", function(){
        expect(index.math()).to.equal(0)
    })

    it("with numbers params it should retun the sum of params", function(){
        expect(index.math(2,2,4)).to.equal(8)
    })

    it("with string params it should throw an error", function(){
        expect(function(){
            index.math("hello", "math")
        }).to.throw(TypeError, "Math Function required numbers only")
        // expect(index.math("gvvsd","vkwv")).to.throw(TypeError, "Math Function required numbers only")
    })

})
