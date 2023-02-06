function encrypt(message, key) {
    var result = "";
    for (var i = 0; i < message.length; i++) {
      var charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode((charCode - 65 + key) % 26 + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode((charCode - 97 + key) % 26 + 97);
      } else {
        result += message[i];
      }
    }
    return result;
  }
  
  var message = "Hello, World!";
  var key = 13;
  var encryptedMessage = encrypt(message, key);
  console.log("Message: " + message);
  console.log("Encrypted message: " + encryptedMessage);
  