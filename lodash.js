// Add a method to our _ object called chunk.
// Add two parameters to this method: array and size.
// Within the method, write an if statement that checks to see if size is undefined.
// Within the if statement block, set size equal to 1.
// After the if statement, create a variable called arrayChunks and initialize it to an empty array.
// Write a for loop that loops through array and has a counter that increments by size each turn of the loop.
// Within the for loop, create a variable called arrayChunk and set it equal to the chunk of the array going from the current loop index to the current loop index plus size. 
// You an use .slice() to accomplish this.
// Still within the for loop, add arrayChunk to the end of arrayChunks. You can use .push() to accomplish this.
// Finally, outside of the for loop, return arrayChunks from the method.

function chunk(array, size) {

    if(size === undefined) {
        size = 1;
    };

    let arrayChunks = [];

    for(let i = 0; i < array.length; i++){
        let arrayChunk = array.slice(i + size);
        arrayChunks.push(arrayChunk)
    }

    return arrayChunks



}