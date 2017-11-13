function initializeKeyboard() {

      $(document).keydown(function(e) {
        if (e.keyCode === 32) {
          isPressed = true;
        } if (e.keyCode === 38) {
          console.log(bits);
        }
      });

      $(document).keyup(function(e) {
        if (e.keyCode === 32) {
          isPressed = false;
        }
      });

}
