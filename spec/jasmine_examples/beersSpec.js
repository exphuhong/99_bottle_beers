describe("beers",function(){
    let beers = require("../../lib/jasmine_examples/beer");

    it("99 bottles of beers",function(){
        expect(beers(99)).toEqual("99 bottles of beer on the wall, 99 bottles of beer.Take one down and pass it around, 98 bottles of beer on the wall.");
    })
    it("1 bottle of beers",function(){
        expect(beers(1)).toEqual("1 bottle of beer on the wall, 1 bottle of beer."+
        "Take one down and pass it around, no more bottles of beer on the wall."+
        "No more bottles of beer on the wall, no more bottles of beer."+
        "Go to the store and buy some more, 99 bottles of beer on the wall.");
    })
})