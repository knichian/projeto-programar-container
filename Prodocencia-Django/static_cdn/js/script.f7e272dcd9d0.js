

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



function toggle(element) {
    element.classList.toggle("change");
}


// =========== //
// Pop up Func //
// =========== //


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
  
// function closePopUp(parentElement) {
//   parentElement.remove()
//   removeOverlay()
//   if (localStorage.getItem('cookieConsent') === 'true') {
//     document.cookie = "popupShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
//   }
// }


// window.onload = function() {
//     if (document.cookie.indexOf("popupShown=true") === -1) {
//         exibirPopup();
//     }
// };
  

window.onload = function() {
  exibirPopup(basicPopUp, 'popupShown', () => document.cookie.indexOf("popupShown=true") === -1);
  exibirPopup(resultsPopUp, 'questionarioRespondido', () => localStorage.getItem('questionarioRespondido') !== 'true');
};

function exibirPopup(popUpConfig, cookieName, checkFunction) {
  const cookieExists = checkFunction();
  const popUpShown = document.cookie.indexOf(cookieName + "=true") !== -1;

  if (!cookieExists && !popUpShown) {
      const popUpElement = createPopUp(popUpConfig);
      const main = document.getElementById('main');
      main.appendChild(popUpElement);
  }
}

function closePopUp(parentElement, cookieName, setFunction) {
  parentElement.remove();
  removeOverlay();
  if (cookieName && setFunction) {
      setFunction();
      document.cookie = `${cookieName}=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
  }
}

const resultsPopUp = {
  sectionClass: {
      tag: "section",
      level: [0, 0],
      class: "results-pop-up pop-up-sec",
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
      textContent: "Seus resultados:",
      onClick: "",
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
      onClick: function() { closePopUp(this.parentNode.parentNode, 'questionarioRespondido', () => localStorage.setItem('questionarioRespondido', 'true')); },
  },
};

// // Agora vamos modificar a função exibirPopup para exibir o popup de resultados após o usuário responder o questionário
// function exibirPopup() {
//   // Simulando a resposta ao questionário (você deve adaptar isso com sua lógica real)
//   const questionarioRespondido = true; // Suponha que o questionário foi respondido corretamente

//   if (questionarioRespondido && document.cookie.indexOf("popupShown=true") === -1) {
//       // Se o questionário foi respondido e o popup não foi mostrado ainda
//       exibirResultsPopUp(); // Mostra o popup de resultados
//   } else {
//       // Se não, mostra o popup original
//       const popUp = createPopUp(basicPopUp);
//       const main = document.getElementById('main');
//       main.appendChild(popUp);
//   }
// }



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
