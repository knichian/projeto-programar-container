

// ============ //
// Copiar Texto //
// ============ //


function copyCode(selector) {
    let codeBox = document.querySelector(selector);
    console.log('Daniel Log - copyCode - selector:', selector);
    console.log('Daniel Log - copyCode - codeBox:', codeBox);
    let code = codeBox.querySelector("code");
    let range = document.createRange();
    range.selectNode(code);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("O código foi copiado para a área de transferência!");
}





var checkbox = document.getElementById('button-menu');
var body = document.body;
var menuNav = document.getElementById('menuNav');

body.addEventListener('click', function() {
  checkbox.checked = false;
});

menuNav.addEventListener('click', function(event) {
  event.stopPropagation();
});


// =============== //
// Menu Box Sizing //
// =============== //

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function exemplo() {
        await sleep(100); // Aguarda por 2000 milissegundos (2 segundos)
        menu.style.setProperty('min-width', '250px')

        let size = maxSize(menu)
        let sizeB = menu.offsetWidth - size
        let sizeU = (size + size*sizeRel) + sizeB
    
        menu.style.setProperty('min-width', sizeU + 'px')
    }
    exemplo();
});


let sizeRel = 0

function isMobileDevice() {
    return window.innerWidth <= 768 // Defina um valor de referência adequado
}

// To do 
// corrigir media querrys
        
if (isMobileDevice()) {
    sizeRel = 0
} else {
    sizeRel = 0.2
}

const menu = document.getElementById('menu')

menu.addEventListener('change', handleCheckboxChange)


function handleCheckboxChange(event) {
    menu.style.setProperty('min-width', '250px')

    let size = maxSize(menu)
    let sizeB = menu.offsetWidth - size
    let sizeU = (size + size*sizeRel) + sizeB

    menu.style.setProperty('min-width', sizeU + 'px')
}

function maxSize(el) {
    let maxSize = 0;
    const labels = el.getElementsByClassName('lbInput');
    const anchors = el.getElementsByTagName('a');
  
    // Calcula o tamanho máximo entre as labels
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      const width = label.offsetWidth;
      
      if (width > maxSize) {
        maxSize = width;
      }
    }
  
    // Calcula o tamanho máximo entre as tags <a>
    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];
        const width = anchor.offsetWidth
    
        if (width > maxSize) {
            maxSize = width
        }
    }
    
    return maxSize;
}

// ================ //
// Seletores do DOM //
// ================ //


// const typedTextSpanSwap = document.querySelector(".typedTextSwap");
// const cursorSpanSwap = document.querySelector(".cursorSwap");

// let sectionOfTypedTextString = document.getElementById('main').children[1];
// let typedTextString;
// let cursorSpanToolTips;


// // ====== //
// // Delays //
// // ====== //

// // Strings

// const newTextDelayToolTips = 50; // Delay between current and next text strings
// const erasingDelayToolTips = 15;  
// const initTypingDelayToolTips = 500;
// const initEraseDelayToolTips = 1000;

// // Swap

// const typingDelaySwap = 200;
// const erasingDelaySwap = 50;
// const initTypingDelaySwap = 350;
// const initErasingDelaySwap = 500;


// // ======= //
// // Indexes //
// // ======= //


// let charIndexToolTips = 0;
// let arrayToUse = 0;


// let textArraySIndexSwap = 0;
// let charIndexSwap = 0;


// ============= //
// Arrays to Use //
// ============= //


// const textArraySwap = ["Desafiador","Evoluir","Aprender","Legal","Vida"];
// const textArraysToolTips = [
//     '<-- Clique no card para ver o projeto -->',
//     '<-- Para visualizar informações adicionais, mantenha pressionado o card desejado por alguns instantes -->',
//     '<-- Clique no card para mais informações -->',
//     '<-- Clique no card para acessar o RoadMap -->',
// ]

// const observer = new IntersectionObserver ((entries) => {
//     entries.forEach((entry) => {
    
//     if (entry.target.classList.contains('hidden')){
//         typedTextString =  entry.target
//         cursorSpanToolTips = typedTextString.children[0];
//     }

//     if (entry.isIntersecting){
//         entry.target.classList.add('show');
        
//         typedTextString = entry.target;        
//         cursorSpanToolTips = typedTextString.children[0];
//     }
//     else{
//         entry.target.classList.remove('show');
        
//         eraseStringWithOutDelay(entry.target);    
//     }

//   });

// });

// const hiddenSection = document.querySelectorAll('.hidden');
// hiddenSection.forEach((el) => observer.observe(el));

// document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    
//     if(textArraySwap.length) {
//         setTimeout(typeS, initErasingDelaySwap);
//     }

    // if(textArraysToolTips[arrayToUse].length){
    //     setTimeout(typeStringRefac, newTextDelayToolTips);
    // }
// });


