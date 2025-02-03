

const texto = document.querySelector("#texto");
const p_texto = document.querySelector("#p_texto");
const btn_texto = document.querySelector("#btn_texto");

btn_texto.addEventListener("click", (env)=>{


});

//Aprendendo como funciona

let num = 10

localStorage.setItem("Numero", num)
localStorage.setItem("Nome", "mario")
localStorage.setItem("Numero", 33)

//para obter o valor da chave

alert(localStorage.getItem("Numero"))
alert(localStorage.getItem("Nome"))

//remove as chaves

//localStorage.clear()

alert(localStorage.key(0)) //mostra oa chave de indice 0

alert(localStorage.getItem(localStorage.key(0)))

//obtendo o tamanho do local storage
alert(localStorage.length)

//sessionStorage

sessionStorage.setItem("ano", 1997)

//ele tem as mesmas funções só que quando o navegador é fechados os dados somem
