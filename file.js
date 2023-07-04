$(document).ready(function(){
    var drumPad = $('.drum-pad');

    drumPad.click( function() {
        var drumPadId = $(this).attr('id');

        var audio = $("#" + drumPadId + ".clip");
        audio.get(0).play(); 
    })
});