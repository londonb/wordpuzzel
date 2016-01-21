var vowel = function(string) {
// var firstCharacter = string.charAt(0);

if ((string === "a") || (string === "e") || (string === "i") || (string === "o") || (string === "u") || (string === "A") || (string === "E") || (string === "I") || (string === "O") || (string === "U")) {
   return true;
  } else{
    return false;
  }
}

var splitString = function(string) {

  var strArr = [];
  var strArr = string.split("");
  var dashArr = [];
  // return strArr;



for (var i = 0; i < strArr.length; i++) {
  if (strArr[i] === "a") {
    strArr[i] = strArr[i].replace("a","-");
    // return strArr;
    } else if (strArr[i] === "e") {
      strArr[i] = strArr[i].replace("e","-");

    }  else if (strArr[i] === "i") {
      strArr[i] = strArr[i].replace("i","-");
    }  else if (strArr[i] === "o") {
      strArr[i] = strArr[i].replace("o","-");
    }  else if (strArr[i] === "u") {
      strArr[i] = strArr[i].replace("u","-");
    }  else if (strArr[i] === "A") {
      strArr[i] = strArr[i].replace("A","-");
    }  else if (strArr[i] === "E") {
      strArr[i] = strArr[i].replace("E","-");
    }  else if (strArr[i] === "I") {
      strArr[i] = strArr[i].replace("I","-");
    }  else if (strArr[i] === "O") {
      strArr[i] = strArr[i].replace("O","-");
    }  else if (strArr[i] === "U") {
      strArr[i] = strArr[i].replace("U","-");
    }
}

var outputString = strArr.join("");

// console.log(outputString);
// return strArr;
return outputString;

}

$(document).ready(function(){

  $("form#replaceVowel").submit(function(event) {
    var string = $("input#string").val();
    var toPrint = splitString(string);

    $("#printTo").append("<br><hr>",toPrint,"<br><hr><strong>Good Luck!</strong>");
    $("#hide").hide();

  event.preventDefault();
  });

});
