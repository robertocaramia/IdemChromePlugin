const RSApriv = chrome.runtime.getURL('data/RSA.priv');

fetch(RSApriv)
    .then((resp) => resp.text()) // Transform the data into text
    .then(function(data) {
        window.RSAprivKey = data;
})



const SYMkey = chrome.runtime.getURL('data/SYMETRIC-key.ti');

fetch(SYMkey)
    .then((resp) => resp.text()) // Transform the data into text
    .then(function(data) {
        window.SYMkeyx = data;
})



document.addEventListener('DOMContentLoaded', function() {


    var decrypt = document.getElementById('decrypt');

    decrypt.addEventListener('click', function() {


        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {

            chrome.tabs.executeScript(tabs[0].id, {
                code: "var SYMkey = `" + SYMkeyx + "`"
            }, function() {

                chrome.tabs.executeScript(tabs[0].id, {
                    file: "js/jquery-1.8.3.min.js"
                }, function() {

                    chrome.tabs.executeScript(tabs[0].id, {
                        file: "js/crypto-js.min.js"
                    }, function() {

                        chrome.tabs.executeScript(tabs[0].id, {
                            file: "js/aes.min.js"
                        }, function() {

                            chrome.tabs.executeScript(tabs[0].id, {
                                file: "js/cipher-core.min.js"
                            }, function() {
                                        
                                chrome.tabs.executeScript(tabs[0].id, {
                                    file: 'js/SYMdecrypt.js'
                                }, );

                            });
                        });
                    });
                });
            });
        });
    }, false);


}, false);






// LOGIN


document.addEventListener('DOMContentLoaded', function() {



    var getToken = document.getElementById('getToken');

    getToken.addEventListener('click', function() {


        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {

            chrome.tabs.executeScript(tabs[0].id, {
                code: "var myRSAprivKey = `" + RSAprivKey + "`"
            }, function() {

                chrome.tabs.executeScript(tabs[0].id, {
                    file: "js/jquery-1.8.3.min.js"
                }, function() {

                    chrome.tabs.executeScript(tabs[0].id, {
                        file: "js/jsencrypt.js"
                    }, function() {

                        chrome.tabs.executeScript(tabs[0].id, {
                            file: 'js/login.js'
                        }, );

                    });
                });
            });
        });
    }, false);


}, false);


 
    
