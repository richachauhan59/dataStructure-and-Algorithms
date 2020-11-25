function processData(input) {
    input = input.split('\n')
    var n = Number(input.shift())
    for(var k =0 ; k<n ;k++){
        var arr = input.shift().split('')
        var vowels = ['a', 'e', 'i', 'o','u', 'A', 'E', 'I', 'O', 'U']
        var i =0;
        var j = arr.length-1
        while(i<j){
            while(i < j && !vowels.includes(arr[i])){
                i++
            }
            while(i < j && !vowels.includes(arr[j])){
                j--
            }
            var temp = arr[i]
            arr[i++] = arr[j]
            arr[j--] = temp
        }
        console.log(arr.join(''))
    }
   
} 
processData(`2
abc
abe`)