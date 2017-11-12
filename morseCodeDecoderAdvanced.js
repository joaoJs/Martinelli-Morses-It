var decodeBitsAdvanced = function(bits){
    if (bits === "" || !/1/.test(bits)) {
      return "";
    }
    bits = bits.replace(/^0+/, "");
    bits = bits.replace(/0+$/, "");

    var ones = bits.replace(/0+/g, "-");
    var zeroes = bits.replace(/1+/g, "-");
    var nOnes = ones.split("-").map(function(o) {
      return o.length;
    });
    var nZeroes = zeroes.split("-").map(function(z) {
      return z.length;
    });
    if (nZeroes[0] === 0) {
      nZeroes.shift();
    }
    if (nZeroes.length > 1 && nZeroes[nZeroes.length - 1] === 0) {
        nZeroes.pop();
    }
    var onesAvg = nOnes.reduce(function(a,b) {return a+b}) / nOnes.length;
    var zeroesAvg = nZeroes.reduce(function(a,b) {return a+b}) / nZeroes.length;

    var a1 = Math.round(onesAvg);
    var a0 = Math.round(zeroesAvg);

    var max = Math.max.apply(Math, nZeroes);
    console.log(max);
    var min = Math.min.apply(Math, nZeroes);
    console.log(min)
    console.log(" ------- ");

    var a02 = (max + a0) / 2;

    var str = "";

    nOnes.forEach(function(n,i) {
      if (a0 > 0 && n > a0) {
        if (max/a0 > 4.5) {
          if (n <= a1 + 1) {
            str += "."
          } else {
            str += "-"
          }
        } else {
          str += "-";
        }
      } else {
        if(n <= a1) {
          str+= ".";
        } else if (n > a1) {
          str += "-";
        }
      }
      if ((a0 >= a1 * 2) && nZeroes[i]) {
        if (a0 - a1 <= 3) {
           str += " ";
        } else {
           str += "   ";
        }
      } else {
        if (min === max && max < 5 && min ) {
          str += "";
        } else if (min !== max && nZeroes[i] <= a0) {
          str += "";
        } else if (min !== max && nZeroes[i] > a0 && nZeroes[i] <= a02) {
          if (max/a0 > 4.5 && nZeroes[i] <= a0 + 1) {
            str += "";
          } else {
            str += " "
          }
        } else if (min !== max && nZeroes[i] > a02) {
          str += "   "
        }
      }
    });
  return str;
}

var decodeMorse = function(morseCode){
  if (morseCode === "") {
    return "";
  }
  if (morseCode.indexOf(" ") === -1 && morseCode.indexOf("   ") === -1) {
    return MORSE_CODE[morseCode];
  }
  var words = morseCode.split("   ");
  var chars = words.map(function(w) {
    return w.split(" ")});

  return chars.map(function(w) {
    return w.map(function(c) {
      return MORSE_CODE[c];
    }).join("");
   }).join(" ").trim();
}
