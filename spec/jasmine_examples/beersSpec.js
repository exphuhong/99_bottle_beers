describe("beers",function(){
    let beers = require("../../lib/jasmine_examples/beer");

    it("99 bottles of beers",function(){
        expect(beers(99)).toEqual("99 bottles of beer on the wall, 99 bottles of beer.Take one down and pass it around, 98 bottles of beer on the wall.");
    })
})