/**
 * Created by Prime on 4/24/15.
 */
//var date =["4/13/2015", "4/14/2015", "4/15/2015", "4/16/2015", "4/17/2015", "4/20/2015", "4/21/2015", "4/22/2015", "4/23/2015"];
var shoutOuts = [];
var i;
//var counter = 0;

$(document).ready(function(){
    jQuery.get('text.txt', function(data){
        shoutOuts = data.split("\n");
        //console.log(shoutOuts.length);
        //$('#show').html(array);
    });

    //$('button').click(function(){
    //    for (i = 0; i < shoutOuts.length; i++){
    //        counter++;
    //        $("#show").append("<li class='newThing'>" + shoutOuts[i] + "</li>");
    //        console.log(counter);
    //        var added = $("#" + counter);
    //    }
    //    console.log(added);
    //    added.toggle();
    //});

    $('button').on("click", function(){
       for (i = 0; i < shoutOuts.length; i++){
           //console.log(el);
           $('#show').append("<li class='newBullet'>" + shoutOuts[i] + "</li>");

           $(".newBullet").hide().delay( i * 1000).slideDown();

       }
    });

    //$('#show').on('click','.newBullet', function(){
    //    $(this).animate({
    //        fontSize: "150%",
    //        opacity: "0.6"
    //    }, 1500);
    //});

});