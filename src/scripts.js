
  export class UserText {
    constructor (line1, line2, line3){
        this.line1 = line1
        this.line2 = line2
        this.line3 = line3

        // //let firstLine = this.line1.toUpperCase();
        // console.log(this.lline1)
    }

    springToArray(line){
        let spring = line.toLowerCase();
        let array = spring.split(" "); 
        return array;      
    }

  }

    // findSyllables(){
    //     let array1 = springToArray(this.line1);

    //     let vowels = ["a", "e", "i", "o", "u"];
    //     let array1 = this.line1.toLo;
    //     // array1 = ["an", "old", "silent", "pond..."]
    //     let syllables =0;

    //     for (i=0; i<array1.length; i++){
    //         // array[0] = "an"
    //         for (j=0; j<array1[i].length){

    //         }
    //         // array[0].charaAt(0) = "a"

    //     }
    // // }