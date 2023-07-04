$(document).ready(function(){
    var drumPad = $('.drum-pad');
    var displayAudioId = $('#display');

    drumPad.click( function() {
        var drumPadId = $(this).attr('id');

        var audio = $("#" + drumPadId + ".clip");
        audio.get(0).play(); 

        displayAudioId.text(drumPadId.toString() + " " + "is playing").css("color" , "red");

       
    });
    $(document).keydown(function(event) {
        var keyPressed = String.fromCharCode(event.keyCode);
        var drumPad = $('#' + keyPressed + '.drum-pad');
        
        if (drumPad.length > 0) {
          drumPad.trigger('click');
        }
      });

});