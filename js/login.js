var enc_token = document.getElementById('encToken').innerHTML;

var crypt = new JSEncrypt();
crypt.setKey(myRSAprivKey); 
var dec_token = crypt.decrypt(enc_token);

document.getElementById('token').value = dec_token;

document.getElementById('sendSecretKey').click();