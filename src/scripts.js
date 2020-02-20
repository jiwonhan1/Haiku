
export class UserText {
  constructor (line1, line2, line3){
    this.line1 = line1
    this.line2 = line2
    this.line3 = line3
  }

  findSyllables(line){

    let spring = line.toLowerCase()
    let array = spring.split(" ")
    console.log (array)
   
    const vowels = /[aeiouy]/i

    let syllables = 0;
    
    for (let i=0; i<array.length; i++){
      for (let j=0; j<array[i].length; j++){
        let currLetter = array[i].charAt(j)
        let nextLetter = array[i].charAt(j+1)
        let lastLetter = array[i].length-1
        let previousLetter = array[i].charAt(j-1)
        
        if (currLetter.match(vowels)){
          
          if (j === lastLetter && currLetter === "e" && array[i] !== "the" && previousLetter != "l"|| nextLetter.match(vowels)){
            continue
          } else {
            syllables++;
            console.log (currLetter)
            console.log (syllables)
          }
        }
      }  
    } return syllables
    
   }

}

