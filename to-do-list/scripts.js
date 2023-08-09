const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-tasks");

let minhaListaDeItens = [];


function adicionarNovaTarefa() {

  if(input.value == ""){
    alert("Digite uma tarefa")
  }else{
  minhaListaDeItens.push({
    tarefa: input.value,
    concluida: false
  });
}
  
  input.value = "";

  mostrarTarefas()
}


function mostrarTarefas(){

    let novaLi ="";    

    minhaListaDeItens.forEach( (item, posicao) =>{
        novaLi = novaLi + `

        <li class="task ${item.concluida && "done"}">
                   <img src="./img/checked.png" alt="tarefa-ok" onclick="concluirTarefa(${posicao})">
                   <p>${item.tarefa}</p>
                 <img src="./img/trash.png" alt="trash-tarefa" onclick="deletarItem(${posicao})">
        </li>
        
        `
    })

    listaCompleta.innerHTML = novaLi;

    localStorage.setItem("lista",JSON.stringify(minhaListaDeItens))
   
}

function concluirTarefa(posicao){
   minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
   mostrarTarefas()

}

function deletarItem(posicao){
    minhaListaDeItens.splice(posicao,1)
    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem("lista")

    if(tarefasDoLocalStorage){
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }   
    
    mostrarTarefas()

}


recarregarTarefas()
button.addEventListener("click", adicionarNovaTarefa);
