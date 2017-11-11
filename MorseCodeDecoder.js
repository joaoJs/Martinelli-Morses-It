var decodeBits = function(bits){
    let rate;
    let i = 1;
    let dash;
    let dot;
    let between;
    bits = bits.replace(/^0+/, "");
    bits = bits.replace(/0+$/, "");
    while (!rate) {
    dash = "111".repeat(i);
    dot = "1".repeat(i);
    between = "0".repeat(i);
    dotRE = new RegExp("^" +dot + "(?!1)");
    dashRE = new RegExp("^" +dash + "(?!1)");
    var betweenRE = new RegExp(dot + "(?="+between+")");
    var betweenDashRE = new RegExp(dash + "(?="+between+")");
      if (bits.includes("0")) {
        if (dotRE.test(bits) && betweenRE.test(bits)) {
          rate = i;
          break;
        } else if (dashRE.test(bits) && betweenDashRE.test(bits)) {
          rate = i;
          break;
        }
      } else if (dotRE.test(bits)) {
          rate = i;
          break;
      }
      i++;
    }
    dash = "111".repeat(i);
    dot = "1".repeat(i);
    let dSpace = "0".repeat(i);
    let cSpace = "000".repeat(i);
    let wSpace = "0000000".repeat(i);
    let dSpaceRE = new RegExp(dSpace, "g");
    dashRE = new RegExp(dash, "g");
    dotRE = new RegExp(dot, "g");
    let cSpaceRE = new RegExp(cSpace, "g");
    let wSpaceRE = new RegExp(wSpace, "g");
    return bits.replace(dashRE, '-').replace(wSpaceRE, '   ').replace(dotRE, '.').replace(cSpaceRE, ' ').replace(dSpaceRE, '');
};

var decodeMorse = function(morseCode){
  var words = morseCode.split("   ");
  var chars = words.map(w => w.split(" "));
  console.log(chars.map(w => w.map(c => MORSE_CODE[c]).join("")).join(" ").trim());
  return chars.map(w => w.map(c => MORSE_CODE[c]).join("")).join(" ").trim();
};
