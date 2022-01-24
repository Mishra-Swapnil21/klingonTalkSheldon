console.log("script is working")
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#input");
var txtOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/klingon.json"




function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured" , error);
    alert("something went wrong with server! try again after some time")
}

function clickHandler() {
     var inputText = txtInput.value;  //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
       .then(respose => respose.json())
       .then(json => {
         var translatedText = json.contents.translated;
         txtOutput.innerText = translatedText;
       })  
       .catch(errorHandler)
       
};     



btnTranslate.addEventListener("click", clickHandler)

