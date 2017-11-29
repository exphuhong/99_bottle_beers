describe("beers",function(){
    let beers = require("../../lib/jasmine_examples/beer");
    let beerFun;
    beforeEach(function(){
        beerFun = new beers();
    })

    it("1 bottle of beer",function(){
        expect(beerFun.beerFun(1)).toEqual("1 bottle of beer on the wall, 1 bottle of beer.\n"+
        "Take one down and pass it around, no more bottles of beer on the wall.\n"+
        "No more bottles of beer on the wall, no more bottles of beer.\n"+
        "Go to the store and buy some more, 99 bottles of beer on the wall.")
    })

    it("2 bottles of beer",function(){
        expect(beerFun.beerFun(2)).toEqual("2 bottles of beer on the wall, 2 bottles of beer.\n"+
        "Take one down and pass it around, 1 bottle of beer on the wall.\n"+
        "1 bottle of beer on the wall, 1 bottle of beer.\n"+
        "Take one down and pass it around, no more bottles of beer on the wall.\n"+
        "No more bottles of beer on the wall, no more bottles of beer.\n"+
        "Go to the store and buy some more, 99 bottles of beer on the wall.")
    })

    it("30 bottles of beers",function(){
        expect(beerFun.beerFun(30)).toEqual(
            "30 bottles of beer on the wall, 30 bottles of beer.\n"+
            "Take one down and pass it around, 29 bottles of beer on the wall.\n"+
            "29 bottles of beer on the wall, 29 bottles of beer.\n"+
            "Take one down and pass it around, 28 bottles of beer on the wall.\n"+
            "28 bottles of beer on the wall, 28 bottles of beer.\n"+
            "Take one down and pass it around, 27 bottles of beer on the wall.\n"+
            "27 bottles of beer on the wall, 27 bottles of beer.\n"+
            "Take one down and pass it around, 26 bottles of beer on the wall.\n"+
            "26 bottles of beer on the wall, 26 bottles of beer.\n"+
            "Take one down and pass it around, 25 bottles of beer on the wall.\n"+
            "25 bottles of beer on the wall, 25 bottles of beer.\n"+
            "Take one down and pass it around, 24 bottles of beer on the wall.\n"+
            "24 bottles of beer on the wall, 24 bottles of beer.\n"+
            "Take one down and pass it around, 23 bottles of beer on the wall.\n"+
            "23 bottles of beer on the wall, 23 bottles of beer.\n"+
            "Take one down and pass it around, 22 bottles of beer on the wall.\n"+
            "22 bottles of beer on the wall, 22 bottles of beer.\n"+
            "Take one down and pass it around, 21 bottles of beer on the wall.\n"+
            "21 bottles of beer on the wall, 21 bottles of beer.\n"+
            "Take one down and pass it around, 20 bottles of beer on the wall.\n"+
            "20 bottles of beer on the wall, 20 bottles of beer.\n"+
            "Take one down and pass it around, 19 bottles of beer on the wall.\n"+
            "19 bottles of beer on the wall, 19 bottles of beer.\n"+
            "Take one down and pass it around, 18 bottles of beer on the wall.\n"+
            "18 bottles of beer on the wall, 18 bottles of beer.\n"+
            "Take one down and pass it around, 17 bottles of beer on the wall.\n"+
            "17 bottles of beer on the wall, 17 bottles of beer.\n"+
            "Take one down and pass it around, 16 bottles of beer on the wall.\n"+
            "16 bottles of beer on the wall, 16 bottles of beer.\n"+
            "Take one down and pass it around, 15 bottles of beer on the wall.\n"+
            "15 bottles of beer on the wall, 15 bottles of beer.\n"+
            "Take one down and pass it around, 14 bottles of beer on the wall.\n"+
            "14 bottles of beer on the wall, 14 bottles of beer.\n"+
            "Take one down and pass it around, 13 bottles of beer on the wall.\n"+
            "13 bottles of beer on the wall, 13 bottles of beer.\n"+
            "Take one down and pass it around, 12 bottles of beer on the wall.\n"+
            "12 bottles of beer on the wall, 12 bottles of beer.\n"+
            "Take one down and pass it around, 11 bottles of beer on the wall.\n"+
            "11 bottles of beer on the wall, 11 bottles of beer.\n"+
            "Take one down and pass it around, 10 bottles of beer on the wall.\n"+
            "10 bottles of beer on the wall, 10 bottles of beer.\n"+
            "Take one down and pass it around, 9 bottles of beer on the wall.\n"+
            "9 bottles of beer on the wall, 9 bottles of beer.\n"+
            "Take one down and pass it around, 8 bottles of beer on the wall.\n"+
            "8 bottles of beer on the wall, 8 bottles of beer.\n"+
            "Take one down and pass it around, 7 bottles of beer on the wall.\n"+
            "7 bottles of beer on the wall, 7 bottles of beer.\n"+
            "Take one down and pass it around, 6 bottles of beer on the wall.\n"+
            "6 bottles of beer on the wall, 6 bottles of beer.\n"+
            "Take one down and pass it around, 5 bottles of beer on the wall.\n"+
            "5 bottles of beer on the wall, 5 bottles of beer.\n"+
            "Take one down and pass it around, 4 bottles of beer on the wall.\n"+
            "4 bottles of beer on the wall, 4 bottles of beer.\n"+
            "Take one down and pass it around, 3 bottles of beer on the wall.\n"+
            "3 bottles of beer on the wall, 3 bottles of beer.\n"+
            "Take one down and pass it around, 2 bottles of beer on the wall.\n"+
            "2 bottles of beer on the wall, 2 bottles of beer.\n"+
            "Take one down and pass it around, 1 bottle of beer on the wall.\n"+
            "1 bottle of beer on the wall, 1 bottle of beer.\n"+
            "Take one down and pass it around, no more bottles of beer on the wall.\n"+
            "No more bottles of beer on the wall, no more bottles of beer.\n"+
            "Go to the store and buy some more, 99 bottles of beer on the wall.");
    })
    
})