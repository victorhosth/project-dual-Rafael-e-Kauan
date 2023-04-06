const htmlSite = document.querySelector("html");
let oneColumn = document.querySelectorAll(".colunas_div.col1 img");
let twoColumns = document.querySelectorAll(".colunas_div.col2 img");
let treeColumns = document.querySelectorAll(".colunas_div.col3 img");
const allColumns = [...oneColumn,...twoColumns, ...treeColumns];

let botaoThemaDark = document.querySelector(".thema_dark");
let botaoThemaWhite = document.querySelector(".thema_white");

//verifica o tema escolhido e já faz a alteração;
let storageThema = localStorage.getItem('Thema');
let storageThemaString = JSON.parse(storageThema);
if(storageThemaString == "Dark"){
  switchForDark()
}else{
  switchForWhite()
}
//variaveis usadas
let widget = document.querySelectorAll(".widget_item");
//menu mobile desktop
document.querySelector(".menuMobile").addEventListener("click", function () {
  //gira o botão;
  document.querySelector(".menuMobile").classList.toggle("open");
  document.querySelector("header").classList.toggle("open");
  document.querySelector(".logo_menu h1").classList.toggle("open");
  document.querySelector("main").classList.toggle("open");
  document.querySelector(".botao.add").classList.toggle("open");
  document.querySelector(".botao.edi").classList.toggle("open");
  document.querySelector(".botao.del").classList.toggle("open");
});
let menu = document.querySelector(".menuMobileMob").children;
//menu mobile desktop
document.querySelector(".menuMobileMob").addEventListener("click", function () {
  //gira o botão;
  document.querySelector(".menuMobileMob").classList.toggle("open");
  document.querySelector("header").classList.toggle("open");

  menu[0].classList.toggle("none");
  menu[1].classList.toggle("none");
});
//definindo botão de settings e o modal que vai aparecer
let botaoSettings = document.querySelector(".botao.edi");
let modalSettings = document.querySelector(".settings");
let botaoClosedSettings = document.querySelector(".container_settings h1 svg");
let botaoClosedSave = document.querySelector(".settings_botao");

//evento de click botão settings
botaoSettings.addEventListener("click", function () {
  modalSettings.classList.toggle("closed");
});
//sair da settings ao clicar fora.
modalSettings.addEventListener('mousedown', function(clicked){
  if(clicked.target == modalSettings){
    modalSettings.classList.toggle("closed");
  }
})
//botao closed settings
botaoClosedSettings.addEventListener("click", function () {
  modalSettings.classList.toggle("closed");
});
botaoClosedSave.addEventListener("click", function () {
  modalSettings.classList.toggle("closed");
});


//click botao WHITE


botaoThemaWhite.addEventListener("click", switchForWhite);
//click botao DARK

botaoThemaDark.addEventListener("click", switchForDark);
function switchForWhite(){
  if (htmlSite.classList.contains("white_mode")) {
  } else {
    allColumns.forEach(x => {
      x.classList.toggle('none')
    });

    botaoThemaDark.classList.toggle("selected");
    botaoThemaWhite.classList.toggle("selected");
    htmlSite.classList.toggle("white_mode");

    let selectedThema = "White";
  const selectedThemaString = JSON.stringify(selectedThema);
  localStorage.setItem('Thema', selectedThemaString);
  }


}

function switchForDark(){
  if (htmlSite.classList.contains("white_mode")) {
    allColumns.forEach(x => {
      x.classList.toggle('none')
    });
    botaoThemaDark.classList.toggle("selected");
    botaoThemaWhite.classList.toggle("selected");
    htmlSite.classList.remove("white_mode");

    let selectedThema = "Dark";
    const selectedThemaString = JSON.stringify(selectedThema);
    localStorage.setItem('Thema', selectedThemaString);
  } else {
  }

}