// function typeStringRefac () {

//     let indexToGetNumber = typedTextString.getAttribute('class').indexOf('tip') + 3;

    
//     if (typedTextString.classList.contains('show')){
//         arrayToUse =  parseInt(typedTextString.getAttribute('class')[indexToGetNumber], 10) - 1;
//     }

    
//     if ( charIndexToolTips < textArraysToolTips[arrayToUse].length && (typedTextString.classList.contains('show') && !sectionOfTypedTextString.classList.contains('hoveHide') )){

//         if( !cursorSpanToolTips.classList.contains("typing") ) {
//             cursorSpanToolTips.classList.add("typing");
            
//         }
        
//         cursorSpanToolTips.textContent += textArraysToolTips[arrayToUse][charIndexToolTips];
//         charIndexToolTips++;
//         setTimeout(typeStringRefac, newTextDelayToolTips);
    
//     }
    
//     else {
        
//         cursorSpanToolTips.classList.remove("typing");
//         setTimeout(eraseStringRefac, initEraseDelayToolTips);
//     }

//     console.log('escrevendo')
    
// }

// function eraseStringRefac() {

//     if (charIndexToolTips > 0) {

//         if(!cursorSpanToolTips.classList.contains("typing")) {
//             cursorSpanToolTips.classList.add("typing");
//         }

//         cursorSpanToolTips.textContent = textArraysToolTips[arrayToUse].substring(0, charIndexToolTips-1);
        
        
//         charIndexToolTips--;
//         setTimeout(eraseStringRefac, erasingDelayToolTips);
//     } 

//     else {
//         cursorSpanToolTips.classList.remove("typing");
//         setTimeout(typeStringRefac, initTypingDelayToolTips);
// //     }
// // }

// function eraseStringWithOutDelay (el){

//     if (!el.classList.contains('show')){
        
//         cursorSpanToolTips.textContent = '';
//         cursorSpanToolTips.classList.remove("typing");
//     }
// }

// function isMouseHoverOnIt (element){
//     element.classList.remove("hoveHide")
//     sectionOfTypedTextString = element
// }

// function isntMouseHoverOnIt (element){
//     element.classList.add("hoveHide")
// }



// ============== //
// Swap Text Init //
// ============== //


// function typeS() {

//     if (charIndexSwap < textArraySwap[textArraySIndexSwap].length){

//         if(!cursorSpanSwap.classList.contains("typing")) cursorSpanSwap.classList.add("typing");
//         typedTextSpanSwap.textContent += textArraySwap[textArraySIndexSwap].charAt(charIndexSwap);
//         charIndexSwap++;
//         setTimeout(typeS, typingDelaySwap);
//     }
    
//     else {
//       cursorSpanSwap.classList.remove("typing");
//       setTimeout(eraseS, initErasingDelaySwap);
//     }
// }

// function eraseS() {
// 	if (charIndexSwap > 0) {

//         if(!cursorSpanSwap.classList.contains("typing")){
//             cursorSpanSwap.classList.add("typing");
//         }

//         typedTextSpanSwap.textContent = textArraySwap[textArraySIndexSwap].substring(0, charIndexSwap-1);
//         charIndexSwap--;
//         setTimeout(eraseS, erasingDelaySwap);
//     } 
//     else {
//         cursorSpanSwap.classList.remove("typing");
//         textArraySIndexSwap++;

//         if(textArraySIndexSwap>=textArraySwap.length) {
//             textArraySIndexSwap=0;
//         }

//         setTimeout(typeS, initTypingDelaySwap);
//     }
// }


// ============= //
// Swap Text end //
// ============= //


function toggle(element) {
    element.classList.toggle("change");
}


// =========== //
// Pop up Func //
// =========== //


const basicPopUp2 = {
    sectionClass: {
        tag: "section",
        level: [0, 0],
        class: "pop-up-sec",
        id: "",
        textContent: "",
        onClick: "",
    },
    divClass: {
        tag: "div",
        level: [1, 0],
        class: "pop-up-text-inner",
        id: "",
        textContent: "",
        onClick: "",
    },
    headingText: {
        tag: "h2",
        level: [2, 1],
        class: "",
        id: "",
        textContent: "Resultado do Questionário",
        onClick: "",
    },
    linkButton: {
        tag: "a",
        level: [2, 1],
        class: "btnToMakeBorder",
        id: "",
        textContent: "",
        onClick: closePopUp,
        link: "form",
        children: [
            {
            tag: "section",
            class: "buttons",
            id: "",
            children: [
                {
                tag: "div",
                children: [
                    {
                    tag: "h3",
                    textContent: "Responder Questionário",
                    },
                ],
                },
            ],
            },
        ],
    },
    closeButton: {
        tag: "div",
        level: [2, 0],
        class: "close",
        id: "",
        textContent: "",
        children: [
            {
            tag: "span",
            class: "",
            id: "",
            textContent: "",
            },
            {
            tag: "span",
            class: "",
            id: "",
            textContent: "",
            },
        ],
        onClick: closePopUp,
    },
  };
  
