
// ================ //
// Seletores do DOM //
// ================ //


const typedTextSpanSwap = document.querySelector(".typedTextSwap");
const cursorSpanSwap = document.querySelector(".cursorSwap");

let sectionOfTypedTextString = document.getElementById('main').children[1];
let typedTextString;
let cursorSpanToolTips;


// ====== //
// Delays //
// ====== //

// Strings

const newTextDelayToolTips = 50; // Delay between current and next text strings
const erasingDelayToolTips = 15;  
const initTypingDelayToolTips = 500;
const initEraseDelayToolTips = 1000;

// Swap

const typingDelaySwap = 200;
const erasingDelaySwap = 50;
const initTypingDelaySwap = 350;
const initErasingDelaySwap = 500;


// ======= //
// Indexes //
// ======= //


let charIndexToolTips = 0;
let arrayToUse = 0;


let textArraySIndexSwap = 0;
let charIndexSwap = 0;


// ============= //
// Arrays to Use //
// ============= //


const textArraySwap = ["Desafiador","Evoluir","Aprender","Legal","Vida"];


const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
    
    if (entry.target.classList.contains('hidden')){
        typedTextString =  entry.target
        cursorSpanToolTips = typedTextString.children[0];
    }

    if (entry.isIntersecting){
        entry.target.classList.add('show');
        
        typedTextString = entry.target;        
        cursorSpanToolTips = typedTextString.children[0];
    }
    else{
        entry.target.classList.remove('show');
        
        eraseStringWithOutDelay(entry.target);    
    }

  });

});

const hiddenSection = document.querySelectorAll('.hidden');
hiddenSection.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    
    if(textArraySwap.length) {
        setTimeout(typeS, initErasingDelaySwap);
    }
});



function eraseStringWithOutDelay (el){

    if (!el.classList.contains('show')){
        
        cursorSpanToolTips.textContent = '';
        cursorSpanToolTips.classList.remove("typing");
    }
}

function isMouseHoverOnIt (element){
    element.classList.remove("hoveHide")
    sectionOfTypedTextString = element
}

function isntMouseHoverOnIt (element){
    element.classList.add("hoveHide")
}



// ============== //
// Swap Text Init //
// ============== //


function typeS() {

    if (charIndexSwap < textArraySwap[textArraySIndexSwap].length){

        if(!cursorSpanSwap.classList.contains("typing")) cursorSpanSwap.classList.add("typing");
        typedTextSpanSwap.textContent += textArraySwap[textArraySIndexSwap].charAt(charIndexSwap);
        charIndexSwap++;
        setTimeout(typeS, typingDelaySwap);
    }
    
    else {
      cursorSpanSwap.classList.remove("typing");
      setTimeout(eraseS, initErasingDelaySwap);
    }
}

function eraseS() {
	if (charIndexSwap > 0) {

        if(!cursorSpanSwap.classList.contains("typing")){
            cursorSpanSwap.classList.add("typing");
        }

        typedTextSpanSwap.textContent = textArraySwap[textArraySIndexSwap].substring(0, charIndexSwap-1);
        charIndexSwap--;
        setTimeout(eraseS, erasingDelaySwap);
    } 
    else {
        cursorSpanSwap.classList.remove("typing");
        textArraySIndexSwap++;

        if(textArraySIndexSwap>=textArraySwap.length) {
            textArraySIndexSwap=0;
        }

        setTimeout(typeS, initTypingDelaySwap);
    }
}


// ============= //
// Swap Text end //
// ============= //

