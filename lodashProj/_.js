// .clamp() 
const _ = {
  clamp(number, lower, upper) {
    lowerClampedValue = Math.max(number, lower);
  clampedValue = Math.min(lowerClampedValue, upper);
  return clampedValue;
  },
  
// .inRange()
  inRange(number, start, end) {
    if (typeof end === "undefined") {
      end = start;
      start = 0;
    }
    if (start > end) {
      temp = end;
      end = start;
      start = temp;
    }
  let isInRange = (start <= number && number < end);
return isInRange;
  },
  
// .words()
 words(string) {
   let words = string.split(' ');
   return words;
 },
 
// .pad()
pad(string, length) {
  if(length > string.length) {
    const startPad = Math.floor((length - string.length)/2);
  const endPad = ((length - string.length) - startPad);
    const paddedString = ' ';
  return paddedString.repeat(startPad) + string + paddedString.repeat(endPad);
  } else{
    return string;
  } 
  }, 

// .has()
has(object, key) {
  var hasValue = (object[key] != undefined);
  return hasValue;
},  

/*has(object, key) {
return object !== undefined && object [key] != null;
  },*/ 
  
// .invert()
invert(object) {
  var invertedObject = {};
  for (var key in object) {
    originalValue = object[key]; 
       invertedObject[originalValue] = key;
}
  return invertedObject;
},

/*  var string1 = "";
var object1 = {a: 1, b: 2, c: 3};
for (var property1 in object1) {
  string1 += object1[property1];
}
*/
  
// .findkey()
findKey(object, predicate) {
  for (var key in object) {
    value = object[key];
    predicateReturnValue = predicate(value);
    if (predicateReturnValue) {
      return key;
    }
  }
  return undefined;
},
  
// .drop()  
drop(array, n) {
  if (n === undefined) {
    n = 1;
  }
  droppedArray = array.slice(n);
  return droppedArray;
},
  
// .dropWhile()
dropWhile(array,predicate) {
  const dropNumber = array.findIndex(function(element, index){
    return !predicate(element, index, array)
  });
  const dropArray = this.drop(array, dropNumber); 
  return dropArray; 
},  
  
//OMG!Why Oh Why Was This One So Hard???
/*arr.findIndex(callback(element[, index[, array]])[, thisArg])*/

// .chunk()
chunk(array, size) {
  if (size === undefined) {
    size = 1;
  }
  var arrayChunks = [];
  for(let i = 0; i <array.length - 2; i++) {
var arrayChunk = array.slice(i + i, i + size);
arrayChunks.push(arrayChunk);
size++;
}
return arrayChunks;
}

};



// Do not write or modify code below this line.
module.exports = _;