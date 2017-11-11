var decodeBitsAdvanced = function(bits){
    bits = bits.replace(/^0+/, "");
    bits = bits.replace(/0+$/, "");

    var ones = bits.replace(/0+/g, "-");
    console.log(ones);
    var zeroes = bits.replace(/1+/g, "-");
    console.log(zeroes);
    var nOnes = ones.split("-").map(o => o.length);
    var nZeroes = zeroes.split("-").map(z => z.length);
    if (nZeroes[0] === 0) {
      nZeroes.shift();
    }

    //console.log(nOnes);
    console.log(nZeroes);

    var onesAvg = nOnes.reduce((a,b) => a+b) / nOnes.length;
    var zeroesAvg = nZeroes.reduce((a,b) => a+b) / nZeroes.length;

    var a1 = Math.round(onesAvg);
    var a0 = Math.round(zeroesAvg);

    console.log(a0);

    var max = Math.max.apply(Math, nZeroes);
    console.log(max);

    var a02 = (max + a0) / 2;

    var str = "";

    nOnes.forEach((n,i) => {
      if(n <= a1) {
        str+= ".";
      } else if (n > a1) {
        str += "-";
      }
      if (nZeroes[i] <= a0) {
        str += "";
      } else if (nZeroes[i] > a0 && nZeroes[i] <= a02) {
        str += " "
      } else if (nZeroes[i] > a02) {
        str += "   "
      }
    });


  console.log(str);

    //return bits.replace('111', '-').replace('000', ' ').replace('1', '.').replace('0', '');
}

var decodeMorse = function(morseCode){
  var words = morseCode.split("   ");
  var chars = words.map(w => w.split(" "));

  return chars.map(function(w) {
    return w.map(function(c) {
      return MORSE_CODE[c];
    }).join("");
  }).join(" ").trim();

  //return chars.map(w => w.map(c => MORSE_CODE[c]).join("")).join(" ").trim();
}
