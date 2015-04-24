/**
 * Created by Prime on 4/24/15.
 */
//var date =["4/13/2015", "4/14/2015", "4/15/2015", "4/16/2015", "4/17/2015", "4/20/2015", "4/21/2015", "4/22/2015", "4/23/2015"];
var shoutOuts = [];
var i;
var counter = 0;

$(document).ready(function(){
    jQuery.get('text.txt', function(data){
        shoutOuts = data.split("\n");
        //console.log(shoutOuts.length);
        //$('#show').html(array);
    });

    $('button').click(function(){
        for (i = 0; i < shoutOuts.length; i++){
            counter++;
            $("#show").append("<li id=" + counter + ">" + shoutOuts[i] + "</li>");
            console.log(counter);
            var added = $("#" + counter);
        }
        console.log(added);
        added.toggle();
    });

});