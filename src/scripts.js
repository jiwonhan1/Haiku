
export class UserText {
  constructor (line1, line2, line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  springToArray(line){
    let spring = line.toLowerCase();
    let array = spring.split(" "); 
    return array; 
  }

  // findSyllables(){
  //   let vowels = ["a", "e", "i", "o", "u"];
  //   array1 = ["an", "old", "silent", "pond..."]
  //   let syllables = 0;

  //   for (i=0; i<array1.length; i++){
  //     // array[0] = "an"
  //     for (j=0; j<array1[i].length; j++){
  //       let currLetter = array1[i].chataAt(j);
  //       let lastLetter = array1[i].charAt(array1[i].length-1);
  //       let nextLetter = array1[i].charAt(j+1);
  //       // array[0].charaAt(0) = "a"
  //       if (vowels.includes(currLetter)){
  //         if (lastLetter === "e" || vowels.includes(nextLetter)){ 
  //           alert("vowel"); 
  //         } else {
  //           syllables++;
  //           console.log(syllables);
  //         }
  //       }
  //     }
  //   }
  //   return syllables;
  // }

}