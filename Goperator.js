// G Operator
// Description

// You are given a range of integers [1,n], (Both inclusive).

// An operator G(a,b) is defined as: {gcd(a,b)}, where a and b are distinct and are selected from the given range.

// Find the maximum possible value using operator G.

function processData(input) {
    input = input.split('\n').map(Number)
    var n = (input.shift())
    var arr = input
    
    for(var i = 0 ; i < n ; i++){
        if(arr[i]%2 === 0){
            console.log(arr[i]/2)
        }
        else if(arr[i]%2 !== 0){
            console.log((arr[i]-1)/2)
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
processData(`3
2
11
12`)
