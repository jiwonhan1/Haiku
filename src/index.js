import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { UserText } from './scripts';

$(document).ready(function(){
    $("button").click(function(event) {
        event.preventDefault();
        let userHaiku = new UserText ();
        userHaiku.line1 = "An old silent pond...";
        userHaiku.line2 = "A frog jumps into the pond,";
        userHaiku.line3 = "splash! Silence again.";
        
        let result = userHaiku.springToArray(userHaiku.line1);

        // let result2 = userHaiku.findSyllables();
        console.log (userHaiku);
        console.log (result);
        // console.log(result2)
    });
});