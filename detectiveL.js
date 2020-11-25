// Detective L

// L is a famous detective in the anime series Death Note and is known for 
// solving puzzles and riddles for investigation.
// There is a security breach in Tokyo Police and they want L's 
// help.He is given the security matrix of dimension [nxm] by the police.
// L decodes that his rival Light has breached the security matrix 
// and has followed a specific way of accessing the matrix. Below is the 
// image of its traversal. Surprisingly, the traversal is in the L shape.

function processData(input) {
    input = input.split('\n')
    var t = Number(input.shift())
    
    for(var i = 0 ; i < t ; i++){
        var [row, col] = input.shift().split(' ').map(Number)
        var matrix = []
        for(var j = 0; j < row ; j++){
            matrix.push(input.shift().split(' ').map(Number))
        }
        finalFunction(row, col, matrix)
        
      
    }
      function finalFunction( row, col, a ){
          var temp = []
            for(var x = 0 ; x < col ; x++){
                for(y = 0 ; y < row -x ; y++){
                   temp.push(a[y][x])
                }
                for(z = x+1 ; z < col ; z++){
                    temp.push(a[row -1 -x][z])
                }
            }
            console.log(temp.join(' '))
        }
} 
processData(`2
3 3
1 2 3
4 5 6
7 8 9
4 3
1 2 3
4 5 6
7 8 9
10 11 12`)