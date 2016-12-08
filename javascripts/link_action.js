//when link is clicked (listener)
//find corresponding image square
//add attributes to change color and add content

$( document ).ready(function(){
 
    //games_link listener
    $( "#games_link" ).on('click', function() {
        $('#active_square').remove()
        $("#controller_image").append('<div id="active_square">TEST</div>')
    });
    
    //movies_link listener
    $( "#movies_link" ).on('click', function() {
        $('#active_square').remove()
        $("#movies_image").append('<div id="active_square">TEST</div>')
    });
 
 
     //music_link listener
    $( "#music_link" ).on('click', function() {
        $('#active_square').remove()
        $("#music_image").append('<div id="active_square">TEST</div>')
    });
 
 
     //more_link listener
    $( "#more_link" ).on('click', function() {
        $('#active_square').remove()
        $("#more_image").append('<div id="active_square">TEST</div>')
    });
    
    //logo listener
    $( "#logo" ).on('click', function() {
        $('#active_square').remove()
    });
 
 
});