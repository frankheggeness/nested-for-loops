/**
 * Returns a string representation of a 2-dimensional data structure 
 * @param {number} depth 
 * @param {number} [width=depth] 
 * @returns {string}
 */
function nestedForLoops (depth, width = depth) {
  let result = "\n";

  // Write code here
  
  for(var y=0;y<depth;y++){
    for(var x=0;x<width;x++){
      if(x === width -1){
        result = result + ' {x:'+ x + ', y:'+ y +'}'
      }else if(x === 0){
        result = result + '{x:'+ x + ', y:'+ y +'},'
      }
      else{
      result = result + ' {x:'+ x + ', y:'+ y +'},';
      }
    }
    result = result + '\n'
  }
  
return result;
};

// To see your console output outside the tests add function calls here.
// console.log(nestedForLoops(4));
