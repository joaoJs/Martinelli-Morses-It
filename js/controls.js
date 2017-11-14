function initializeKeyboard() {
      console.log("Keyboard initialized");
      $(document).keydown(function(e) {
        if (e.keyCode === 32) {
          e.preventDefault();
          isPressed = true;
        } else if (e.keyCode === 13) {
          e.preventDefault();
          if (hasStarted) {
            hasStarted = false;
          } else {
            hasStarted = true;
            startBits();
          }
        } else if (e.keyCode === 38) {
          e.preventDefault();
          const val = $('.result').val();
          $('.result').html("");
          whichLetter();
        }
      });

      $(document).keyup(function(e) {
        if (e.keyCode === 32) {
          e.preventDefault();
          isPressed = false;
        }
      });

}
