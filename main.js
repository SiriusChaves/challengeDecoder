function encoderSplit(x){
    let preEncoderText = x.replace(/a/g,",≐,").replace(/e/g,",≑,").replace(/i/g,",≒,").replace(/o/g,",≓,").replace(/u/g,",≔,");
    let splitTextOut = preEncoderText.split(",");

    return splitTextOut;

}

function encoderText(y){
    let x = encoderSplit(y);
    let encoderTextArray = [];

    for (let i = 0; i < x.length; i++) {

        if (x[i]=="≐"){encoderTextArray.push("ai");}
        else if (x[i]=="≑"){encoderTextArray.push("enter");}
        else if (x[i]=="≒"){encoderTextArray.push("imes");}
        else if (x[i]=="≓"){encoderTextArray.push("ober");}
        else if (x[i]=="≔"){encoderTextArray.push("ufat");}
        else{
            encoderTextArray.push(x[i]);
        }
    }

    let outputText = encoderTextArray.join("");
    return outputText

}

function decoderText(x){
    let decoderText = x.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
    return decoderText
}

// Input/Output Alura
encoderText("gato");
decoderText("gaitober");

// Mensagem secreta Alura
decoderText("pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!");

function removeMessage(){
    let mensageText = document.getElementById("mensageText");
    let resultText = document.getElementById("resultText");

    mensageText.classList.remove("main_aside_mensage");
    mensageText.classList.add("main_aside_mensage-Hide");

    resultText.classList.remove("main_aside_result-Hide");
    resultText.classList.add("main_aside_result")

}

function addMessage(){
    let mensageText = document.getElementById("mensageText");
    let resultText = document.getElementById("resultText");

    mensageText.classList.remove("main_aside_mensage-Hide");
    mensageText.classList.add("main_aside_mensage");

    resultText.classList.remove("main_aside_result");
    resultText.classList.add("main_aside_result-Hide")

}


function criptoText(){
    
    let sourceArea = document.getElementById("sourceText");
    let targetArea = document.getElementById("targetText");

    if(!sourceArea.value){
        addMessage()
    }else{
        removeMessage()
    }

    targetArea.value = encoderText(sourceArea.value)
}

function decriptoText(){
    let sourceArea = document.getElementById("sourceText");
    let targetArea = document.getElementById("targetText");

    if(!sourceArea.value){
        addMessage()
    }else{
        removeMessage()
    }

    targetArea.value = decoderText(sourceArea.value)
}

function copyText(){
    let targetArea = document.getElementById("targetText").value;

    navigator.clipboard.writeText(targetArea)
    alert("Copiado com sucesso.")
}