// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  // Factory for objects
  const pAequorFactory = (n, arr) => {
      return {
        specimenNum: n,
        dna: arr,
        mutate(){  

          // Get random baseDna from array
          let num = Math.floor(Math.random() * arr.length);

          // Get the letter to be mutatad
          let mutateThis = arr[num];

          // dnaBases
          const dnaBases = ['A', 'T', 'C', 'G'];

          // Get new letter
          let newNum = dnaBases[Math.floor(Math.random() * 4)]

          // Check and replace if needed (letter)
          if(newNum === mutateThis) {
            do {newNum = dnaBases[Math.floor(Math.random() * 4)]} while(
              newNum === mutateThis
            )
          }
          
          //Replace in array
          arr.splice(num, 1, newNum )

          dna = this.arr;         

        },
        compareDNA(obj) {

          // New objects DNA
          let objectOne = obj.dna;

          // This objects DNA
          let objectTwo = this.dna;

          // The sum of duplicates
          let sumOfDup = 0;

          // Check for duplicates
          for(let i = 0; i < objectOne.length; i++) {
            if(objectOne[i] === objectTwo[i]){               
              sumOfDup++
            }                
        }

        // Calculate percentage of match
          let percentageMatching = Math.floor(sumOfDup / objectOne.length * 100);         
          
        // Return the logfile.
          return `specimen ${obj.specimenNum} and specimen ${this.specimenNum} have ${percentageMatching}% DNA in common`

        },

        willLikelySurvive() {

          let sumOfGoodDNA = 0;
          let dnaArray = this.dna; 

          // Check for C or G
          for(let i = 0; i < dnaArray.length; i++) {
            if(dnaArray[i] === 'C' || dnaArray[i] === 'G'){               
              sumOfGoodDNA++;
            }

          
        }
        
        if(Math.floor((sumOfGoodDNA / dnaArray.length) * 100) >= 60) {
            return true;
          } else {

            return false;
          }
        }
      }
  }
  

  // Create 30 'good' objects

let survivalArray = [];

for(let i = 0; survivalArray.length < 30; i++ ) {
  let created = pAequorFactory(i, mockUpStrand())

  if(created.willLikelySurvive()) {
    survivalArray.push(created)
  }
}

console.log(survivalArray.length)