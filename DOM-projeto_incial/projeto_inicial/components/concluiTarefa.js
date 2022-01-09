
const BotaoConclui = ()=>{
    const botaoConclui = document.createElement("button");

    botaoConclui.classList.add("check");
    botaoConclui.innerText = "concluir";
    botaoConclui.addEventListener("click", concluirTarefa)

    return botaoConclui;
}

const concluirTarefa = (evento)=>{
    const botaoConclui = evento.target;

    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle("done");
}

export default  BotaoConclui;