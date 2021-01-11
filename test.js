let arrayOne = [
    'G', 'T', 'T', 'C',
    'A', 'C', 'G', 'A',
    'T', 'C', 'C', 'C',
    'C', 'C', 'G'
  ]
let arrayTwo = [
    'T', 'T', 'A', 'G',
    'A', 'G', 'G', 'G',
    'C', 'G', 'C', 'C',
    'C', 'A', 'C'
  ]
let sum = 0;

function checkThis() {
    for(let i = 0; i < arrayOne.length; i++) {
        if(arrayOne[i] === 'C' || arrayOne[i] === 'G'){               
            sum++;
        }
    
}

if(Math.floor((sum / arrayOne.length) * 100) >= 60) {
    
    console.log('true');
  
  } else {

      console.log('false' + (sum / arrayOne.length) * 100 + '    ' + sum)
  }



} 

// for(let i = 0; i < arrayOne.length; i++) {

//     if(arrayOne[i] === arrayTwo[i]){
//         console.log(arrayOne[i] + 'Index One')
//         console.log(arrayTwo[i] + 'Index Two')

//         sum++
//     }

    
//}

let percentageMatching = Math.floor(sum / arrayOne.length * 100);


//console.log(percentageMatching)

console.log(checkThis())