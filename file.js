$(document).ready(function() {
    // Play audio and update display text
    function playAudioAndDisplayText(audioId, displayText) {
      var audio = $("#" + audioId)[0];
      audio.currentTime = 0;
      audio.play();
      $("#display").text(displayText);
    }
  
    // Click event for drum pad
    $(".drum-pad").click(function() {
      var audioId = $(this).attr("id");
      var displayText = $(this).text().trim();
      playAudioAndDisplayText(audioId, displayText);
    });
  
    // Keydown event for drum pad
    $(document).keydown(function(event) {
      var key = String.fromCharCode(event.keyCode).toUpperCase();
      var drumPad = $("#" + key);
      if (drumPad.length > 0) {
        var audioId = drumPad.attr("id");
        var displayText = drumPad.text().trim();
        playAudioAndDisplayText(audioId, displayText);
      }
    });
  
    // Prevent focus outline when clicking on drum pad
    $(".drum-pad").on("mousedown", function() {
      $(this).blur();
    });
  });
  