
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var sourceKey = Object.keys(source);

    
   // console.log(source)    
   arr =  collection.filter(function (obj) {

        return sourceKey.map(function(item){
            return (obj.hasOwnProperty(item) && obj[item] === source[item]);
            }).reduce(function (accumulator, current) {
                return accumulator = accumulator && current;
            });

   });

    // Only change code above this line
    return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
