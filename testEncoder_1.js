function splitText(x){
    let text = x.toLowerCase();
    let splitText = text.split("");
    return splitText;    
};

function encoderText(x){
    let encoderTextOut = []

    for (let i = 0; i < x.length; i++) {

        if (x[i]=="a"){encoderTextOut.push("x");}
        else if (x[i]=="b"){encoderTextOut.push("l");}
        else if (x[i]=="c"){encoderTextOut.push("t");}
        else if (x[i]=="d"){encoderTextOut.push("v");}
        else if (x[i]=="e"){encoderTextOut.push("d");}
        else if (x[i]=="f"){encoderTextOut.push("c");}
        else if (x[i]=="g"){encoderTextOut.push("j");}
        else if (x[i]=="h"){encoderTextOut.push("u");}
        else if (x[i]=="i"){encoderTextOut.push("f");}
        else if (x[i]=="j"){encoderTextOut.push("r");}
        else if (x[i]=="k"){encoderTextOut.push("i");}
        else if (x[i]=="l"){encoderTextOut.push("g");}
        else if (x[i]=="m"){encoderTextOut.push("w");}
        else if (x[i]=="n"){encoderTextOut.push("e");}
        else if (x[i]=="o"){encoderTextOut.push("p");}
        else if (x[i]=="p"){encoderTextOut.push("m");}
        else if (x[i]=="q"){encoderTextOut.push("z");}
        else if (x[i]=="r"){encoderTextOut.push("n");}
        else if (x[i]=="s"){encoderTextOut.push("a");}
        else if (x[i]=="t"){encoderTextOut.push("y");}
        else if (x[i]=="u"){encoderTextOut.push("h");}
        else if (x[i]=="v"){encoderTextOut.push("s");}
        else if (x[i]=="w"){encoderTextOut.push("k");}
        else if (x[i]=="x"){encoderTextOut.push("o");}
        else if (x[i]=="y"){encoderTextOut.push("q");}
        else if (x[i]=="z"){encoderTextOut.push("b");}
        else if (x[i]==" "){encoderTextOut.push("&");}
        else{
            encoderTextOut.push(x[i]);
        }
    }

    let output = encoderTextOut.join("");
    
    console.log(output)
}

function decoderText(x){
    let decoderTextOut = []

    for (let i = 0; i < x.length; i++) {

        if (x[i]=="x"){decoderTextOut.push("a");}
        else if (x[i]=="l"){decoderTextOut.push("b");}
        else if (x[i]=="t"){decoderTextOut.push("c");}
        else if (x[i]=="v"){decoderTextOut.push("d");}
        else if (x[i]=="d"){decoderTextOut.push("e");}
        else if (x[i]=="c"){decoderTextOut.push("f");}
        else if (x[i]=="j"){decoderTextOut.push("g");}
        else if (x[i]=="u"){decoderTextOut.push("h");}
        else if (x[i]=="f"){decoderTextOut.push("i");}
        else if (x[i]=="r"){decoderTextOut.push("j");}
        else if (x[i]=="i"){decoderTextOut.push("k");}
        else if (x[i]=="g"){decoderTextOut.push("l");}
        else if (x[i]=="w"){decoderTextOut.push("m");}
        else if (x[i]=="e"){decoderTextOut.push("n");}
        else if (x[i]=="p"){decoderTextOut.push("o");}
        else if (x[i]=="m"){decoderTextOut.push("p");}
        else if (x[i]=="z"){decoderTextOut.push("q");}
        else if (x[i]=="n"){decoderTextOut.push("r");}
        else if (x[i]=="a"){decoderTextOut.push("s");}
        else if (x[i]=="y"){decoderTextOut.push("t");}
        else if (x[i]=="h"){decoderTextOut.push("u");}
        else if (x[i]=="s"){decoderTextOut.push("v");}
        else if (x[i]=="k"){decoderTextOut.push("w");}
        else if (x[i]=="o"){decoderTextOut.push("x");}
        else if (x[i]=="q"){decoderTextOut.push("y");}
        else if (x[i]=="b"){decoderTextOut.push("z");}
        else if (x[i]=="&"){decoderTextOut.push(" ");}
        else{
            decoderTextOut.push(x[i]);
        }
    }

    let output = decoderTextOut.join("");
    
    console.log(output)
}

encoderText(splitText("Teste de encriptação de texto"))
decoderText(splitText("ydayd&vd&detnfmyxçãp&vd&ydoyp"))
