//alert('entro in SYMdecrypt ' + SYMkey)



function CryptoJSAesDecrypt(passphrase,encrypted_json_string){

    var obj_json = JSON.parse(atob(encrypted_json_string));

    var encrypted = obj_json.ciphertext;
    var salt = CryptoJS.enc.Hex.parse(obj_json.salt);
    var iv = CryptoJS.enc.Hex.parse(obj_json.iv);   

    var key = CryptoJS.PBKDF2(passphrase, salt, { hasher: CryptoJS.algo.SHA512, keySize: 64/8, iterations: 999});


    var decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv: iv});

    return decrypted.toString(CryptoJS.enc.Utf8);
}

//console.log(CryptoJSAesDecrypt('supersegreto','<?php echo $string_json_fromPHP?>'));



var fieldsToDecrypt = document.getElementById('fieldsToDecrypt');

if(fieldsToDecrypt) {

	//alert('OK, decifro.')
    $("body").append('<div class="spinnerx"></div>');

	$(fieldsToDecrypt).find('input:text, input:password, input:file, select, textarea')
        .each(function() {
                console.log($(this).attr("id"))
                $(this).val(CryptoJSAesDecrypt(SYMkey,$(this).val()));
            	//alert(CryptoJSAesDecrypt(SYMkey,$(this).val()))

        });
	
}
else {
	alert("Non c'è nulla da decifrare.")
}
/*
var enc_token = document.getElementById('encToken').innerHTML;

var crypt = new JSEncrypt();
crypt.setKey(myRSAprivKey); 
var dec_token = crypt.decrypt(enc_token);

document.getElementById('token').value = dec_token;

document.getElementById('sendSecretKey').click();
*/