
// 1. Declare and initialize an empty multidimensional array.(Array of arrays)
var arr = [];

// 2. Declare and initialize a multidimensional array representing the following matrix:
var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

for(i=0;i < arr.length; i++){
    document.write(`${arr[i].join(" ")} <br>`)
}
