let display = document.getElementById("display");

/* Add Values */

function appendValue(value){

    display.value += value;
}

/* Clear */

function clearDisplay(){

    display.value = "";
}

/* Delete */

function deleteLast(){

    display.value = display.value.slice(0,-1);
}

/* Calculate */

function calculate(){

    try{

        display.value = eval(display.value);
    }

    catch{

        display.value = "Error";
    }
}

/* Keyboard Support */

document.addEventListener("keydown", function(event){

    let key = event.key;

    if("0123456789+-*/.%".includes(key)){

        appendValue(key);
    }

    else if(key === "Enter"){

        calculate();
    }

    else if(key === "Backspace"){

        deleteLast();
    }

    else if(key === "Escape"){

        clearDisplay();
    }
});