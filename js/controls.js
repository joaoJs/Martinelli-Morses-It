function initializeKeyboard() {
      console.log("Keyboard initialized");
      $(document).keydown(function(e) {
        //e.preventDefault();

        //if "space bar"
        if (e.keyCode === 32) {
          e.preventDefault();
          //isPressed = true;
          if (hasStarted) {
            isPressed = true;
            canFinish = true;
          }
        }
        // if "Enter"
        else if (e.keyCode === 13) {
          e.preventDefault();
          if (canStart) {
            if (!hasStarted) {
              hasStarted = true;
              startBits();
            } else if (canFinish) {
              hasStarted = false;
              finishBits(gameLoop);
            }
          }
          // if (canStart) {
          //   hasStarted = false;
          //   if (canFinish) {
          //     //hasStarted = false;
          //     finishBits();
          //   }
          // }
          // if (!hasStarted) {
          //     hasStarted = true;
          //     startBits();
          // }
        }

        // if "Up arrow"
        else if (e.keyCode === 38) {
          e.preventDefault();
          canStart = true;
          hasStarted = false;
          const val = $('.result').val();
          $('.result').html("");
          $('.start').html("");
          whichLetter();
        }
      });

      $(document).keyup(function(e) {

        // if release "space bar"
        if (e.keyCode === 32) {
          e.preventDefault();
          isPressed = false;
        }
      });

}
