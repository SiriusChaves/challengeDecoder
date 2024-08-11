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
    console.log(outputText);

}

function decoderText(x){
    let decoderText = x.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
    console.log(decoderText);
}

// Input/Output Alura
encoderText("gato");
decoderText("gaitober");

// Mensagem secreta Alura
decoderText("pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!");