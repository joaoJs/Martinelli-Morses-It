function initializeKeyboard() {

      $(document).keydown(function(e) {
        if (e.keyCode === 32) {
          isPressed = true;
        } if (e.keyCode === 13) {
          if (hasStarted) {
            hasStarted = false;
          } else {
            hasStarted = true;
            startBits();
          }
        }
      });

      $(document).keyup(function(e) {
        if (e.keyCode === 32) {
          isPressed = false;
        }
      });

}
