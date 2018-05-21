
function sumFibs(num) {
  var fibo = [1,1];
  
  var sum = 0;
  
  
//   while(sum <= num){
//     sum = fibo[fibo.length -1] +  fibo[fibo.length - 2];
//     if(sum <= num) {
//       fibo.push(sum);  
// //      console.log(sum)
//     }
//   }

do {
  sum = fibo[fibo.length -1] +  fibo[fibo.length - 2];
  fibo.push(sum);  
} while(sum< num)
  
  var filteredFibo = fibo.filter(function(number){
   return isOdd(number);
  });

  var solution = filteredFibo.reduce(function(accumulator, current){
    accumulator = accumulator + current;
    
    return accumulator;
  });
  console.log(solution)
  
  return solution;
}

function isOdd(number) {
  if (number%2 !== 0) {
    return number;
  }
}

sumFibs(1000);
