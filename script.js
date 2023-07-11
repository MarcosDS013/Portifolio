const $ = document.querySelector.bind(document);

function TabNavigation() {
  const html = {
    links: [...$(".tab-links").children],
    contents: [...$(".tab-content").children],
    openTab: $("[data-open]"),
  };

  function hideAllTabContent() {
    html.contents.forEach((section) => {
      section.style.display = "none";
    });
  }

  function removeAllActiveClass() {
    html.links.forEach((tab) => {
      tab.className = tab.className.replace(" active", "");
    });
  }

  function showCurrentTab(id) {
    const tabcontent = $("#" + id);
    tabcontent.style.display = "block";
  }

  function selectTab(event) {
    hideAllTabContent();
    removeAllActiveClass();

    const target = event.currentTarget;
    showCurrentTab(target.dataset.id);

    target.className += " active";
  }

  function listenForChange() {
    html.links.forEach((tab) => {
      tab.addEventListener("click", selectTab);
    });
  }
  function init() {
    hideAllTabContent();
    listenForChange();
    html.openTab.click();
  }

  return {
    init,
  };
}

window.addEventListener("load", () => {
  const tabNavigation = TabNavigation();
  console.log(tabNavigation);
  tabNavigation.init();
});

/*=================================================================================*/

/*=========== DARK LIGHT MODE ===============*/

let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

/*=========== SELEÇÃO DE PALAVRAS SOBRE HARD SKILLS ===============*/

var palavras = [
  "Programador",
  "Desenvolvedor",
  "Web Designer",
  "um Entusiasta!",
];
var index = 0;
var palavraElement = document.getElementById("palavra");
var letraIndex = 0;
var intervalId;

function exibirLetra() {
  palavraElement.textContent += palavras[index].charAt(letraIndex);
  letraIndex++;

  if (letraIndex >= palavras[index].length) {
    clearInterval(intervalId);
    setTimeout(reiniciarLoop, 1000);
  }
}

function reiniciarLoop() {
  letraIndex = 0;
  palavraElement.textContent = "";
  index = (index + 1) % palavras.length;
  intervalId = setInterval(exibirLetra, 100); // Exibe uma nova letra a cada 200 milissegundos
}

// Inicia o loop infinito
intervalId = setInterval(exibirLetra, 100); // Exibe uma nova letra a cada 200 milissegundos

/*=======================================================================================*/

var acc = document.getElementsByClassName("Mostrar");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    this.classList.toggle("rotate");
  });

  // Fechar os painéis iniciais
  var panel = acc[i].nextElementSibling;
  panel.style.display = "none";
}

/*=============================================================================================*/

window.addEventListener("scroll", function () {
  const darkModeIcon = document.getElementById("darkMode-icon");
  const scrolled = window.scrollY > 0;
  darkModeIcon.classList.toggle("scrolled", scrolled);
});

/*=====================================================================*/

function openColorBox() {
  var colorBox = document.getElementById("colorBox");
  if (colorBox.style.display === "none") {
    colorBox.style.display = "block";
  } else {
    colorBox.style.display = "none";
  }
}

function changeColor(color) {
  document.body.className = color;
}

/*===============================================================================*/
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  if (window.scrollY > 0) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
});

/*=======================================================================*/

//abrir e fechar o menu burger
document.getElementById("menu-btn").addEventListener("click", function () {
  document
    .getElementsByClassName("responsive-menu")[0]
    .classList.toggle("show-menu");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 1024) {
    document
      .getElementsByClassName("responsive-menu")[0]
      .classList.remove("show-menu");
  }
});