const basicPopUp = {
    sectionClass: {
        tag: "section",
        level: [0, 0],
        class: "pop-up-sec",
        id: "",
        textContent: "",
        onClick: "",
    },
    divClass: {
        tag: "div",
        level: [1, 0],
        class: "pop-up-text-inner",
        id: "",
        textContent: "",
        onClick: "",
    },
    headingText: {
        tag: "h2",
        level: [2, 1],
        class: "",
        id: "",
        textContent: "Criamos um Questionário para avaliarmos o conhecimento geral dos alunos de programação",
        onClick: "",
    },
    linkButton: {
        tag: "a",
        level: [2, 1],
        class: "btnToMakeBorder",
        id: "",
        textContent: "",
        onClick: closePopUp,
        link: "form",
        children: [
            {
            tag: "section",
            class: "buttons",
            id: "",
            children: [
                {
                tag: "div",
                children: [
                    {
                    tag: "h3",
                    textContent: "Responder Questionário",
                    },
                ],
                },
            ],
            },
        ],
    },
    closeButton: {
        tag: "div",
        level: [2, 0],
        class: "close",
        id: "",
        textContent: "",
        children: [
            {
            tag: "span",
            class: "",
            id: "",
            textContent: "",
            },
            {
            tag: "span",
            class: "",
            id: "",
            textContent: "",
            },
        ],
        onClick: closePopUp,
    },
  };
  
  function createPopUp(dic) {
    applyOverlay();
  
    const elements = {};
  
    function createChildElements(parentElement, children) {
      if (children) {
        for (const child of children) {
          const { tag: childTag, class: childClass, id: childId, textContent: childTextContent, onClick: childOnClick, children: childChildren } = child;
          const childElement = document.createElement(childTag);
  
          if (childClass) {
            childElement.className = childClass;
          }
  
          if (childId) {
            childElement.id = childId;
          }
  
          if (childTextContent) {
            childElement.textContent = childTextContent;
          }
  
          if (childOnClick) {
            childElement.addEventListener("click", childOnClick);
          }
  
          if (childChildren) {
            createChildElements(childElement, childChildren);
          }
  
          parentElement.appendChild(childElement);
        }
      }
    }
  
    for (const key in dic) {
      const { tag, level, class: className, id, textContent, onClick, link, children } = dic[key];
      const element = document.createElement(tag);
  
      if (className) {
        element.className = className;
      }
  
      if (id) {
        element.id = id;
      }
  
      if (textContent) {
        element.textContent = textContent;
      }
  
      if (typeof onClick === "function") {
        element.addEventListener("click", function () {
          onClick(this.parentNode.parentNode);
        });
      }
  
      if (tag === "a" && link) {
        element.setAttribute("href", link);
      }
  
      elements[key] = { element, level, children };
    }
  
    const sortedKeys = Object.keys(elements).sort((a, b) => elements[a].level[0] - elements[b].level[0]);
  
    let rootElement;
    let currentParentElement;
  
    sortedKeys.forEach((key, index) => {
      const { element, level, children } = elements[key];
  
      if (index === 0) {
        rootElement = element;
        currentParentElement = element;
      } else {
        if (level[0] > elements[sortedKeys[index - 1]].level[0]) {
          currentParentElement = elements[sortedKeys[index - 1]].element;
        } else if (level[0] < elements[sortedKeys[index - 1]].level[0]) {
          let parentLevelDiff = elements[sortedKeys[index - 1]].level[0] - level[0];
          while (parentLevelDiff > 0) {
            currentParentElement = currentParentElement.parentNode;
            parentLevelDiff--;
          }
        }
        currentParentElement.appendChild(element);
      }
  
      createChildElements(element, children);
    });
  
    return rootElement;
  }
  
  

  


function applyOverlay() {
    const overlay = document.createElement("div")
    overlay.classList.add("overlay")
    document.body.appendChild(overlay)
}
  
function removeOverlay() {
    const overlay = document.querySelector(".overlay")
    if (overlay) {
      overlay.remove()
    }
}
  
