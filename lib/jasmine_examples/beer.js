module.exports = beer;

function beer(){
   
}
beer.prototype.beerFun=function(number){
    let result = "";
    while(true){
        if(number===1){
            result += "1 bottle of beer on the wall, 1 bottle of beer.\n"+
            "Take one down and pass it around, no more bottles of beer on the wall.\n"+
            "No more bottles of beer on the wall, no more bottles of beer.\n"+
            "Go to the store and buy some more, 99 bottles of beer on the wall.";
            break;
        }else{
            let bottle = "";
            bottle = (number-1)>1?bottle="bottles":bottle="bottle";
            result += number+" bottles of beer on the wall, "+number+" bottles of beer.\n"+
            "Take one down and pass it around, "+(number-1)+" "+bottle+" of beer on the wall.\n"
            number--;
        }
    }
    return result;
}