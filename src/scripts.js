
export class UserText {
  constructor (line1, line2, line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  findSyllables(line){

    let spring = line.toLowerCase();
    let array = spring.split(" "); 
    console.log (array);
   
    let vowels = /[aeiouy]/i;
    // var consonants = /[bcdfghjklmnpqrstvwxz]/i;

    let syllables = 0;
    
    for (let i=0; i<array.length; i++){
      for (let j=0; j<array[i].length; j++){
        let currLetter = array[i].charAt(j);
        let nextLetter = array[i].charAt(j+1);
        let lastLetter = array[i].length-1;
        let previousLetter = array[i].charAt(j-1);
        
        if (currLetter.match(vowels)){
          
          if (j === lastLetter && currLetter === "e" && array[i] !== "the" && previousLetter != "l"|| nextLetter.match(vowels)){
            continue
          } else {
            syllables++;
            console.log (currLetter);
            console.log (syllables);
          }
        }
      }  
      // } for (let x=0; x<array[i].length; x++) {
      //   let consonantCheck = array[i].charAt(x);
      //   let nextConsonant = array[i].charAt(x+1);
      //   if (consonantCheck.match(consonants) && nextConsonant == "y") {
      //     syllables ++
      //     console.log(syllables);
      //   } 
      // }
    } return syllables
    
  }

}

