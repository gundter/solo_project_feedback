/**
 * Created by Prime on 4/24/15.
 */
var date =["4/13/2015", "4/14/2015", "4/15/2015", "4/16/2015", "4/17/2015", "4/20/2015", "4/21/2015", "4/22/2015", "4/23/2015"];


$(document).ready(function(){
    jQuery.get('text.txt', function(data){
        var array = data.split("\n");
        array.split("\t");
        console.log(array);
        $('#show').html(array);
    });

    $('button').click(function(){

    });

});