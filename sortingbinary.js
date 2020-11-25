function runProgram(input){
    input=input.split("\n")
    var n=Number(input[0])
    var arr=input[1].split(" ").map(Number)
    console.log(SearchElem(arr,n))
}
function SearchElem(arr,n){
    var start=0
    var end=arr.length-1
    while(start<end){
        var mid=start+Math.floor((end-start)/2)
        if(arr[mid]>arr[end]){
            start=mid+1
        }
        else{
            end=mid
        }
    }
    return arr[start]
}

runProgram(`10
4 6 7 9 10 -1 0 1 2 3`)