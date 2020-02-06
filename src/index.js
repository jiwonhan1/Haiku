import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { UserText } from './scripts';

$(document).ready(function(){
    $("form").submit(function(event) {
        event.preventDefault();
        let userHaiku = new UserText ();
        userHaiku.line1 = $("#line1").val();
        userHaiku.line2 = $("#line2").val();
        userHaiku.line3 = $("#line3").val();
        
       let result = userHaiku.findSyllables(userHaiku.line1);
       let result2 = userHaiku.findSyllables(userHaiku.line2);
       let result3 = userHaiku.findSyllables(userHaiku.line3);
       
       if (result === 5 && result2 === 7 && result3 === 5) {
           $("h1").text("This is Hiaku")
       } else {
           $("h1").text("This is not Hiaku")
       }
    });
});