function closePopUp(parentElement) {
  parentElement.remove()
  removeOverlay()
  if (localStorage.getItem('cookieConsent') === 'true') {
    document.cookie = "popupShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  }
}


window.onload = function() {
    if (document.cookie.indexOf("popupShown=true") === -1) {
        exibirPopup();
    }
};
  
function exibirPopup() {
    const popUp = createPopUp(basicPopUp2)
    const main = document.getElementById('main')
    main.appendChild (popUp)
}


// ================== //
// Permission cookies //
// ================== //


function askForCookiePermission() {
    // Verifica se o consentimento para cookies já foi concedido
    if (localStorage.getItem('cookieConsent') === 'true') {
      return;
    }
  
    // Cria o elemento de aviso de cookies
    const cookieAlert = document.createElement('div');
    cookieAlert.classList.add('cookie-alert');
    cookieAlert.innerHTML = `
      <p>Este site usa cookies para melhorar a sua experiência. Ao continuar navegando, você concorda com o uso de cookies.</p>
      <button class="cookie-accept">Continuar</button>
    `;
  
    // Função para aceitar o uso de cookies
    function acceptCookies() {
      localStorage.setItem('cookieConsent', 'true');
      document.body.removeChild(cookieAlert);
    }
  
    // Função para recusar o uso de cookies
    function declineCookies() {
      localStorage.setItem('cookieConsent', 'false');
      document.body.removeChild(cookieAlert);
    }
  
    // Adiciona os eventos de clique nos botões de aceitar e recusar cookies
    const acceptButton = cookieAlert.querySelector('.cookie-accept');
    const declineButton = cookieAlert.querySelector('.cookie-decline');
    acceptButton.addEventListener('click', acceptCookies);
    declineButton.addEventListener('click', declineCookies);
  
    // Adiciona o aviso de cookies ao corpo do documento
    document.body.appendChild(cookieAlert);
  }
  
// Chama a função para solicitar a autorização de cookies
askForCookiePermission();


let activeModal = null;

function imageOverlayCreator(imageElement){
  let modalContainer = document.createElement("div");
  modalContainer.classList.add("modal");
  modalContainer.onclick = closeModal;

  let modalContent = imageElement.cloneNode(true); // Clona o elemento de imagem
  modalContent.classList.add("modal-content");
  modalContainer.appendChild(modalContent); // Adiciona a imagem clonada ao modal content

  modalContainer.style.display = "flex";

  return modalContainer;
}

function openModal(imageElement) {
  if (activeModal) {
      closeModal();
  }

  modalContainer = imageOverlayCreator(imageElement)

  let page = document.getElementById("page");
  page.appendChild(modalContainer)

  activeModal = modalContainer;

  document.addEventListener("keydown", handleKeyDown);
}

function closeModal() {
    if (activeModal) {
        activeModal.remove();
        activeModal = null;
        document.removeEventListener("keydown", handleKeyDown);
    }
}

function handleKeyDown(event) {
    if (event.key === "Escape") {
        closeModal();
    }
}

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("thumbnail-img")) {
        openModal(event.target);
    }
    if (event.target.classList.contains("modal-content")) {
        closeModal();
    }
});



  // Simular registro do escaneamento (isso pode ser mais complexo em um ambiente real)

  function registrarEntrada() {
    // Fazer uma requisição para ler o contador.txt
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../../accesses/counter.txt", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var count = parseInt(xhr.responseText);

            // Incrementar o contador
            count++;

            // Fazer uma nova requisição para atualizar o contador no servidor
            var xhrUpdate = new XMLHttpRequest();
            xhrUpdate.open("POST", "atualizar_contador.php", true);
            xhrUpdate.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhrUpdate.onreadystatechange = function() {
                if (xhrUpdate.readyState === 4 && xhrUpdate.status === 200) {
                    // Redirecionar para a página principal após registrar a entrada
                    window.location.href = "https://projetoprogramar.tech";
                }
            };
            xhrUpdate.send("count=" + count); 
        }
    };
    xhr.send();

    console.log('redirecionando')
}



// ImageShow Adjust



// document.addEventListener("DOMContentLoaded", function() {
//   const imgElement = document.querySelector('.imgShow');

//   let h1 = imgElement.querySelector('h1');
//   const h1Height = h1.clientHeight
  
//   let h3 = imgElement.querySelector('h3');
//   const h3Height = h3.clientHeight
  
//   let img = imgElement.querySelector('img');
//   const imgHeight = img.clientHeight
  
  
//   let parent = imgElement.parentElement.parentElement
//   const parentHeight = parent.clientHeight
  
//   const thisHeight = imgElement.clientHeight

//   // imgElement.addEventListener("mouseover", function() {
//   //   let heightAtt = imgHeight + imgHeight*0.1
    
    
//   //   img.style.height = heightAtt;
//   //   parent.style.height = heightAtt;
//   //   this.style.height = heightAtt;

//   //   console.log ('foi')
    
//   // });
  
//   imgElement.addEventListener("pointerover", function() {
    
//    let heightAtt = imgHeight + imgHeight*0.1
    
    
//       img.style.height = heightAtt;
//       parent.style.height = heightAtt;
//       this.style.height = heightAtt;
    
//   });

//   imgElement.addEventListener("pointerout", function() {
//     img.style.height = imgHeight
//     parent.style.height = parentHeight;
//     this.style.height = thisHeight;
    
//   });
// });