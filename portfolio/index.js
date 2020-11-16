// set up text to print, each item in array is new line
var aText = new Array(
"Hello World!", 
"How are you doin' today? :) ",
"I'm fine :)"
);

// the following variables define time (millisecond)
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
    
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
    
function typewriter1(text) {
    var destination = document.getElementsByClassName("banner")[0];
    textToPrint = ""

    for (let i=0; i<text.length; i++) {
        textToPrint = text[i] + "<br />";
        setTimeout(printText(textToPrint, destination), 1000)
    }
}

function printText (text, destination) {
    destination.innerHTML = text;
}

function typewriter() {
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    console.log(iRow);
    var destination = document.getElementsByClassName("banner")[0];

    while ( iRow < iIndex ) {
        sContents += aText[iRow++] + '<br />';
    }

    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "|";
    
    if ( iTextPos++ == iArrLength ) {
        iTextPos = 0;
        iIndex++;
    if ( iIndex != aText.length ) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } 
    else {
        setTimeout("typewriter()", iSpeed);
    }
}

typewriter1(aText);