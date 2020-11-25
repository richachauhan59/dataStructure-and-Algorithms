function runProgram(input){
    input = input.split('\n')
    var n1 = Number(input.shift())
    var arr1 = input.shift().split(' ').map(Number)
    var n2 = Number(input.shift())
    var arr2 = input.shift().split(' ').map(Number)
   
 
   console.log(sum(arr1, arr2 , n1, n2))
 
    function sum(a ,b, m, n){
      var i =0, j = 0
      var res = 0, sum1 = 0, sum2 = 0
     while(i < m && j < n ){
       if(a[i] < b[j]){
         sum1 = sum1 + a[i]
         i = i+1
       }
       else if(b[j] < a[i]){
         sum2 = sum2 + b[j]
         j = j+1
       }
       else{
         res = res + Math.max(sum1, sum2)
         sum1 = 0
         sum2 = 0
 
         while(i < m && j < n && a[i] === b[j]){
             res = res + a[i]
             i = i + 1
             j = j + 1
         }
       }
     }
     while(i < m ){
         sum1 = sum1 + a[i]
         i = i+1
     }
     while(j < n){
         sum2 = sum2 + b[j]
         j = j+1
     }
     res = res + Math.max(sum1, sum2)
     return res
 }
 }

 runProgram(`13 
 3 5 7 9 20 25 30 40 55 56 57 60 62
 11 
 1 4 7 11 14 25 44 47 55 57 100`)