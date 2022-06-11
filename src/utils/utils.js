
export function  letterCheck(letter) {
    return letter.length === 1 && /[a-zA-Z]/g.test(letter);
}

export function applyTileStyle(wordle, input, index) {
    console.log(input);
    let returnValue = "tile-empty";
    if(!input) {
        returnValue = "tile-empty";
    } else if(wordle.indexOf(input) > -1) {
        if(isInSameIndex(input, wordle, index)) {
            returnValue = "tile-correct";
        } else {
            returnValue = "not-in-position";
        }
    } else {
        returnValue = "tile-occupied";
    }
    return returnValue;
}

function locations(substring,string){
  var a=[],i=-1;
  while((i=string.indexOf(substring,i+1)) >= 0) a.push(i);
  return a;
}

function isInSameIndex(substring, string, index) {
    let arr = locations(substring, string);
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == index) 
            return true;
    }
    return false;
}